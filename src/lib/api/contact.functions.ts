import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      phone: z.string().optional(),
      email: z.string().email(),
      subject: z.string().min(1),
      message: z.string().min(1),
    })
  )
  .handler(async ({ data }) => {
    const RESEND_API_KEY = process.env.VITE_RESEND_API_KEY;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "sshathiskumar54@gmail.com";
    const FROM_EMAIL = process.env.VITE_RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (!RESEND_API_KEY) {
      console.warn("[contact.functions] RESEND_API_KEY not set — skipping emails.");
      return { success: false, adminEmailSent: false, userEmailSent: false, error: "Email configuration missing." };
    }

    const { name, phone, email, subject, message } = data;
    const resendUrl = "https://api.resend.com/emails";

    // Format submission datetime in IST
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // ─── EMAIL 1: Admin Notification ──────────────────────────────────────────
    let adminEmailSent = false;
    try {
      const adminRes = await fetch(resendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `INFYNUX Solutions <${FROM_EMAIL}>`,
          to: [ADMIN_EMAIL],
          subject: `New Contact Enquiry — ${subject}`,
          html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: auto; padding: 0; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background: #1a1a2e; padding: 24px 32px; display: flex; align-items: center; gap: 12px;">
                <div>
                  <h1 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700;">INFYNUX Solutions</h1>
                  <p style="margin: 4px 0 0; color: rgba(255,255,255,0.6); font-size: 13px;">New Contact Enquiry Received</p>
                </div>
              </div>
              <div style="padding: 32px; background: #ffffff;">
                <h2 style="margin: 0 0 20px; font-size: 16px; color: #111; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px;">
                  Enquiry Details
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 10px 0; color: #888; width: 130px; vertical-align: top; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Name</td>
                    <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${name}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f5f5f5;">
                    <td style="padding: 10px 0; color: #888; vertical-align: top; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Email</td>
                    <td style="padding: 10px 0; color: #111;"><a href="mailto:${email}" style="color: #D9381E; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr style="border-top: 1px solid #f5f5f5;">
                    <td style="padding: 10px 0; color: #888; vertical-align: top; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Phone</td>
                    <td style="padding: 10px 0; color: #111;">${phone || "—"}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f5f5f5;">
                    <td style="padding: 10px 0; color: #888; vertical-align: top; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Subject</td>
                    <td style="padding: 10px 0; color: #111; font-weight: 600;">${subject}</td>
                  </tr>
                  <tr style="border-top: 1px solid #f5f5f5;">
                    <td style="padding: 10px 0; color: #888; vertical-align: top; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Submitted</td>
                    <td style="padding: 10px 0; color: #111;">${submittedAt} IST</td>
                  </tr>
                </table>
                <div style="margin-top: 20px; background: #f8f8f8; border-left: 3px solid #D9381E; border-radius: 4px; padding: 16px 20px;">
                  <p style="margin: 0 0 8px; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                  <p style="margin: 0; font-size: 15px; color: #222; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
                <div style="margin-top: 24px;">
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: #D9381E; color: #fff; padding: 10px 22px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none;">
                    Reply to ${name}
                  </a>
                </div>
              </div>
              <div style="background: #f5f5f5; padding: 14px 32px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #aaa;">This notification was sent automatically from the INFYNUX Solutions contact form.</p>
              </div>
            </div>
          `,
        }),
      });

      if (adminRes.ok) {
        adminEmailSent = true;
        const adminData = await adminRes.json() as { id?: string };
        console.log(`[contact.functions] Admin email accepted by Resend. ID: ${adminData.id ?? 'unknown'} → to: ${ADMIN_EMAIL}`);
      } else {
        const errText = await adminRes.text();
        let errMsg = errText;
        try { errMsg = JSON.parse(errText).message ?? errText; } catch {}
        console.error(`[contact.functions] Admin email FAILED — HTTP ${adminRes.status}: ${errMsg}`);
      }
    } catch (err: any) {
      console.error("[contact.functions] Admin email exception:", err.message);
    }

    // ─── EMAIL 2: User Confirmation (fully in Tamil) ───────────────────────────
    let userEmailSent = false;
    try {
      const userRes = await fetch(resendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `INFYNUX Solutions <${FROM_EMAIL}>`,
          to: [email],
          subject: `We received your enquiry — INFYNUX Solutions`,
          html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; padding: 0; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background: #D9381E; padding: 28px 32px;">
                <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 0.3px;">INFYNUX Solutions</h1>
                <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">உங்கள் செய்தியைப் பெற்றோம்</p>
              </div>
              <div style="padding: 32px; background: #ffffff;">
                <p style="font-size: 17px; color: #1a1a1a; margin: 0 0 16px;">வணக்கம் <strong>${name}</strong>,</p>
                <p style="font-size: 15px; color: #444; line-height: 1.75; margin: 0 0 14px;">
                  INFYNUX Solutions-ஐ தொடர்புகொண்டதற்கு நன்றி.
                </p>
                <p style="font-size: 15px; color: #444; line-height: 1.75; margin: 0 0 24px;">
                  நீங்கள் எங்களுக்கு அனுப்பிய தொடர்பு செய்தி வெற்றிகரமாகப் பெறப்பட்டுள்ளது.
                  உங்கள் கோரிக்கையை எங்கள் குழு பரிசீலித்து, தேவையான தகவல்களுடன் உங்களைத் தொடர்புகொள்ளும்.
                </p>
                <div style="background: #faf8f5; border-left: 4px solid #D9381E; border-radius: 4px; padding: 20px 24px; margin: 0 0 28px;">
                  <p style="margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #D9381E; text-transform: uppercase; letter-spacing: 0.5px;">உங்கள் விண்ணப்பத்தின் சுருக்கம்</p>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
                    <tr>
                      <td style="padding: 7px 0; color: #888; width: 80px; vertical-align: top; font-weight: 600;">பெயர்</td>
                      <td style="padding: 7px 0; color: #111; font-weight: 600;">: ${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 7px 0; color: #888; vertical-align: top; font-weight: 600;">பொருள்</td>
                      <td style="padding: 7px 0; color: #333;">: ${subject}</td>
                    </tr>
                    <tr>
                      <td style="padding: 7px 0; color: #888; vertical-align: top; font-weight: 600;">செய்தி</td>
                      <td style="padding: 7px 0; color: #333; white-space: pre-wrap; line-height: 1.6;">: ${message}</td>
                    </tr>
                  </table>
                </div>
                <p style="font-size: 15px; color: #444; line-height: 1.75; margin: 0 0 28px;">
                  உங்கள் நேரத்திற்கும் ஆர்வத்திற்கும் மிக்க நன்றி.
                </p>
                <p style="font-size: 15px; color: #1a1a1a; margin: 0; line-height: 1.6;">
                  அன்புடன்,<br>
                  <strong>INFYNUX Solutions Team</strong>
                </p>
              </div>
              <div style="background: #f5f5f5; padding: 14px 32px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #aaa;">இந்த மின்னஞ்சல் தானியங்கி முறையில் அனுப்பப்பட்டது. தயவுசெய்து பதில் அனுப்ப வேண்டாம்.</p>
              </div>
            </div>
          `,
        }),
      });

      if (userRes.ok) {
        userEmailSent = true;
        const userData = await userRes.json() as { id?: string };
        console.log(`[contact.functions] User email accepted by Resend. ID: ${userData.id ?? 'unknown'} → to: ${email}`);
      } else {
        const errText = await userRes.text();
        let errMsg = errText;
        try { errMsg = JSON.parse(errText).message ?? errText; } catch {}
        console.error(`[contact.functions] User email FAILED — HTTP ${userRes.status}: ${errMsg}`);
        console.warn(`[contact.functions] NOTE: Using onboarding@resend.dev (sandbox) only allows sending to ${ADMIN_EMAIL}. Verify a domain at resend.com/domains to send to any user.`);
      }
    } catch (err: any) {
      console.error("[contact.functions] User email exception:", err.message);
    }

    // Report outcome — Firestore document is never affected by email failures
    if (adminEmailSent && userEmailSent) {
      return { success: true, adminEmailSent: true, userEmailSent: true };
    }

    return {
      success: false,
      adminEmailSent,
      userEmailSent,
      error: !adminEmailSent && !userEmailSent
        ? "Both emails failed to send."
        : !adminEmailSent
          ? "Admin notification email failed."
          : "User confirmation email failed.",
    };
  });
