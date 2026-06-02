import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Heart, Sparkles, Star } from "lucide-react";
import heroTemple from "../assets/hero-temple.jpg";
import siddhar from "../assets/siddhar.jpg";
import lamps from "../assets/lamps.jpg";
import samadhi from "../assets/samadhi.jpg";
import festival from "../assets/festival.jpg";
import pooja from "../assets/pooja.jpg";
import annadhanam from "../assets/annadhanam.jpg";
import { Reveal, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம் — முகப்பு" },
      { name: "description", content: "வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம். ஆன்மீக அனுபவம், பூஜைகள், திருவிழாக்கள், கோரக்கர் சித்தர் வரலாறு." },
      { property: "og:image", content: heroTemple },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Flame, title: "தினசரி பூஜை", desc: "காலை மற்றும் மாலை அபிஷேக ஆராதனைகள் சித்தர் சமாதிக்கு வழங்கப்படுகின்றன." },
  { icon: Heart, title: "அன்னதானம்", desc: "ஒவ்வொரு பௌர்ணமி நாளிலும் ஆயிரக்கணக்கான பக்தர்களுக்கு அன்னம் வழங்கப்படுகிறது." },
  { icon: Sparkles, title: "குரு பூஜை", desc: "ஆண்டு தோறும் கோரக்கர் சித்தரின் குரு பூஜை விழா சிறப்பாக நடைபெறுகிறது." },
  { icon: Star, title: "சித்தர் தரிசனம்", desc: "ஜீவசமாதி தரிசனத்தால் பக்தர்களுக்கு ஆன்மீக ஆற்றலும் அமைதியும் கிட்டும்." },
];

const galleryPreview = [samadhi, lamps, festival, pooja, annadhanam, heroTemple];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        <div className="absolute inset-0">
          <img src={heroTemple} alt="கோவில் கோபுரம்" width={1920} height={1280} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-widest uppercase text-gold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            வடக்கு பொய்கைநல்லூர் · நாகப்பட்டினம்
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] max-w-4xl">
            <span className="text-gradient-gold">அருள்மிகு</span>
            <br />
            கோரக்கர் சித்தர்
            <br />
            <span className="italic font-light text-foreground/80">ஜீவசமாதி பீடம்</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            பதினெண் சித்தர்களுள் ஒருவராம் கோரக்கர் சித்தரின் புனித ஜீவசமாதி தலம். அருள், அமைதி, ஆன்மீகத்தின் இல்லம்.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }} className="mt-10 flex flex-wrap gap-4">
            <Link to="/about-temple" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium gold-glow transition-luxury">
              கோவில் பற்றி அறிய
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-foreground font-medium hover:border-gold transition-luxury">
              தரிசனத்துக்கு வருக
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-20 grid grid-cols-3 gap-6 max-w-2xl border-t border-gold/20 pt-8">
            {[
              { n: "300+", l: "ஆண்டுகள் வரலாறு" },
              { n: "10K+", l: "மாத பக்தர்கள்" },
              { n: "12", l: "முக்கிய திருவிழா" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-serif-tamil font-semibold text-gradient-gold">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
              <img src={siddhar} alt="கோரக்கர் சித்தர்" width={1280} height={1600} loading="lazy" className="relative rounded-3xl shadow-luxury w-full" />
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[200px]">
                <div className="text-gold text-3xl font-serif-tamil">ௐ</div>
                <div className="text-xs text-muted-foreground mt-1">பதினெண் சித்தர்களில் முதன்மையானவர்</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">கோவில் பற்றி</div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gradient-gold leading-tight">
              அருள் பிறக்கும் <br /> புனித பீடம்
            </h2>
            <p className="mt-6 text-muted-foreground leading-loose">
              வடக்கு பொய்கைநல்லூரில் அமைந்துள்ள இக்கோவில், மகா சித்தர் கோரக்கரின் ஜீவசமாதி பெற்றுள்ள புனித தலமாகும். நூற்றாண்டுகளாகப் பக்தர்கள் தங்கள் வேண்டுதல்களோடு வந்து அருள்பெற்றுச் செல்கின்றனர்.
            </p>
            <p className="mt-4 text-muted-foreground leading-loose">
              பாரம்பரிய சோழ சிற்பக்கலையின் சிறந்த எடுத்துக்காட்டாக விளங்கும் இக்கோவில், ஆன்மீக சாதனைக்கான மையமாகவும் திகழ்கிறது.
            </p>
            <Link to="/about-temple" className="mt-8 inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 hover:gap-3 transition-all">
              மேலும் வாசிக்க <ArrowRight className="w-4 h-4" />
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
                <div className="hover-lift glass rounded-2xl p-7 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-luxury">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
              { img: festival, title: "ஆண்டு குரு பூஜை", date: "தை மாதம்" },
              { img: lamps, title: "மகா சிவராத்திரி", date: "மாசி மாதம்" },
              { img: pooja, title: "கார்த்திகை தீபம்", date: "கார்த்திகை மாதம்" },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-card hover-lift">
                  <img src={f.img} alt={f.title} width={1280} height={960} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="text-xs uppercase tracking-widest text-gold mb-2">{f.date}</div>
                    <div className="text-2xl font-serif-tamil font-semibold">{f.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="relative py-24 bg-[oklch(0.09_0.005_60)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal><SectionHeading eyebrow="புகைப்படத் தொகுப்பு" title="கோவில் காட்சிகள்" align="center" /></Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`relative overflow-hidden rounded-2xl group ${i === 0 || i === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                  <img src={src} alt="கோவில் காட்சி" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000" />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-luxury" />
                </div>
              </Reveal>
            ))}
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
                <div className="glass rounded-2xl p-7 h-full">
                  <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-gold fill-gold" />)}</div>
                  <p className="text-foreground/90 leading-relaxed italic">"{q.t}"</p>
                  <div className="mt-5 text-sm text-gold">— {q.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-gold opacity-10" />
              <div className="relative">
                <Flame className="w-12 h-12 text-gold mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-semibold text-gradient-gold">அருளுக்காக வருக</h2>
                <p className="mt-5 text-muted-foreground max-w-xl mx-auto">கோரக்கர் சித்தரின் ஜீவசமாதியைத் தரிசித்து உங்கள் ஆன்மீகப் பயணத்தைத் தொடங்குங்கள்.</p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium gold-glow transition-luxury">
                  தரிசன நேரம் பார்க்க <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
