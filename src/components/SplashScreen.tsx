import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Remove from DOM after 2 seconds
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center ">
        <img
          src={logo}
          alt="கோரக்கர் சித்தர் லோகோ"
          className="w-70 h-70 sm:w-80 sm:h-80 object-contain mb-6 drop-shadow-xl"
        />
        <div className="leading-tight text-center">
          <div className="font-serif-tamil text-2xl sm:text-3xl font-bold text-[#D9381E] mb-1">
            கோரக்கர் சித்தர்
          </div>
          <div className="text-xs sm:text-sm text-[#666666] tracking-[0.2em] uppercase">
            ஜீவசமாதி பீடம்
          </div>
        </div>
      </div>
    </div>
  );
}
