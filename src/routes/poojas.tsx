import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";
import { Sunrise, Moon, Calendar, Utensils, Flame } from "lucide-react";

export const Route = createFileRoute("/poojas")({
  head: () => ({
    meta: [
      { title: "பூஜைகள் — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "தினசரி பூஜை, மாத பூஜை, பௌர்ணமி வழிபாடு, அன்னதானம், குரு பூஜை அட்டவணை." },
    ],
  }),
  component: Poojas,
});

const poojas = [
  { icon: Sunrise, title: "தினசரி காலை பூஜை", time: "காலை 6:00 – 8:30", desc: "காலை அபிஷேகம், சூரிய நமஸ்காரம், சித்தர் சந்நிதி தீபாராதனை." },
  { icon: Moon, title: "தினசரி மாலை பூஜை", time: "மாலை 6:00 – 8:00", desc: "சந்த்ய தீப ஆராதனை, ஒலிக்கும் மணி ஒலியில் சித்தர் வணக்கம்." },
  { icon: Calendar, title: "மாத குரு பூஜை", time: "ஒவ்வொரு மாதமும்", desc: "மாதந்தோறும் சித்தர் குரு பூஜை சிறப்பாக நடைபெறுகிறது." },
  { icon: Flame, title: "பௌர்ணமி பூஜை", time: "பௌர்ணமி தினம்", desc: "முழு நிலவில் சிறப்பு அபிஷேகம், சந்திர ஓம காரம், தீப ஒளி வழிபாடு." },
  { icon: Utensils, title: "அன்னதானம்", time: "பௌர்ணமி & திருவிழா", desc: "ஆயிரக்கணக்கான பக்தர்களுக்கு பாரம்பரிய தமிழ் சாப்பாடு வழங்கப்படுகிறது." },
  { icon: Flame, title: "ஆண்டு குரு பூஜை", time: "தை மாதம்", desc: "சித்தர் ஜீவசமாதி நாள் சிறப்பான விழாவாகக் கொண்டாடப்படுகிறது." },
];

function Poojas() {
  return (
    <>
      <PageHero eyebrow="பூஜை அட்டவணை" title="தினசரி வழிபாடு" subtitle="பாரம்பரிய முறையில் ஒவ்வொரு பூஜையும் — காலை முதல் இரவு வரை." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poojas.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="hover-lift glass rounded-3xl p-8 h-full group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:rotate-6 transition-luxury">
                      <p.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="text-xs text-gold uppercase tracking-widest">0{i + 1}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{p.title}</h3>
                  <div className="mt-2 text-sm text-gold/80">{p.time}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Schedule timeline */}
          <Reveal>
            <div className="mt-20 glass rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8">தினசரி அட்டவணை</h3>
              <div className="space-y-4">
                {[
                  ["06:00", "சுப்ரபாதம் & திருமஞ்சனம்"],
                  ["07:30", "காலை தீபாராதனை"],
                  ["10:00", "சித்தர் சந்நிதி அர்ச்சனை"],
                  ["12:30", "உச்சிக்கால பூஜை"],
                  ["18:00", "சந்த்ய ஆராதனை"],
                  ["19:30", "தீப ஒளி வழிபாடு"],
                  ["20:30", "அர்த்த ஜாமம் — கோவில் கதவு மூடல்"],
                ].map(([time, name], i) => (
                  <div key={time} className="flex items-center gap-6 py-3 border-b border-border/30 last:border-0">
                    <div className="text-gold font-serif-tamil text-lg w-20">{time}</div>
                    <div className="flex-1">{name}</div>
                    <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
