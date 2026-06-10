import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, AlertCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "புகைப்படத் தொகுப்பு — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "கோவில் காட்சிகள், திருவிழாக்கள், அன்னதானம், பூஜை நிகழ்வுகள் புகைப்படத் தொகுப்பு." },
    ],
  }),
  component: Gallery,
});

// Update these with your actual Cloudinary URLs
const cloudinaryImages = [
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780928667/WhatsApp_Image_2026-06-03_at_2.43.43_PM_vjrewz.jpg"},
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780932868/IMG_6335_gguoyf.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929094/IMG_6245_erhrdy.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780932226/image_5000_bc7ahc.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929104/IMG_5999_sbr5bs.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929107/IMG_5984_yhw7v7.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929106/IMG_6090_lxpzpc.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780932807/IMG_6236_my6hci.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929090/IMG_6210_damovb.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929087/IMG_6117_dtvqdd.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929111/IMG_6043_dqwnwm.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780583170/WhatsApp_Image_2026-06-02_at_7.51.51_PM_db2s9k.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929099/IMG_6304_b6act1.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929100/IMG_6289_hfvb17.jpg" },
  { src: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929081/IMG_6111_o8diqe.jpg" },

];

function ImageCard({ img, onClick }: { img: { src: string; cat: string }; onClick: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group flex flex-col w-full bg-[#FFF8E7] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] transition-luxury text-left relative"
    >
      <div className="overflow-hidden aspect-[4/3] w-full relative bg-black/5">

        {/* Loading Placeholder */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 bg-black/10 animate-pulse z-10 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error Fallback */}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-black/5 z-10">
            <AlertCircle className="w-8 h-8 mb-2 opacity-50 text-red-400" />
            <span className="text-xs font-medium">Failed to load image</span>
          </div>
        ) : (
          <img
            src={img.src}
            alt={img.cat}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700 ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          />
        )}
      </div>
    </button>
  );
}

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  const [modalLoading, setModalLoading] = useState(true);

  const handleClose = () => {
    setOpen(null);
    setModalLoading(true);
  };

  return (
    <>
      <PageHero eyebrow="புகைப்படத் தொகுப்பு" title="கோவில் காட்சிகள்" subtitle="ஒவ்வொரு படமும் ஓர் ஆன்மீக கதை சொல்கிறது." />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudinaryImages.map((img, i) => (
              <ImageCard
                key={i}
                img={img}
                onClick={() => {
                  setOpen(img.src);
                  setModalLoading(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full Size Modal */}
      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in"
        >
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:scale-110 transition z-50 shadow-lg">
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {modalLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={open}
              alt="Full size view"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              onLoad={() => setModalLoading(false)}
              onError={() => setModalLoading(false)}
              className={`max-w-full max-h-[90vh] rounded-2xl shadow-luxury pointer-events-auto transition-all duration-500 ${modalLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
