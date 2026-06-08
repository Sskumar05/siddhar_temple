import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") || "arulmigukorakkarsithar@gmail.com"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // Handle CORS Preflight Requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    
    // Create Supabase client
    const supabaseClient = createClient(supabaseUrl, supabaseKey, {
      global: { headers: { Authorization: req.headers.get('Authorization')! } }
    })

    // Parse incoming JSON
    const payload = await req.json()
    const { name, phone, email, subject, message } = payload

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      )
    }

    // Insert into Supabase 'contact_messages' table
    const { error: dbError } = await supabaseClient
      .from("contact_messages")
      .insert([
        {
          name,
          phone,
          email,
          subject,
          message,
          ip_address: req.headers.get("x-forwarded-for") || null
        }
      ])

    if (dbError) {
      console.error("Database Insert Error:", dbError)
      throw new Error("Failed to save message to database")
    }

    // Send Emails via Resend API
    if (RESEND_API_KEY) {
      const resendUrl = "https://api.resend.com/emails"

      // 1. Admin Notification Email
      const adminEmailResponse = await fetch(resendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: "Temple Website <onboarding@resend.dev>", // Replace with your verified domain
          to: [ADMIN_EMAIL],
          subject: `New Contact Message: ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-top: 5px solid #D9381E;">
              <h2 style="color: #D9381E;">புதிய செய்தி வந்துள்ளது</h2>
              <p><strong>பெயர்:</strong> ${name}</p>
              <p><strong>தொலைபேசி:</strong> ${phone || 'N/A'}</p>
              <p><strong>மின்னஞ்சல்:</strong> ${email}</p>
              <p><strong>தலைப்பு:</strong> ${subject}</p>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </div>
          `
        })
      })

      // 2. User Confirmation Email
      const userEmailResponse = await fetch(resendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: "Arulmigu Korakkar Siddhar Temple <onboarding@resend.dev>", // Replace with your verified domain
          to: [email],
          subject: `நன்றி - எங்களை தொடர்புகொண்டதற்கு / Thank you for contacting us - ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-top: 5px solid #D9381E;">
              <h2 style="color: #D9381E;">கோரக்கர் சித்தர் ஜீவசமாதி பீடம்</h2>
              <p>வணக்கம் <strong>${name}</strong>,</p>
              <p>எங்களை தொடர்புகொண்டதற்கு மிக்க நன்றி. உங்களது செய்தி எங்கள் கவனத்திற்கு வந்துள்ளது. கூடிய விரைவில் உங்களை தொடர்புகொள்வோம்.</p>
              <p style="color: #666; margin-top: 20px;">உங்கள் செய்தி:</p>
              <div style="background: #FFF8E7; padding: 15px; border-left: 3px solid #D4AF37; margin-top: 5px;">
                <em>${message}</em>
              </div>
              <p style="margin-top: 30px; font-size: 14px; color: #888;">சித்தர் அருள் என்றும் உங்களுடன் நிலைத்திருக்கும்.</p>
            </div>
          `
        })
      })
      
      // Log errors if email fails, but don't fail the whole request if DB succeeded
      if (!adminEmailResponse.ok) {
        console.error("Admin Email failed", await adminEmailResponse.text())
      }
      if (!userEmailResponse.ok) {
        console.error("User Email failed", await userEmailResponse.text())
      }
    } else {
       console.warn("RESEND_API_KEY is not set. Emails were not sent.")
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )

  } catch (error: any) {
    console.error("Error processing request:", error)
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
