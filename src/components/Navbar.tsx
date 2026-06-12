import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

/* ─────────────────────────────────────────────────────────────
   Nav structure
───────────────────────────────────────────────────────────── */
type NavItem =
  | { label: string; to: string; children?: never }
  | { label: string; to?: never; children: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: "முகப்பு", to: "/" },
  {
    label: "பீடம்",
    children: [
      { label: "சித்தர் அறிமுகம்", to: "/about-temple" },
      { label: "வரலாறு", to: "/korakkar-siddhar" },
      { label: "பள்ளி", to: "/school" },
    ],
  },
  {
    label: "வழிபாடுகள்",
    children: [
      { label: "பூஜைகள்", to: "/poojas" },
      { label: "அன்னதானம்", to: "/annadhanam" },
    ],
  },
  { label: "திருவிழாக்கள்", to: "/festivals" },
  {
    label: "நிகழ்வுகள்",
    children: [
      { label: "புகைப்படங்கள்", to: "/gallery" },
      { label: "வீடியோக்கள்", to: "/videos" },
    ],
  },
  { label: "தொடர்பு", to: "/contact" },
];

/* ─────────────────────────────────────────────────────────────
   Desktop Dropdown Item
───────────────────────────────────────────────────────────── */
function DesktopDropdown({
  item,
  pathname,
}: {
  item: Extract<NavItem, { children: { label: string; to: string }[] }>;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = item.children.some((c) => pathname === c.to);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className={`
          flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md
          transition-all duration-200 cursor-pointer select-none
          ${isActive
            ? "text-[#D9381E]"
            : "text-[#2C2C2C] hover:text-[#D9381E]"
          }
        `}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        {/* Active underline */}
        {isActive && (
          <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-[#D9381E] to-[#D4AF37]" />
        )}
      </button>

      {/* Dropdown panel */}
      <div
        className={`
          absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[180px]
          bg-white border border-[#D4AF37]/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.10)]
          overflow-hidden z-50
          transition-all duration-200 origin-top
          ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}
        `}
        style={{ transformOrigin: "top center" }}
      >
        {/* Gold accent top bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-[#B38600] via-[#D4AF37] to-[#FFCC33]" />

        <ul className="py-1.5" role="menu">
          {item.children.map((child) => {
            const childActive = pathname === child.to;
            return (
              <li key={child.to} role="menuitem">
                <Link
                  to={child.to}
                  className={`
                    flex items-center gap-2.5 px-4 py-2.5 text-sm
                    transition-all duration-150 group
                    ${childActive
                      ? "bg-[#FFF8E7] text-[#D9381E] font-semibold"
                      : "text-[#2C2C2C] hover:bg-[#FFF8E7] hover:text-[#D9381E]"
                    }
                  `}
                >
                  {/* Left accent dot */}
                  <span
                    className={`
                      w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-150
                      ${childActive ? "bg-[#D9381E]" : "bg-[#D4AF37]/40 group-hover:bg-[#D9381E]"}
                    `}
                  />
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Desktop Link Item
───────────────────────────────────────────────────────────── */
function DesktopLink({
  item,
  pathname,
}: {
  item: Extract<NavItem, { to: string }>;
  pathname: string;
}) {
  const isActive =
    item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);

  return (
    <Link
      to={item.to}
      activeOptions={{ exact: item.to === "/" }}
      className={`
        relative px-3 py-2 text-sm font-medium rounded-md
        transition-all duration-200
        ${isActive
          ? "text-[#D9381E]"
          : "text-[#2C2C2C] hover:text-[#D9381E]"
        }
      `}
    >
      {item.label}
      {/* Animated underline */}
      <span
        className={`
          absolute bottom-0 left-3 right-3 h-[2px] rounded-full
          bg-gradient-to-r from-[#D9381E] to-[#D4AF37]
          transition-all duration-300
          ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
        `}
      />
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   Mobile accordion item
───────────────────────────────────────────────────────────── */
function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    const isActive =
      item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
    return (
      <Link
        to={item.to}
        onClick={onClose}
        className={`
          flex items-center px-4 py-3 text-sm font-medium rounded-lg
          transition-all duration-200
          ${isActive
            ? "bg-[#FFF8E7] text-[#D9381E] border-l-2 border-[#D9381E]"
            : "text-[#2C2C2C] hover:bg-[#FFF8E7] hover:text-[#D9381E]"
          }
        `}
      >
        {item.label}
      </Link>
    );
  }

  const isGroupActive = item.children.some((c) => pathname === c.to);

  return (
    <div>
      <button
        onClick={() => setOpen((p) => !p)}
        className={`
          w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg
          transition-all duration-200
          ${isGroupActive
            ? "bg-[#FFF8E7] text-[#D9381E]"
            : "text-[#2C2C2C] hover:bg-[#FFF8E7] hover:text-[#D9381E]"
          }
        `}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Accordion children */}
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-[#D4AF37]/40 pl-3">
          {item.children.map((child) => {
            const childActive = pathname === child.to;
            return (
              <Link
                key={child.to}
                to={child.to}
                onClick={onClose}
                className={`
                  flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg
                  transition-all duration-150
                  ${childActive
                    ? "text-[#D9381E] font-semibold bg-[#FFF8E7]"
                    : "text-[#555] hover:text-[#D9381E] hover:bg-[#FFF8E7]"
                  }
                `}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${childActive ? "bg-[#D9381E]" : "bg-[#D4AF37]/50"}`} />
                {child.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Navbar
───────────────────────────────────────────────────────────── */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Sticky + shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
        sticky top-0 inset-x-0 z-50 w-full
        transition-all duration-300
        ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-[#D4AF37]/20"
          : "bg-white border-b border-[#E5E5E5]/60"
        }
      `}
    >
      {/* Gold top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#B38600] via-[#D4AF37] to-[#FFCC33]" />

      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2.5" : "py-3"}`}
      >
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="relative">
            <img
              src={logo}
              alt="கோரக்கர் சித்தர் லோகோ"
              className={`object-contain transition-all duration-300 ${scrolled ? "w-12 h-12" : "w-14 h-14"}`}
            />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-sm sm:text-base font-bold text-[#D9381E] tracking-wide">
              கோரக்கர் சித்தர்
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#B38600] font-medium tracking-widest uppercase">
              ஜீவசமாதி பீடம்
            </div>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {NAV.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <DesktopLink key={item.to} item={item} pathname={pathname} />
            )
          )}
        </nav>

        {/* ── Donate / CTA button (desktop) ── */}
        {/* <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold
            bg-gradient-to-r from-[#D9381E] to-[#b02d18] text-white
            shadow-[0_4px_12px_rgba(217,56,30,0.35)]
            hover:shadow-[0_6px_20px_rgba(217,56,30,0.45)] hover:-translate-y-0.5
            transition-all duration-200 flex-shrink-0"
        >
          🙏 தரிசனம்
        </Link> */}

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="lg:hidden p-2 rounded-lg text-[#2C2C2C] hover:bg-[#FFF8E7] transition-colors duration-200"
          aria-label={mobileOpen ? "மெனு மூடு" : "மெனு திற"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Menu Panel ── */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white border-t border-[#D4AF37]/20 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          {/* Gold divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-3" />

          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
                onClose={() => setMobileOpen(false)}
              />
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-4 pt-3 border-t border-[#D4AF37]/20">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-[#D9381E] to-[#b02d18] text-white
                shadow-[0_4px_12px_rgba(217,56,30,0.3)]
                transition-all duration-200 active:scale-95"
            >
              🙏 தரிசனத்திற்கு தொடர்பு கொள்ளுங்கள்
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
