import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";


export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "திருவிழாக்கள் — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "ஆண்டு குரு பூஜை, மகா சிவராத்திரி, பௌர்ணமி திருவிழா, கார்த்திகை தீபம் — கோவிலின் முக்கிய திருவிழாக்கள்." },
    ],
  }),
  component: Festivals,
});


const festivals = [
  { title: "மாதந்தோறும் பௌர்ணமி விழா", desc: "இன்று காலை நாதஸ்வரம் தொடங்கி, அன்னாபிஷேகம், பௌர்ணமி விழா, மங்கல இசை, சொற்பொழிவு என பஞ்ச மூர்த்தி விழா சிறப்பாக நடைபெறுகிறது." },
  { title: "ஐப்பசி பரணி விழா", desc: "பௌர்ணமி மற்றும் ஐப்பசி பரணியில் சிறப்பு வழிபாடும், ஆயிரக்கணக்கான பக்தர்கள் தரிசனமும் அன்னதானமும் பெற்று அருளாசி பெறுகின்றனர்" },
  { title: "ஆடி பிரம்மோற்சவ விழா", desc: "கோரக்கர் ஆசிரமத்தில் ஆடி பிரம்மோற்சவ விழா நடைபெறுகிறது. சித்தரின் அருளை நாடும் பக்தர்கள் தரிசனமும் அன்னதானமும் பெறுகின்றனர்." },
  { title: "ஆங்கில புத்தாண்டு பிறப்பு விழா", desc: "கோரக்கர் ஆசிரமத்தில் ஆங்கில புத்தாண்டு விழா; பக்தர்கள் சித்தர் தரிசனமும் அன்னதானமும் பெற்று அருளாசி; கோரக்கரின் அருள் எல்லோருக்கும்." },
  { title: "கோரக்கர் ஜெயந்தி விழா", desc: "சித்தர் பெருமானின் அவதார தினத்தை முன்னிட்டு சிறப்பு பூஜைகள், அபிஷேகங்கள் மற்றும் பக்தர்கள் பங்கேற்புடன் சிறப்பாக நடைபெறும் விழா." },
  { title: "கார்த்திகை மாத சோமவார விழா", desc: "கோவில் முழுவதும் ஆயிரம் தீபங்கள் ஒளிர்கின்றன. ஒளியின் திருவிழா — ஞான ஒளியின் வடிவம்." },
  { title: "மகா சிவராத்திரி விழா", desc: "இரவு முழுவதும் சிவ வழிபாடு, பஜனை, தியானம், அபிஷேகம் என அற்புதமான ஆன்மீக சூழல்." }
];

function Festivals() {
  return (
    <>
      <PageHero eyebrow="திருவிழாக்கள்" title="ஆசிரம ஆண்டு திருவிழாக்கள்" />
     <section className="py-5">
       <div className="relative rounded-[2rem] overflow-hidden border border-gold/20 p-2 bg-background/50">
          <Reveal>
                 <img 
                   src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781599734/IMG_20260616_141613_x4ruqs.png"
                   className="h-full w-full sm:w-[75%] sm:h-[70%] justify-center items-center mx-auto object-contain rounded-[1.5rem] shadow-2xl relative z-10 "
                 />
          </Reveal>
        </div>
     </section>


      {/* Festivals List Section */}
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 justify-center items-center">
          {festivals.map((f, i) => {
            const isLastOdd = i === festivals.length - 1 && festivals.length % 2 !== 0;
            return (
              <div 
                key={f.title} 
                className={isLastOdd ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto w-full" : "w-full"}
              >
                <Reveal delay={i * 0.1}>
                  <article className="group overflow-hidden rounded-3xl bg-[#FFF8E7] border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col h-full">
                    <div className="p-8 md:p-10 flex-1 flex flex-col justify-start">
                      <h3 className="text-2xl md:text-2xl font-serif-tamil font-bold text-[#D9381E] mb-3">{f.title}</h3>
                      <p className="text-[#2C2C2C] leading-relaxed font-medium">{f.desc}</p>
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>


       {/* Quote Card Panel */}
      <section className="py-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-14 text-center bg-gradient-to-br from-gold/20 to-amber-800/20 backdrop-blur-sm border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] shadow-luxury">
              <h3 className="text-3xl md:text-4xl font-semibold text-primary"> பஞ்ச மூர்த்தி விழா</h3>
              <p className="mt-5 text-md text-muted-foreground leading-loose max-w-3.2xl mx-auto text-left">
                ஐப்பசி பரணி நாள் அன்று, வடக்கு பொய்கை நல்லூர் அருள்மிகு நந்திநாதஸ்வர திருக்கோவிலிருந்து அதிகாலை 3 மணி அளவில் செண்டை மேளம் முழங்க வாண வேடிக்கைகளுடன் மேள தாளங்களுடன் பஞ்சமூர்த்தி வீதியுலா காட்சி நடைபெறும். அந்த வீதி உலா காட்சியானது அருள்மிகு கோரக்கர் சித்தர் ஆசிரமத்திற்கு எதிரில் நின்று செட்டியார் தம்பதிகளுக்கு அருள் காட்சி கொடுப்பது ஐதீகமாக நடைபெற்று வருகிறது. ஊர் முழுவதும் வீதி உலா காட்சி நடைபெற்று முடிவில் நந்திநாதஸ்வர அந்த காட்சியானது முடிவாகும்.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
