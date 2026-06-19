import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "தொடர்புக்கு — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "கோவில் முகவரி, தொலைபேசி, மின்னஞ்சல், தரிசன நேரம், கூகிள் வரைபடம்." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

      if (!supabaseUrl) {
        throw new Error("Supabase URL is not configured. Please contact the administrator.");
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      
      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <>
      <PageHero eyebrow="தொடர்புக்கு" title="எங்களைத் தொடர்புகொள்ள" subtitle="உங்கள் வேண்டுகோள், சந்தேகம், தரிசன ஏற்பாடு — அனைத்துக்கும் வரவேற்கிறோம்." />

      {/* Donation Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-12 border border-gold/20 shadow-luxury bg-white/60 text-center">
              <h2 className="text-3xl md:text-4xl font-serif-tamil font-bold text-[#D9381E] mb-4">
                நன்கொடை
              </h2>
              <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                பீடத்தின் தினசரி பூஜைகள் அன்னதானம் மற்றும் திருப்பணிகளுக்கு நன்கொடை வழங்க விரும்புபவர்கள் ஆசிரம அலுவலகத்தை அணுகி செலுத்த அன்புடன் வேண்டுகிறோம்
              </p>
              
              <div className="inline-block group">
                <div className="bg-white p-4 rounded-3xl shadow-md border border-gray-100 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-gray-50 overflow-hidden relative flex items-center justify-center">
                    {/* Placeholder for QR Code */}
                    <img 
                      src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781786253/WhatsApp_Image_2026-06-18_at_4.00.56_PM_m4wxbo.jpg" 
                      alt="Donation QR Code Placeholder" 
                      className="object-cover p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-3xl m-2 pointer-events-none" />
                  </div>
                  <p className="mt-4 font-bold text-gray-800 tracking-wide">Scan to Donate</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-luxury aspect-[4/3] glass">
              <iframe
                title="கோவில் வரைபடம்"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0296155345222!2d79.8406961!3d10.7321992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556c052bd96773%3A0xd1f44817b4908649!2sArulmigu%20Shri%20Korakkar%20Siddhar&#39;s%20Jeeva%20Samadhi!5e0!3m2!1sen!2sin!4v1780943140572!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl relative overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-gold" />
              
              <div className="relative space-y-5">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif-tamil font-bold text-[#D9381E] tracking-wide">செய்தி அனுப்ப</h3>
                  <p className="text-gray-600 mt-1 text-sm font-medium">உங்கள் விவரங்களை கீழே உள்ளிடவும்</p>
                </div>
                
                {status === "success" && (
                  <div className="bg-green-50 text-green-800 border border-green-200 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <p className="font-medium text-sm">நன்றி! உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது. விரைவில் தொடர்புகொள்வோம்.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 text-red-800 border border-red-200 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="font-medium text-sm">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="பெயர்" type="text" name="name" value={formData.name} onChange={handleChange} required />
                  <Field label="தொலைபேசி" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                
                <div className="space-y-5">
                  <Field label="மின்னஞ்சல்" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  <Field label="தலைப்பு" type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                  
                  <div className="w-full group/field">
                    <label className="block text-[13px] font-bold uppercase tracking-widest text-gray-800 mb-2 ml-1 group-focus-within/field:text-[#D9381E] transition-colors">
                      செய்தி <span className="text-[#D9381E]">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4} 
                      className="w-full bg-gray-50/50 border-2 border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-[#D9381E] focus:ring-4 focus:ring-[#D9381E]/10 hover:border-[#D9381E]/50 transition-all duration-300 shadow-sm resize-none" 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 mt-4 rounded-xl bg-[#D9381E] text-white font-extrabold text-lg tracking-wider shadow-[0_8px_20px_rgba(218,165,32,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(218,165,32,0.6)] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_8px_20px_rgba(218,165,32,0.4)] disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative flex items-center gap-2 drop-shadow-md">
                      {status === "loading" ? (
                        <>அனுப்புகிறது <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>செய்தி அனுப்ப <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" /></>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, type, name, value, onChange, required = false }: any) {
  return (
    <div className="w-full group/field">
      <label className="block text-[13px] font-bold uppercase tracking-widest text-gray-800 mb-2 ml-1 group-focus-within/field:text-[#D9381E] transition-colors">
        {label} {required && <span className="text-[#D9381E]">*</span>}
      </label>
      <input 
        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-gray-50/50 border-2 border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-[#D9381E] focus:ring-4 focus:ring-[#D9381E]/10 hover:border-[#D9381E]/50 transition-all duration-300 shadow-sm" 
      />
    </div>
  );
}
