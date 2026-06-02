import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const navItems = [
  { to: "/", label: "முகப்பு" },
  { to: "/about-temple", label: "கோவில்" },
  { to: "/korakkar-siddhar", label: "கோரக்கர் சித்தர்" },
  { to: "/history", label: "வரலாறு" },
  { to: "/poojas", label: "பூஜைகள்" },
  { to: "/festivals", label: "திருவிழாக்கள்" },
  { to: "/gallery", label: "புகைப்படங்கள்" },
  { to: "/videos", label: "காணொளிகள்" },
  { to: "/contact", label: "தொடர்புக்கு" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-luxury ${scrolled ? "glass py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="w-7 h-7 text-gold" />
            <div className="absolute inset-0 blur-md bg-gold/40 group-hover:bg-gold/70 transition-luxury" />
          </div>
          <div className="leading-tight">
            <div className="font-serif-tamil text-sm sm:text-base font-semibold text-gradient-gold">கோரக்கர் சித்தர்</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">ஜீவசமாதி பீடம்</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-gold" }}
              className="px-3 py-2 text-sm transition-luxury relative"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium gold-glow transition-luxury"
        >
          தரிசனம்
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-2xl p-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="px-4 py-3 text-sm border-b border-border/30 last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
