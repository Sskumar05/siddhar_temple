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
              <article className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-card hover-lift">
                <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 rounded-full glass text-xs tracking-widest uppercase text-gold">{f.month}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-serif-tamil font-semibold text-gradient-gold">{f.title}</h3>
                  <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
