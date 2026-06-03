import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";
import festival from "../assets/festival.jpg";
import lamps from "../assets/lamps.jpg";
import pooja from "../assets/pooja.jpg";
import samadhi from "../assets/samadhi.jpg";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "திருவிழாக்கள் — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "ஆண்டு குரு பூஜை, மகா சிவராத்திரி, பௌர்ணமி திருவிழா, கார்த்திகை தீபம் — கோவிலின் முக்கிய திருவிழாக்கள்." },
      { property: "og:image", content: festival },
    ],
  }),
  component: Festivals,
});

const festivals = [
  { img: festival, title: "ஆண்டு குரு பூஜை", month: "தை மாதம்", desc: "கோரக்கர் சித்தரின் ஜீவசமாதி நாள். பாரம்பரிய பூஜை, ஊர்வலம், ஆயிரக்கணக்கான பக்தர்களுக்கு அன்னதானம்." },
  { img: lamps, title: "மகா சிவராத்திரி", month: "மாசி மாதம்", desc: "இரவு முழுவதும் சிவ வழிபாடு, பஜனை, தியானம், அபிஷேகம் என அற்புதமான ஆன்மீக சூழல்." },
  { img: samadhi, title: "பௌர்ணமி திருவிழா", month: "மாதந்தோறும்", desc: "முழு நிலா இரவில் சித்தர் சந்நிதி தீப ஒளியில் ஒளிர்கிறது. சந்திர ஓமம், சிறப்பு அர்ச்சனை." },
  { img: pooja, title: "கார்த்திகை தீபம்", month: "கார்த்திகை மாதம்", desc: "கோவில் முழுவதும் ஆயிரம் தீபங்கள் ஒளிர்கின்றன. ஒளியின் திருவிழா — ஞான ஒளியின் வடிவம்." },
];

function Festivals() {
  return (
    <>
      <PageHero eyebrow="புனித கொண்டாட்டங்கள்" title="ஆண்டு திருவிழாக்கள்" subtitle="ஒவ்வொரு திருவிழாவும் ஓர் ஆன்மீக அனுபவம். ஒளி, மலர், மந்திரம், அன்பு." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          {festivals.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-3xl bg-[#FFF8E7] border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover brightness-100 contrast-105 saturate-[1.05] group-hover:scale-105 transition-luxury duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 shadow-sm border border-[#D4AF37]/30 text-xs font-bold tracking-widest uppercase text-[#D9381E]">{f.month}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-start">
                  <h3 className="text-3xl md:text-4xl font-serif-tamil font-bold text-[#D9381E] mb-3">{f.title}</h3>
                  <p className="text-[#2C2C2C] leading-relaxed font-medium">{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
