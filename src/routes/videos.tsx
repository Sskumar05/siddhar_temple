import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";


export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "காணொளிகள் — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "கோவில் காணொளிகள், திருவிழா காட்சிகள், ஆன்மீக சொற்பொழிவுகள்." },
    ],
  }),
  component: Videos,
});

export interface VideoData {
  id: string;
  title: string;
  cat: string;
  videoPath?: string;
  videoUrl?: string;
  thumbnail?: string;
  duration?: string;
}

// ─── Videos Array ─────────────────────────────────────────────────────────────
// Easily manage all your videos from this single array.
// To add a real video, simply provide the 'videoPath' (e.g., "/videos/my-video.mp4").
// If 'videoPath' is not provided, it will gracefully fallback to showing the thumbnail.
export const VIDEOS_DATA: VideoData[] = [
  // {
  //   id: "1",
  //   title: "கோவில் சுற்றுப்பயணம்",
  //   cat: "கோவில்",
  //   videoPath: "./src/assets/full.mp4",
  //   thumbnail: hero,
  //   duration: "5:32",
  // },
  {
    id: "2",
    title: "மந்திரம்",
    cat: "கோரக்கர்",
    videoUrl: "https://res.cloudinary.com/dhjupdyus/video/upload/v1780582148/WhatsApp_Video_2026-06-03_at_10.36.07_PM_m7syr1.mp4",
    duration: "12:18",
  },
  {
    id: "3",
    title: "தரிசனம்",
    cat: "கோரக்கர்",
    videoUrl: "https://res.cloudinary.com/dhjupdyus/video/upload/v1780583271/lv_0_20260603202826_yvzd6w.mp4",
    duration: "8:45",
  },
];

function Videos() {
  return (
    <>
      <PageHero eyebrow="காணொளிகள்" title="ஆன்மீக காட்சிகள்" subtitle="கோரக்கர் சித்தர் காட்சிகள், திருவிழா நினைவுகள், ஞான சொற்பொழிவுகள்." />

      <section className="py-24 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS_DATA.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.06}>
                <div className="group glass rounded-3xl p-4 shadow-luxury hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gold/20 h-full flex flex-col bg-white/60">

                  {/* Video Player / Thumbnail Area */}
                  <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-100 shadow-inner">
                    {v.videoPath ? (
                      <video
                        src={v.videoPath}
                        poster={v.thumbnail}
                        controls
                        controlsList="nodownload"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      />
                    ) : v.videoUrl ? (
                      <iframe
                        src={v.videoUrl}
                        title={v.title}
                        className="absolute inset-0 w-full h-full rounded-2xl"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        {v.thumbnail && (
                          <img
                            src={v.thumbnail}
                            alt={v.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white">
                            ▶
                          </div>
                        </div>

                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                          {v.duration || "விரைவில்"}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Card Content Area */}
                  <div className="mt-5 px-2 flex-grow flex flex-col">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#D9381E] mb-2">{v.cat}</div>
                    <h3 className="text-xl font-serif-tamil font-bold text-gray-900 group-hover:text-[#D9381E] transition-colors leading-tight mb-3">
                      {v.title}
                    </h3>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
