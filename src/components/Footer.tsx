import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40 bg-[oklch(0.08_0.005_60)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="கோரக்கர் சித்தர்" className="w-15 h-15 object-contain" />
            <div className="text-primary font-serif-tamil text-lg font-semibold">
              கோரக்கர் சித்தர்
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம். அருள்மிகு கோரக்கர் சித்தரின் ஜீவசமாதி தலம் — ஆன்மீகம், அருள், அமைதியின் இல்லம்.
          </p>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">பக்கங்கள்</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold transition-luxury">முகப்பு</Link></li>
            <li><Link to="/about-temple" className="hover:text-gold transition-luxury">பீடம்</Link></li>
            <li><Link to="/poojas" className="hover:text-gold transition-luxury">ஆன்மிக சேவைகள்</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-luxury">நிகழ்வுகள்</Link></li>
            <li><Link to="/school" className="hover:text-gold transition-luxury">பள்ளி</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-luxury">தொடர்பு</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">தொடர்பு</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> வடக்கு பொய்கைநல்லூர், நாகப்பட்டினம்</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" /> +91 75020 41000</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" /> arulmigukorakkarsithar@gmail.com</li>
            <li className="flex gap-2"><Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" /> காலை 6:00 – இரவு 9:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        <p className="text-xs text-muted-foreground mt-3">Developed by <span className="text-gold">INFYNUX SOLUTIONS</span></p>
      </div>
    </footer>
  );
}
