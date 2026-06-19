import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/Section";
import { Send, Loader2, CheckCircle2, AlertCircle, X, ZoomIn } from "lucide-react";


export const Route = createFileRoute("/school")({
  head: () => ({
    meta: [
      { title: "பள்ளி — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "தரமான கல்வி, ஒழுக்கம் மற்றும் மாணவர்களின் முழுமையான வளர்ச்சியை நோக்கமாகக் கொண்டு செயல்படும் கல்வி நிலையம்." },
    ],
  }),
  component: SchoolPage,
});

function SchoolPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    classApplying: "",
    address: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !anonKey) {
        throw new Error("Supabase credentials are not configured.");
      }

      const response = await fetch(`${supabaseUrl}/rest/v1/school_enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": anonKey,
          "Authorization": `Bearer ${anonKey}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          student_name: formData.studentName,
          parent_name: formData.parentName,
          mobile_number: formData.phone,
          email: formData.email || null,
          class_applying_for: formData.classApplying,
          address: formData.address,
          message: formData.message || null,
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit enquiry");
      }

      setStatus("success");
      setFormData({ studentName: "", parentName: "", phone: "", email: "", classApplying: "", address: "", message: "" });
      
      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An error occurred while submitting your enquiry.");
    }
  };


  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Mobile & Tablet: logo + title side by side */}
            <div className="flex items-center gap-4 mb-4 lg:hidden">
              <img
                src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781074340/school_logo_eidj41.png"
                alt="கோரக்கர் பள்ளி லோகோ"
                className="flex-shrink-0 w-[120px] h-[120px] md:w-[140px] md:h-[140px] object-contain drop-shadow-xl animate-float"
              />
              <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
                <span className="text-primary">அருள்மிகு கோரக்கர்</span>
                <br />
                <span className="italic font-light">மெட்ரிகுலேஷன் பள்ளி</span>
              </h1>
            </div>

            {/* Desktop: title without logo (logo shown in right column) */}
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">அறிவே உயர்ந்த செல்வம்</div>
            <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] mb-6">
              <span className="text-primary">அருள்மிகு கோரக்கர்</span>
              <br />
              <span className="italic font-light">மெட்ரிகுலேஷன் பள்ளி</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
              தரமான கல்வி, ஒழுக்கம் மற்றும் மாணவர்களின் முழுமையான வளர்ச்சியை நோக்கமாகக் கொண்டு செயல்படும் கல்வி நிலையம்.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#D9381E] text-white hover:bg-[#b02d18] font-medium transition-all shadow-luxury hover:-translate-y-0.5">
                பள்ளியை பற்றி அறிய
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#2C2C2C] border border-[#E5E5E5] hover:border-[#D9381E] hover:text-[#D9381E] font-medium transition-all shadow-sm hover:-translate-y-0.5">
                சேர்க்கை விவரங்கள்
              </a>
            </div>
          </div>
          {/* Desktop: large logo in right column */}
          <div className="relative hidden lg:flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781074340/school_logo_eidj41.png" alt="கோரக்கர் பள்ளி லோகோ" className="relative w-64 h-64 md:w-[400px] md:h-[400px] object-contain drop-shadow-2xl animate-float" />
          </div>
        </div>
      </section>

      {/* About School */}
      <section id="about"className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center text-xs uppercase tracking-[0.3em] text-gold mb-4">பள்ளியைப் பற்றி</div>
            <div className="glass rounded-3xl p-10 md:p-14 text-center border border-[#E5E5E5]/50 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">பள்ளி அறிமுகம்</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-loose max-w-3xl mx-auto">
                அருள்மிகு கோரக்கர் மெட்ரிகுலேஷன் பள்ளி மாணவர்களுக்கு தரமான கல்வி, நல்லொழுக்கம் மற்றும் வாழ்க்கைத் திறன்களை வழங்கும் நோக்கத்துடன் செயல்பட்டு வருகிறது. கல்வியுடன் ஒழுக்கம், பண்பு மற்றும் சமூகப் பொறுப்புணர்வை வளர்க்கும் கல்விச் சூழலை பள்ளி வழங்குகிறது.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* School Gallery */}
      <SchoolGallery />


      {/* Principal Section & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <Reveal className="h-full">
            <div className="h-full glass rounded-3xl p-8 md:p-10 border border-gold/10 relative overflow-hidden group shadow-sm flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-gold opacity-10 rounded-bl-full transition-transform group-hover:scale-110 duration-700" />
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">தலைமை ஆசிரியர்</div>
              <div className="space-y-5 relative z-10">
                <div>
                  <h3 className="text-3xl font-semibold text-primary mb-3">V. SRIDEVI</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-[#D9381E]/10 text-[#D9381E] rounded-full text-sm font-medium">Principal</span>
                    <span className="text-muted-foreground font-medium">B.Sc., B.Ed.</span>
                  </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-gold/30 to-transparent my-2" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  மாணவர்களின் கல்வி முன்னேற்றம், ஒழுக்க வளர்ச்சி மற்றும் எதிர்கால வெற்றிக்காக அர்ப்பணிப்புடன் செயல்பட்டு வரும் கல்வியாளர்.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div className="h-full glass rounded-3xl p-8 md:p-10 bg-gradient-to-br from-gold/5 to-transparent border border-gold/20 shadow-sm flex flex-col justify-center text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">எங்கள் நோக்கம்</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ஒவ்வொரு மாணவரும் அறிவு, ஒழுக்கம் மற்றும் தன்னம்பிக்கையுடன் வளர்ந்து சமூகத்திற்கு பயனுள்ள குடிமகனாக உருவாக வேண்டும் என்பதே எங்கள் நோக்கமாகும்.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">ஏன் எங்களை தேர்வு செய்ய வேண்டும்?</h2>
            </Reveal>
          </div>
          <div className="space-y-4">
            {[
              "தரமான கல்வி",
              "அனுபவமிக்க ஆசிரியர்கள்",
              "பள்ளி உள்கட்டமைப்பு வசதிகள் நிறைந்தது",
              "குறைந்த கல்வி கட்டணம்",
              "ஏழை எளிய மாணவர்களுக்கு கல்வி உதவித்தொகை வழங்குதல்",
              "மதிய உணவு திட்டம்",
              "Extra curricular activities (YOGA,SILAMBAM,BHARATHAM,KARATHAI,CHESS)",
              "பாதுகாப்பான கல்விச் சூழல்",
              "முழுமையான ஆளுமை வளர்ச்சி",
              "மாணவர்களின் எதிர்கால வெற்றியை நோக்கிய வழிகாட்டுதல்"
              
            ].map((feature, i) => (
              <Reveal key={i}>
                <div className="flex items-start gap-5 p-4 rounded-2xl transition-all duration-300">
                  <div className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-black leading-relaxed transition-colors">{feature}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Admission & Enquiry Form Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] to-white pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">சேர்க்கை & தகவல்</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">எங்களை தொடர்பு கொள்ளுங்கள்</h2>
              <p className="text-lg text-muted-foreground">
                பள்ளி சேர்க்கை, கல்வி விவரங்கள் மற்றும் பிற தகவல்களுக்கு கீழே உள்ள படிவத்தை நிரப்புங்கள்.
              </p>
            </Reveal>
          </div>
          
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-12 border border-[#E5E5E5]/50 shadow-luxury relative overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold" />
              
              <div className="relative space-y-6">
                
                {status === "success" && (
                  <div className="bg-green-50 text-green-800 border border-green-200 rounded-xl p-5 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <p className="font-medium">நன்றி! உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது. எங்கள் நிர்வாகம் விரைவில் உங்களை தொடர்புகொள்ளும்.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 text-red-800 border border-red-200 rounded-xl p-5 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <p className="font-medium">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="மாணவர் பெயர்" type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
                  <Field label="பெற்றோர் பெயர்" type="text" name="parentName" value={formData.parentName} onChange={handleChange} required />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="கைபேசி எண்" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  <Field label="மின்னஞ்சல் முகவரி" type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="w-full group/field">
                    <label className="block text-[13px] font-bold uppercase tracking-widest text-gray-800 mb-2 ml-1 group-focus-within/field:text-[#D9381E] transition-colors">
                      வகுப்பு <span className="text-[#D9381E]">*</span>
                    </label>
                    <select
                      name="classApplying"
                      value={formData.classApplying}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50/50 border-2 border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-900 focus:outline-none focus:bg-white focus:border-[#D9381E] focus:ring-4 focus:ring-[#D9381E]/10 hover:border-[#D9381E]/50 transition-all duration-300 shadow-sm appearance-none"
                    >
                      <option value="" disabled>select</option>
                      <option value="Pre-KG">Pre-KG</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="1">1 ஆம் வகுப்பு</option>
                      <option value="2">2 ஆம் வகுப்பு</option>
                      <option value="3">3 ஆம் வகுப்பு</option>
                      <option value="4">4 ஆம் வகுப்பு</option>
                      <option value="5">5 ஆம் வகுப்பு</option>
                      <option value="6">6 ஆம் வகுப்பு</option>
                      <option value="7">7 ஆம் வகுப்பு</option>
                      <option value="8">8 ஆம் வகுப்பு</option>
                      <option value="8">9 ஆம் வகுப்பு</option>

                    </select>
                  </div>
                  <Field label="முகவரி" type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                
                <div className="w-full group/field">
                  <label className="block text-[13px] font-bold uppercase tracking-widest text-gray-800 mb-2 ml-1 group-focus-within/field:text-[#D9381E] transition-colors">
                    உங்கள் செய்தி
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-gray-50/50 border-2 border-gray-300 rounded-xl px-4 py-3.5 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-[#D9381E] focus:ring-4 focus:ring-[#D9381E]/10 hover:border-[#D9381E]/50 transition-all duration-300 shadow-sm resize-none" 
                  />
                </div>
                
                <div className="pt-4 text-center">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2.5 px-12 py-4 rounded-xl bg-[#D9381E] text-white font-extrabold text-lg tracking-wider shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-[#b02d18] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-md disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {status === "loading" ? (
                      <>அனுப்புகிறது <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>அனுப்புக <Send className="w-5 h-5 ml-1" /></>
                    )}
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

// ─── School Gallery ────────────────────────────────────────────────
const galleryImages = [
  {
    src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781076140/school_img_2_pjyij4.jpg",
    featured: false,
  },
  {
    src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781076144/school_img_4_aogpp4.jpg",
    featured: false,
  },
  {
    src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781076140/school_img_3_p0bwjo.jpg",
    featured: false,
  },
  {
    src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781076139/school_img_1_nmbodv.jpg",
    featured: false,
  },
];

function SchoolGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const featured = galleryImages.find((img) => img.featured);
  const grid = galleryImages.filter((img) => !img.featured);

  return (
    <>
      <section className="py-20 bg-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">எங்கள் பள்ளி</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">பள்ளி வளாக காட்சிகள்</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                அருள்மிகு கோரக்கர் மெட்ரிகுலேஷன் பள்ளியின் கல்விச் சூழல் மற்றும் மாணவர் வளர்ச்சியை வெளிப்படுத்தும் சிறப்பு காட்சிகள்.
              </p>
            </Reveal>
          </div>

          {/* Featured Image */}
          {featured && (
            <Reveal>
              <div
                className="relative overflow-hidden rounded-3xl shadow-luxury mb-6 cursor-zoom-in group"
                style={{ aspectRatio: "16/7" }}
                onClick={() => setLightbox(featured)}
              >
                <img
                  src={featured.src}
                  alt={featured.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary flex items-center gap-2">
                    <ZoomIn className="w-4 h-4" /> {featured.alt}
                  </span>
                </div>
              </div>
            </Reveal>
          )}

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {grid.map((img, i) => (
              <Reveal key={i}>
                <div
                  className="relative overflow-hidden rounded-2xl shadow-sm cursor-zoom-in group border border-[#E5E5E5]/50"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{img.alt}</span>
                      <ZoomIn className="w-5 h-5 text-white/80" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              style={{ maxHeight: "85vh" }}
            />
            <div className="text-center mt-4">
              <span className="text-white/80 text-sm">{lightbox.alt}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
