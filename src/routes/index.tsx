import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Heart, Star } from "lucide-react";
import heroTemple from "../assets/hero.png";
import lamps from "../assets/vinayaga.png";
import samadhi from "../assets/siddhar-img.png";
import festival from "../assets/Karuvari.png";
import pooja from "../assets/koraga jenthi.png";
import annadhanam from "../assets/Annathanam.png";
import mahashiva from "../assets/bless.png";
import { Reveal, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம் — முகப்பு" },
      { name: "description", content: "வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம். ஆன்மீக அனுபவம், பூஜைகள், திருவிழாக்கள், கோரக்கர் சித்தர் வரலாறு." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Flame, title: "தினசரி பூஜை", desc: "பதினெண் சித்தர்களில் ஒருவரான கோரக்கர் சித்தருக்கு தினமும் நடைபெறும் சிறப்பு பூஜை, பக்தர்களின் மனக்குறைகளை நீக்கி, ஆரோக்கியம், வளம், மனஅமைதி மற்றும் இறையருளைப் பெற வழிவகுக்கிறது." },
  { icon: Heart, title: "அன்னதானம்", desc: "அன்னதானம் காலை, மதியம், இரவு என மூன்று வேளைகளிலும் நடைபெறுகிறது. மேலும், வியாழக்கிழமைகளிலும் பௌர்ணமி நாட்களிலும் ஆயிரக்கணக்கான பக்தர்களுக்கு அன்னதானம் வழங்கப்படுகிறது" },
  // { icon: Sparkles, title: "குரு பூஜை", desc: "ஆண்டு தோறும் கோரக்கர் சித்தரின் குரு பூஜை விழா சிறப்பாக நடைபெறுகிறது." },
  { icon: Star, title: "சித்தர் தரிசனம்", desc: "பதினெண் சித்தர்களில் தலைசிறந்த கோரக்கர் சித்தரின் அருள் தரிசனம், ஞானம், மனஅமைதி, ஆரோக்கியம், வளம், செழிப்பு, ஆன்மீக முன்னேற்றம், இறையருள் மற்றும் வாழ்வில் வெற்றியை வழங்கும் புனித அனுபவமாகும்." },
  { icon: Star, title: "அன்னக்காவடி தர்மம்", desc: "தினமும் சேகரிக்கப்படும் அன்னம் கோரக்கர் சித்தருக்கு நிவேதனம் செய்யப்பட்டு, பின்னர் பக்தர்களுக்கும் சிவனடியார்களுக்கும் வழங்கப்படுகிறது. பல நூற்றாண்டுகளாக இப்புனித மரபு தொடர்கிறது." }
];

const galleryPreview = [samadhi, lamps, festival, pooja, annadhanam, heroTemple];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen min-h-screen max-w-[100vw] flex flex-col items-center justify-center overflow-hidden">
        <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781078590/hero_tk4jtw.png" alt="கோவில் கோபுரம்" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />

        <div className="relative z-10 mx-auto max-w-[900px] px-4 w-full flex flex-col items-center justify-center text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-xs tracking-widest uppercase text-[#D4AF37] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            வடக்கு பொய்கைநல்லூர் · நாகப்பட்டினம்
          </motion.div>

          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif-tamil font-bold leading-tight text-white drop-shadow-xl flex flex-col items-center justify-center w-full">
            அருள்மிகு கோரக்கர் சித்தர்
            <span className="italic font-light text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 block">ஜீவசமாதி பீடம்</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] leading-relaxed drop-shadow-md">
            பதினெண் சித்தர்களுள் ஒருவராம் கோரக்கர் சித்தரின் புனித ஜீவசமாதி தலம். அருள், அமைதி, ஆன்மீகத்தின் இல்லம்.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.45 }} className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
            <Link to="/about-temple" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D9381E] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              கோவில் பற்றி அறிய
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-medium hover:bg-[#D4AF37]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 w-full sm:w-auto">
              தொடர்புக்கு
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="w-full mt-12 hidden lg:block">
            <div className="grid lg:grid-cols-3 gap-6 place-items-center">
              {[
                { n: "200+", l: "ஆண்டுகள் வரலாறு" },
                { n: "1K+", l: "மாத பக்தர்கள்" },
                { n: "6", l: "முக்கிய திருவிழா" },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:shadow-lg transition-all shadow-card w-full max-w-[280px]">
                  <div className="text-4xl md:text-5xl font-serif-tamil font-bold text-[#D9381E] mb-2">{s.n}</div>
                  <div className="text-sm md:text-base font-bold text-[#2C2C2C]">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOBILE STATS SECTION */}
      <section className="py-12 block lg:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {[
              { n: "200+", l: "ஆண்டுகள் வரலாறு" },
              { n: "1K+", l: "மாத பக்தர்கள்" },
              { n: "6", l: "முக்கிய திருவிழா" },
            ].map((s) => (
              <div key={s.l} className="bg-white border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl p-6 text-center w-full max-w-[320px]">
                <div className="text-4xl sm:text-5xl font-serif-tamil font-bold text-[#D9381E] mb-2">{s.n}</div>
                <div className="text-sm sm:text-base font-bold text-[#2C2C2C]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
              <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781077474/siddhar_image_ymczdf.jpg" alt="கோரக்கர் சித்தர்" width={1280} height={1600} loading="lazy" className="relative rounded-3xl shadow-luxury w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">கோவில் பற்றி</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
              அருள் பிறக்கும் <br /> புனித பீடம்
            </h2>
            <p className="mt-6 text-muted-foreground leading-loose">
              வடக்கு பொய்கைநல்லூரில் அமைந்துள்ள இக்கோவில், மகா சித்தர் கோரக்கரின் ஜீவசமாதி பெற்றுள்ள புனித தலமாகும். பதினெண் சித்தர்களில் ஒருவராகப் போற்றப்படுகிறார். யோகம், ஞானம் மற்றும் காயகல்பத்தில் சிறந்து விளங்கிய மகா சித்தர்.
              <p className="mt-4 text-muted-foreground leading-loose">
                அவரது ஜீவசமாதி இன்று பக்தர்களுக்கு அருளும் ஆன்மீக ஒளியும் வழங்கும் புனிதத் தலமாக திகழ்கிறது.
              </p>
            </p>
            <Link to="/about-temple" className="mt-8 inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 hover:gap-3 transition-all">
              மேலும் அறிய <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 bg-[oklch(0.09_0.005_60)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="சேவைகள்" title="பீடத்தின் தினசரி சேவைகள்" description="தினசரி பூஜை முதல் அன்னதானம் வரை — பக்தர்களுக்கான முழுமையான ஆன்மீக சேவைகள்." align="center" />
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="hover-lift bg-white border border-[#E5E5E5] shadow-card rounded-2xl p-7 h-full group">
                  <h3 className="text-lg font-bold text-[#D9381E]">{s.title}</h3>
                  <p className="mt-3 text-sm font-medium text-[#2C2C2C] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FESTIVAL HIGHLIGHTS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <Reveal><SectionHeading eyebrow="திருவிழாக்கள்" title="புனித கொண்டாட்டங்கள்" /></Reveal>
            <Link to="/festivals" className="text-sm text-gold border-b border-gold/40 pb-1 hover:gap-3 transition-all inline-flex items-center gap-2">
              அனைத்தும் காண <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: mahashiva, title: "மகா சிவராத்திரி", date: "மாசி மாதம்" },
              { img: festival, title: "ஐப்பசி பௌர்ணமி, பரணி விழா", date: "ஐப்பசி மாதம்" },
              { img: lamps, title: "கார்த்திகை தீபம்", date: "கார்த்திகை மாதம்" },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-3xl bg-[#FFF8E7] border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={f.img} alt={f.title} width={1280} height={960} loading="lazy" className="w-full h-full object-cover brightness-100 contrast-105 group-hover:scale-105 transition-luxury duration-700" />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-center text-center bg-[#FFF8E7]">
                    <div className="text-xs uppercase font-bold tracking-widest text-[#2C2C2C] mb-2">{f.date}</div>
                    <div className="text-2xl font-serif-tamil font-bold text-[#D9381E]">{f.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal><SectionHeading eyebrow="புகைப்படத் தொகுப்பு" title="கோவில் காட்சிகள்" align="center" /></Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780928667/WhatsApp_Image_2026-06-03_at_2.43.43_PM_vjrewz.jpg" },
              { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780932868/IMG_6335_gguoyf.jpg" },
              { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929094/IMG_6245_erhrdy.jpg" },
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group flex flex-col bg-[#FFF8E7] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] transition-luxury">
                  <div className="overflow-hidden aspect-[4/3] w-full">
                    <img src={src.img} alt="கோவில் காட்சி" loading="lazy" className="w-full h-full object-cover brightness-100 contrast-105 group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D9381E] text-white font-medium hover:bg-[#b02d18] transition-colors duration-300">
              அனைத்தும் காண
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal><SectionHeading eyebrow="பக்தர்களின் அனுபவம்" title="அருள் வாக்குகள்" align="center" /></Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "கோரக்கர் சித்தரின் தரிசனம் என் வாழ்வை மாற்றியது. அமைதியும் தெளிவும் கிடைத்தது.", n: "முருகன், சென்னை" },
              { t: "இக்கோவிலின் ஆற்றல் வார்த்தைகளுக்கு அப்பாற்பட்டது. அன்னதானம் அற்புதம்.", n: "லட்சுமி, மதுரை" },
              { t: "பௌர்ணமி பூஜையில் கலந்துகொண்ட அனுபவம் என்றும் நினைவில் நிற்கும்.", n: "ராமன், கோயம்புத்தூர்" },
            ].map((q, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#E5E5E5] shadow-card rounded-2xl p-7 h-full">
                  <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-[#E6B31E] fill-[#E6B31E]" />)}</div>
                  <p className="text-[#2C2C2C] font-medium leading-relaxed italic">"{q.t}"</p>
                  <div className="mt-5 text-sm font-bold text-[#D9381E]">— {q.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-primary text-white mb-[-75px]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <Reveal>
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold mb-6 text-white">
                உங்கள் வருகையை திட்டமிடுங்கள்
              </h2>

              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                கோரக்கர் சித்தரின் அருளைப் பெற உங்களை அன்புடன் வரவேற்கிறோம்.
              </p>

              <Link to="/contact">
                <button className="bg-accent text-[#1A1A1A] hover:bg-accent/90 rounded-xl px-10 py-4 text-lg font-bold gold-glow inline-flex items-center gap-2">
                  தொடர்பு கொள்ள
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
