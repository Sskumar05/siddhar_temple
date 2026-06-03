import { Link } from "@tanstack/react-router";
import { Flame, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40 bg-[oklch(0.08_0.005_60)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-gold" />
            <div className="text-primary font-serif-tamil text-lg font-semibold">
              கோரக்கர் சித்தர் ஜீவசமாதி பீடம்
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம். அருள்மிகு கோரக்கர் சித்தரின் ஜீவசமாதி தலம் — ஆன்மீகம், அருள், அமைதியின் இல்லம்.
          </p>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">பக்கங்கள்</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about-temple" className="hover:text-gold transition-luxury">கோவில்</Link></li>
            <li><Link to="/poojas" className="hover:text-gold transition-luxury">பூஜைகள்</Link></li>
            <li><Link to="/festivals" className="hover:text-gold transition-luxury">திருவிழாக்கள்</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-luxury">புகைப்படங்கள்</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">தொடர்பு</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம்</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" /> info@korakkarpeedam.org</li>
            <li className="flex gap-2"><Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" /> காலை 6:00 – இரவு 9:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
      </div>
    </footer>
  );
}
