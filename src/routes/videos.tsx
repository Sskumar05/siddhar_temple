import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, X } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";
import festival from "../assets/festival.jpg";
import lamps from "../assets/lamps.jpg";
import samadhi from "../assets/samadhi.jpg";
import pooja from "../assets/pooja.jpg";
import hero from "../assets/hero-temple.jpg";
import siddhar from "../assets/siddhar.jpg";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "காணொளிகள் — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "கோவில் காணொளிகள், திருவிழா காட்சிகள், ஆன்மீக சொற்பொழிவுகள்." },
    ],
  }),
  component: Videos,
});

const videos = [
  { img: hero, title: "கோவில் சுற்றுப்பயணம்", cat: "கோவில்", duration: "5:32" },
  { img: festival, title: "ஆண்டு குரு பூஜை 2025", cat: "திருவிழா", duration: "12:18" },
  { img: lamps, title: "கார்த்திகை தீப ஒளி", cat: "திருவிழா", duration: "8:45" },
  { img: siddhar, title: "கோரக்கர் சித்தர் வரலாறு", cat: "சொற்பொழிவு", duration: "22:10" },
  { img: pooja, title: "தினசரி அபிஷேகம்", cat: "பூஜை", duration: "6:24" },
  { img: samadhi, title: "ஜீவசமாதி மகிமை", cat: "சொற்பொழிவு", duration: "18:50" },
];

function Videos() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="காணொளிகள்" title="ஆன்மீக காட்சிகள்" subtitle="கோவில் வாழ்க்கையின் காட்சிகள், திருவிழா நினைவுகள், ஞான சொற்பொழிவுகள்." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <button onClick={() => setOpen(v.title)} className="group block w-full text-left">
                <div className="relative overflow-hidden rounded-3xl aspect-video shadow-card hover-lift">
                  <img src={v.img} alt={v.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-luxury duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-luxury">
                      <Play className="w-7 h-7 text-primary-foreground ml-1 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md glass text-xs text-gold">{v.duration}</div>
                </div>
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-widest text-gold">{v.cat}</div>
                  <h3 className="mt-1 text-lg font-serif-tamil font-semibold group-hover:text-gold transition-luxury">{v.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in">
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl glass flex items-center justify-center text-center p-8">
            <div>
              <Play className="w-16 h-16 text-gold mx-auto mb-4" />
              <div className="text-xl font-serif-tamil text-gradient-gold">{open}</div>
              <p className="mt-3 text-sm text-muted-foreground">காணொளி விரைவில் இணைக்கப்படும்.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
