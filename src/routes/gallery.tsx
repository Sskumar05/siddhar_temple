import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";
import hero from "../assets/hero-temple.jpg";
import siddhar from "../assets/siddhar.jpg";
import lamps from "../assets/lamps.jpg";
import samadhi from "../assets/samadhi.jpg";
import festival from "../assets/festival.jpg";
import pooja from "../assets/pooja.jpg";
import annadhanam from "../assets/annadhanam.jpg";
import architecture from "../assets/architecture.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "புகைப்படத் தொகுப்பு — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "கோவில் காட்சிகள், திருவிழாக்கள், அன்னதானம், பூஜை நிகழ்வுகள் புகைப்படத் தொகுப்பு." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: hero, cat: "கோவில்" },
  { src: siddhar, cat: "சித்தர்" },
  { src: lamps, cat: "தீபம்" },
  { src: samadhi, cat: "சமாதி" },
  { src: festival, cat: "திருவிழா" },
  { src: pooja, cat: "பூஜை" },
  { src: annadhanam, cat: "அன்னதானம்" },
  { src: architecture, cat: "கட்டிடக்கலை" },
  { src: hero, cat: "கோபுரம்" },
  { src: lamps, cat: "தீபாராதனை" },
  { src: samadhi, cat: "சந்நிதி" },
  { src: festival, cat: "நிகழ்வு" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="புகைப்படத் தொகுப்பு" title="கோவில் காட்சிகள்" subtitle="ஒவ்வொரு படமும் ஓர் ஆன்மீக கதை சொல்கிறது." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <button onClick={() => setOpen(img.src)} className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid mb-4">
                  <img src={img.src} alt={img.cat} loading="lazy" className="w-full h-auto object-cover group-hover:scale-110 transition-luxury duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury flex items-end p-5">
                    <span className="text-xs uppercase tracking-widest text-gold">{img.cat}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in">
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:scale-110 transition">
            <X className="w-6 h-6" />
          </button>
          <img src={open} alt="" className="max-w-full max-h-[90vh] rounded-2xl shadow-luxury" />
        </div>
      )}
    </>
  );
}
