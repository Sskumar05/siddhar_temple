import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";


export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "திருவிழாக்கள் — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "ஆண்டு குரு பூஜை, மகா சிவராத்திரி, பௌர்ணமி திருவிழா, கார்த்திகை தீபம் — கோவிலின் முக்கிய திருவிழாக்கள்." },
    ],
  }),
  component: Festivals,
});

const festivals = [
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781256148/Moon_w6z16s.jpg", title: "பௌர்ணமி விழா", month: "மாதந்தோறும்", desc: "இன்று காலை நாதஸ்வரம் தொடங்கி, அன்னாபிஷேகம், பௌர்ணமி விழா, மங்கல இசை, சொற்பொழிவு என பஞ்ச மூர்த்தி விழா சிறப்பாக நடைபெறுகிறது." },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781113968/IMG_6228_z48eqw.jpg", title: "ஐப்பசி பரணி பெருவிழா", month: "ஐப்பசி மாதம்", desc: "பௌர்ணமி மற்றும் ஐப்பசி பரணியில் சிறப்பு வழிபாடும், ஆயிரக்கணக்கான பக்தர்கள் தரிசனமும் அன்னதானமும் பெற்று அருளாசி பெறுகின்றனர்" },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929087/IMG_6117_dtvqdd.jpg", title: "ஆடி பிரம்மோற்சவ விழா", month: "ஐப்பசி மாதம்", desc: "கோரக்கர் ஆசிரமத்தில் ஆடி பிரம்மோற்சவ விழா நடைபெறுகிறது. சித்தரின் அருளை நாடும் பக்தர்கள் தரிசனமும் அன்னதானமும் பெறுகின்றனர்." },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780928667/WhatsApp_Image_2026-06-03_at_2.43.43_PM_vjrewz.jpg", title: " ஆங்கில புத்தாண்டு விழா ", month: "ஐப்பசி மாதம்", desc: "கோரக்கர் ஆசிரமத்தில் ஆங்கில புத்தாண்டு விழா; பக்தர்கள் சித்தர் தரிசனமும் அன்னதானமும் பெற்று அருளாசி; கோரக்கரின் அருள் எல்லோருக்கும்." },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781113816/pancha_murthi_koahvs.png", title: "பஞ்ச மூர்த்தி விழா", month: "ஐப்பசி மாதம்", desc: "அருள்மிகு கோரக்கர் சித்தரின் அருளால் ஐந்து தெய்வங்களின் சங்கமத்தை கொண்டாடும், பக்தர்களுக்கு ஒற்றுமையும் ஆன்மீக சக்தியும் வழங்கும் புனிதப் பெருவிழா." },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780932868/IMG_6335_gguoyf.jpg", title: "கோரக்கர் ஜெயந்தி விழா", month: "கார்த்திகை மாதம்", desc: "சித்தர் பெருமானின் அவதார தினத்தை முன்னிட்டு சிறப்பு பூஜைகள், அபிஷேகங்கள் மற்றும் பக்தர்கள் பங்கேற்புடன் சிறப்பாக நடைபெறும் விழா." },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781117318/IMG_6248_rcyuqi.jpg", title: "கார்த்திகை தீபம்", month: "கார்த்திகை மாதம்", desc: "கோவில் முழுவதும் ஆயிரம் தீபங்கள் ஒளிர்கின்றன. ஒளியின் திருவிழா — ஞான ஒளியின் வடிவம்." },
  { img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929094/IMG_6245_erhrdy.jpg", title: "மகா சிவராத்திரி", month: "மாசி மாதம்", desc: "இரவு முழுவதும் சிவ வழிபாடு, பஜனை, தியானம், அபிஷேகம் என அற்புதமான ஆன்மீக சூழல்." }

];

function Festivals() {
  return (
    <>
      <PageHero eyebrow="புனித கொண்டாட்டங்கள்" title="ஆண்டு திருவிழாக்கள்" subtitle="ஒவ்வொரு திருவிழாவும் ஓர் ஆன்மீக அனுபவம். ஒளி, மலர், மந்திரம், அன்பு." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          {festivals.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-3xl bg-[#FFF8E7] border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover brightness-100 contrast-105 saturate-[1.05] group-hover:scale-105 transition-luxury duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 shadow-sm border border-[#D4AF37]/30 text-xs font-bold tracking-widest uppercase text-[#D9381E]">{f.month}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-start">
                  <h3 className="text-3xl md:text-4xl font-serif-tamil font-bold text-[#D9381E] mb-3">{f.title}</h3>
                  <p className="text-[#2C2C2C] leading-relaxed font-medium">{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
