import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";


export const Route = createFileRoute("/about-temple")({
  head: () => ({
    meta: [
      { title: "பீடம் பற்றி — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "வடக்கு பொய்கைநல்லூர் கோரக்கர் சித்தர் கோவிலின் வரலாறு, தனிச்சிறப்பு, கட்டிடக்கலை மற்றும் ஆன்மீக முக்கியத்துவம்." },
    ],
  }),
  component: AboutTemple,
});

const sections = [
  { title: "அறிமுகம்", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781092911/img_5049_le5sas.jpg", content: "தமிழ்நாட்டுச் சித்தர் பரம்பரையில் கோரக்கர் சித்தருக்குச் சிறப்பான தனி இடம் உண்டு. நவநாத சித்தர்கள், பதினெண் சித்தர்கள் பட்டியல்களில் எல்லாம் கோரக்கச் சித்தர் பெயர் தவறாது இடம் பெற்றுள்ளது தமிழ் நாட்டுச் சித்தர் பரம்பரையில் முன் வரிசையில் வைத்து எண்ணப்படும் அகத்தியர், திருமூலர், போகர் முதலியவர்களோடு ஒப்ப வைத்து எண்ணத்தக்க பெருமைமிக்கவர் கோரக்கர் சித்தர்.\n\nகோரக்கர், கோரக்கர் சித்தர், கோரக்க நாதர், ஸ்ரீமத் கோரக்கநாதப் பெருமான் எனப் பல பெயர்களில் இவர் வழங்கப் பெறுகிறார். தமிழ்நாட்டில் மட்டுமல்லாது, இந்திய நாட்டின் தென், வட மாநிலங்களிலும், சீன நாடு முதலிய கீழை நாடுகளிலும் கோரக்கர் வரலாறு அறியப்பட்டுள்ளது. இதுவரை கிடைத்திருக்கும் வரலாற்று ஆதாரங்களை முறைப்படுத்தி, ஆராய்ந்து ஒருவாறு கோரக்கர் அருள் வரலாறு இவ்வியலில் தொகுத்துத் தரப்பட்டுள்ளது." },
  { title: "புனித முக்கியத்துவம்", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781092281/img_5001.1_vddhrt.jpg", content: "கோரக்கர் சித்தரின் ஜீவசமாதி, பதினெண் சித்தர் மரபின் மகத்துவத்தையும் ஆன்மீக பாரம்பரியத்தையும் வெளிப்படுத்தும் புனிதத் தலமாக விளங்குகிறது. யோகம், ஞானம், காயகல்பம் மற்றும் சித்த மருத்துவத்தில் உயர்ந்த நிலையை அடைந்த கோரக்கர் சித்தர், காலத்தைக் கடந்த மகா ஞானியாக பக்தர்களால் போற்றப்படுகிறார். அவரது ஜீவசமாதி அமைந்துள்ள இத்தலம், ஆன்மீக ஆற்றல் நிறைந்த அருள்மிகு திருத்தலமாக விளங்கி, தினமும் ஏராளமான பக்தர்களை ஈர்த்து வருகிறது.\n\nஇத்தலத்திற்கு வருகை தரும் பக்தர்கள் மனஅமைதி, இறைநம்பிக்கை, ஆன்மீக விழிப்புணர்வு மற்றும் உள்ளார்ந்த அமைதியைப் பெறுவதாக நம்புகின்றனர். சித்தர் அருளை நாடி வரும் பக்தர்களின் வேண்டுதல்கள் நிறைவேறி, வாழ்வில் நலன், வளம், ஆரோக்கியம், குடும்ப ஒற்றுமை மற்றும் ஆன்மீக முன்னேற்றம் கிடைப்பதாக பக்தர்களின் ஆழ்ந்த நம்பிக்கையாக உள்ளது." },
  { title: "ஆன்மீக முக்கியத்துவம்", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929094/IMG_6245_erhrdy.jpg", content: "கோரக்கர் சித்தர் ஆன்மீக ஞானத்தின் உச்சமாகப் போற்றப்படும் மகா சித்தர் ஆவார். யோகம், தியானம், காயகல்பம் மற்றும் சித்த மருத்துவத்தில் உயர்ந்த ஞானம் பெற்றவர் என சித்தர் மரபில் சிறப்பாக மதிக்கப்படுகிறார். அவரது ஜீவசமாதி அமைந்துள்ள இத்தலம், ஆன்மீக சக்தி நிறைந்த புனிதத் திருத்தலமாக விளங்கி, பக்தர்களுக்கு மனஅமைதி, இறைநம்பிக்கை மற்றும் ஆன்மீக விழிப்புணர்வை அளித்து வருகிறது.இங்கு தரிசனம் செய்யும் பக்தர்கள் சித்தர் அருளால் வாழ்க்கையில் நம்பிக்கை, தெளிவு, மனவலிமை மற்றும் ஆன்மீக முன்னேற்றம் பெறுவதாக நம்புகின்றனர். \n\nபல நூற்றாண்டுகளாக கோரக்கர் சித்தரின் ஜீவசமாதி, பக்தர்களின் நம்பிக்கையின் மையமாகவும், சித்தர் மரபின் மகத்துவத்தை எடுத்துரைக்கும் அருள்மிகு ஆன்மீகத் தலமாகவும் விளங்கி வருகிறது." },
  { title: "சிறப்பு வழிபாடு", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1780929106/IMG_6090_lxpzpc.jpg", content: "கோரக்கர் சித்தருக்கு நடைபெறும் சிறப்பு வழிபாடுகள் பக்தர்களின் ஆன்மீக வளர்ச்சிக்கும், மனநிறைவிற்கும், இறைநம்பிக்கைக்கும் பெரும் துணையாக விளங்குகின்றன. அர்ச்சனை, அபிஷேகம், தீபாராதனை மற்றும் சிறப்பு பூஜைகளில் பக்தியுடன் பங்கேற்பதன் மூலம் சித்தர் அருளையும் ஆன்மீக ஆற்றலையும் பெறலாம் என நம்பப்படுகிறது. இவ்வழிபாடுகள் மனக்கவலைகளை நீக்கி, மனஅமைதியை வழங்கி, வாழ்க்கையில் நம்பிக்கை மற்றும் நேர்மறை எண்ணங்களை வளர்க்க உதவுகின்றன.நூற்றாண்டுகளாக பக்தர்கள் கோரக்கர் சித்தரின் திருவடிகளை சரணடைந்து வழிபட்டு அருள்பெற்று வருகின்றனர். \n\nசித்தர் அருளால் ஆரோக்கியம், நலன், வளம், குடும்ப ஒற்றுமை மற்றும் வாழ்வில் முன்னேற்றம் கிடைக்கும் என்பது பக்தர்களின் ஆழ்ந்த நம்பிக்கையாகும். கோரக்கர் சித்தரின் சிறப்பு வழிபாடுகள், இறையருளைப் பெறுவதற்கும் ஆன்மீக நிறைவை அடைவதற்கும் அரிய வாய்ப்பாக இன்றளவும் போற்றப்பட்டு வருகின்றன." },
];

function AboutTemple() {
  return (
    <>
      <PageHero eyebrow="பீடம் பற்றி" title="அருள் நிறைந்த தலம்" subtitle="நூற்றாண்டுகளின் ஆன்மீக மரபு, கம்பீரமான கட்டிடக்கலை, அமைதியின் சூழல்." />
      
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-24 md:space-y-32">
          {sections.map((s, i) => (
            <Reveal key={s.title}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
                  <img src={s.img} alt={s.title} loading="lazy" className="relative rounded-3xl shadow-luxury w-full aspect-[4/5] object-cover" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{String(i + 1).padStart(2, "0")} / 04</div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">{s.title}</h2>
                  <p className="mt-6 text-muted-foreground leading-loose whitespace-pre-line">{s.content}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-24 bg-gold/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">கோவில் நிர்வாகம்</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-primary">நிர்வாக அறங்காவலர்</h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
            </div>
          </Reveal>

          {/* Main Leader Card */}
          <div className="flex justify-center mb-12">
            <Reveal delay={0.1}>
              <div className="group glass rounded-[2.5rem] p-8 md:p-12 w-full max-w-md border-2 border-gold shadow-luxury hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 text-center relative overflow-hidden bg-white/60">
                <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {/* <div className="w-36 h-36 mx-auto rounded-full bg-gold/20 border-4 border-white shadow-xl overflow-hidden mb-6 flex items-center justify-center">
                    <img src="https://ui-avatars.com/api/?name=J&background=D9381E&color=fff&size=256" alt="இரா. ஜீவானந்தம்" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div> */}
                  <h3 className="text-2xl font-bold text-black mb-2">இரா. ஜீவானந்தம்</h3>
                  <p className="font-medium text-sm">B.A.</p>
                  {/* <p className="text-gold font-semibold mt-2 px-4 py-1 bg-gold/10 rounded-full inline-block">(நிர்வாக அறங்காவலர்)</p> */}
                </div>
              </div>
            </Reveal>
          </div>

           <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold text-primary">அறங்காவலர்கள்</h2>
              <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
            </div>
          </Reveal>

          {/* Grid for remaining 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* Card 2 with degree */}
            <Reveal delay={0.2}>
              <div className="group glass rounded-3xl p-6 text-center border border-border/50 hover:border-gold/50 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-500 bg-white/40 h-full flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-black mb-1">வே. அ. கிருஷ்ணன்</h3>
                <p className="font-medium text-sm">M.A., B.Ed.</p>
              </div>
            </Reveal>

            {/* Cards 3, 4, 5 without degree */}
            {[
              { name: "E.R. காசிநாதன்", id: "K" },
              { name: "வை. இரா. ஜெயச்சந்திரன்", id: "J" },
              { name: "வே. வி. திருநாவுக்கரசு", id: "T" },
            ].map((person, index) => (
              <Reveal key={person.name} delay={0.3 + index * 0.1}>
                <div className="group glass rounded-3xl p-6 text-center border border-border/50 hover:border-gold/50 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-500 bg-white/40 h-full flex flex-col items-center justify-center">
                  <h3 className="text-lg font-bold text-black">{person.name}</h3>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
