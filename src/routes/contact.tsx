import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "தொடர்புக்கு — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "கோவில் முகவரி, தொலைபேசி, மின்னஞ்சல், தரிசன நேரம், கூகிள் வரைபடம்." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="தொடர்புக்கு" title="எங்களைத் தொடர்புகொள்ள" subtitle="உங்கள் வேண்டுகோள், சந்தேகம், தரிசன ஏற்பாடு — அனைத்துக்கும் வரவேற்கிறோம்." />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
          {[
            { title: "முகவரி", text: "அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம், வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம் – 611 002" },
            { title: "தொலைபேசி", text: "+91 98765 43210\n+91 4365 123 456" },
            { title: "மின்னஞ்சல்", text: "info@korakkarpeedam.org\ndarshan@korakkarpeedam.org" },
            { title: "தரிசன நேரம்", text: "காலை: 6:00 – 12:30\nமாலை: 4:00 – 9:00" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className={i === 0 ? "lg:col-span-1" : ""}>
              <div className="glass rounded-3xl p-8 md:p-10 h-full border border-gold/20 shadow-luxury hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 bg-white/50">
                {/* <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </div> */}
                <h3 className="text-xl md:text-2xl font-bold text-[#D9381E] mb-4 tracking-wide font-serif-tamil">{c.title}</h3>
                <p className="text-base md:text-lg text-gray-800 font-medium whitespace-pre-line leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-12 border border-gold/20 shadow-luxury bg-white/60 text-center">
              <h2 className="text-3xl md:text-4xl font-serif-tamil font-bold text-[#D9381E] mb-4">
                நன்கொடை
              </h2>
              <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                கோவிலின் தினசரி பூஜைகள், அன்னதானம் மற்றும் திருப்பணிகளுக்கு உங்களால் இயன்ற நன்கொடைகளை வழங்கி இறையருள் பெற வேண்டுகிறோம்.
              </p>
              
              <div className="inline-block group">
                <div className="bg-white p-4 rounded-3xl shadow-md border border-gray-100 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-gray-50 overflow-hidden relative flex items-center justify-center">
                    {/* Placeholder for QR Code */}
                    <img 
                      src="https://res.cloudinary.com/dhjupdyus/image/upload/v1780586058/QRcode_jw9seu.jpg" 
                      alt="Donation QR Code Placeholder" 
                      className="w- h- object-cover p-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-2xl m-2 pointer-events-none" />
                  </div>
                  <p className="mt-4 font-bold text-gray-800 tracking-wide">Scan to Donate</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-luxury aspect-[4/3] glass">
              <iframe
                title="கோவில் வரைபடம்"
                src="https://www.google.com/maps?q=Nagapattinam&output=embed"
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
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl p-8 md:p-10 space-y-5"
            >
              <h3 className="text-2xl font-semibold text-primary">செய்தி அனுப்ப</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="பெயர்" type="text" />
                <Field label="தொலைபேசி" type="tel" />
              </div>
              <Field label="மின்னஞ்சல்" type="email" />
              <Field label="தலைப்பு" type="text" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold mb-2">செய்தி</label>
                <textarea rows={5} className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-luxury" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium gold-glow transition-luxury">
                {sent ? "நன்றி — விரைவில் தொடர்புகொள்வோம்" : <>செய்தி அனுப்ப <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div className="w-full">
      <label className="block text-xs uppercase tracking-widest text-gold mb-2">{label}</label>
      <input type={type} className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-luxury" />
    </div>
  );
}
