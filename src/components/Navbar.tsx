import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/", label: "முகப்பு" },
  { to: "/about-temple", label: "கோவில்" },
  { to: "/korakkar-siddhar", label: "வரலாறு" },
  // { to: "/history", label: "வரலாறு" },
  { to: "/poojas", label: "பூஜைகள்" },
  { to: "/annadhanam", label: "அன்னதானம்" },
  { to: "/festivals", label: "திருவிழாக்கள்" },
  // { to: "/organizers", label: "அறங்காவலர்கள்" },
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
    <header className={`sticky top-0 inset-x-0 z-50 bg-[#FFFFFF] border-b border-[#E5E5E5] shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
      <div className="mx-auto max-w-10xl px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img src={logo} alt="கோரக்கர் சித்தர் லோகோ" className="w-15 h-15 sm:w-18 sm:h-18 object-contain" />
          <div className="leading-tight">
            <div className="font-serif-tamil text-sm sm:text-base font-semibold text-[#D9381E]">கோரக்கர் சித்தர்</div>
            {/* <div className="text-[10px] sm:text-xs text-[#666666] tracking-wider uppercase"> ஜீவசமாதி பீடம்</div> */}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-[#D9381E]" }}
              inactiveProps={{ className: "text-[#2C2C2C] hover:text-[#D9381E]" }}
              className="px-3 py-2 text-sm transition-colors duration-300 relative"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-[#D9381E] text-white hover:bg-[#b02d18] text-sm font-medium transition-colors duration-300"
        >
          தரிசனம்
        </Link> */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[#2C2C2C]"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white mt-3 mx-4 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#E5E5E5] animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-[#D9381E]" }}
                inactiveProps={{ className: "text-[#2C2C2C]" }}
                className="px-4 py-3 text-sm border-b border-[#E5E5E5] last:border-0 transition-colors duration-300 hover:text-[#D9381E]"
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
