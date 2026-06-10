import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";


export const Route = createFileRoute("/korakkar-siddhar")({
  head: () => ({
    meta: [
      { title: "கோரக்கர் சித்தர் — வாழ்க்கை வரலாறு" },
      { name: "description", content: "பதினெண் சித்தர்களுள் தலைசிறந்த கோரக்கர் சித்தரின் வாழ்க்கை, ஆற்றல்கள், போதனைகள், இலக்கியம் மற்றும் மரபு." },
    ],
  }),
  component: KorakkarSiddhar,
});

const story = [
  { eyebrow: "வாழ்க்கை வரலாறு", title: "கோரக்கர் தோற்றம்", text: "பதினெண் சித்தர்களில் ஒருவர் கோரக்கர் சித்தர். சித்தர்கள் பலரும் சிவாலயங்கள் மற்றும் முருகன் ஆலயங்களில் ஜீவ சமாதி பெற்றிருக்க, இவர் மட்டும் சிவாலயத்தின் வெளியே வலதுபுறம் ஞானச்சுடராய் ஒளி வீசிக் கொண்டிருக்கிறார். கோரக்கர் சித்தரின் பிறப்பு சித்த புருஷர்களின் பிறப்பிலேயே விசேஷமான தன்மை கொண்டது. விபூதி எனில் சாம்பல் என்று ஒரு பொருளும் ஞானம் என்று மறுபொருளும் உண்டு. அப்படிப்பட்ட விபூதியிலிருந்து 9 வயது பாலனாக கார்த்திகை மாதம் ஆயில்ய நட்சத்திரத்தில் அவதரித்தவர். இவர் எந்த ஆயுதத்தாலும் அழிக்க முடியாத, பஞ்சபூதங்களாலும் பாதிக்கப்படாத வஜ்ர காயம் பெற்றவர் என்கிறது தல புராணம். இவர் சீனாவில் 500 வருடங்கள் சித்து விளையாடியதாகவும், பொதிகையில் 400 வருடங்கள் தங்கிய பின் பழனி வந்ததாகவும் அவரது நூலில் குறிப்பிடப்படுகிறது." },
  { eyebrow: "ஞானசிகரங்கள்", title: "கோரக்கரும் போகரும்", text: "நவபாஷண முருகன் சிலையை போகரும், கோரக்கரும் உருவாக்கி அதனை தைப்பூச பௌர்ணமி நாளில் பழனியில் நிறுவினர்.அதன் பிறகு போகர் கோரக்கரை அழைத்து என்னை (போகரை) பழனியில் சமாதி வைத்த பின் நீ வடக்குப் பொய்கை நல்லூர் சென்று அங்கேயே தவம் செய்து கொண்டிரு, நான் என் சமாதியிலிருந்து வெளிப்பட்டு அங்கு வந்து உன்னை சமாதியில் அடக்கம் செய்கிறேன் என்றார். அதன் படி கோரக்கரை போகர் ஐப்பசி திங்கள் பரணி நட்சத்திரத்தில் வடக்குப் பொய்கை நல்லூரில் ஜீவசமாதி அடைய வைத்தார். இச் சிற்றூரில் சமாதி கூடிய காலம் கி.பி. 1283 ஆம் ஆண்டு என்று கணிக்கப்பட்டுள்ளது. கோரக்கரும் போகரும் இணைந்து அமைத்ததே 'சிதம்பர ரகசியம்' என்கின்றனர்" },
  { eyebrow: "திருநூல்கள்", title: "கோரக்கர் அருளிய நூல்கள்", text: "ஒளிவு மறைவு இல்லாமல் சித்த வினோதங்களையும், சித்த மருத்துவ குறித்தும், மற்ற சித்தர்கள் போல் மூடு மந்திரம், பரிபாஷைகள், சங்கேதக் குறிகள் என ஏதும் இல்லாமல் எளிய சொற்களால் நூல்களை உலகுக்கு தந்துள்ளார். கோரக்கர் அருளிய நூல்கள் 40 என்பது அவரது நூல்களால் அறிய முடிகிறது. அதில் பிரசித்து பெற்ற நூல்கள்:- சந்திர ரேகை, நமனாச திறவுகோல், ரவிமேகலை, முத்தாரம், மலைவாகடம், கற்பம், முத்திநெறி, அட்டகர்மம், சூத்திரம், வசார சூத்திரம், மூலிகை, தண்டகடா கற்ப சூத்திரம், பிரம்ம ஞானம் ஆகும். சதுரகிரி மஹாத்மியம் என்கிற தனது நூலில் கோரக்கரே “திருப்பழனி மல்லூர் தன்னில் போகரோடு தெண்டபாணி தெய்வ உருவம் செய்தோம்” என்று சொல்லி இருக்கிறார்." },
  { eyebrow: "ஆன்மீகம்", title: "உள் ஒளி உணர்வு மையம் (தியான மண்டபம்) ", text: "மக்களின் பக்தி உணர்வை மேன்மைப்படுத்தி ஞான நிலைக்கு எடுத்துச் செல்ல மன பயிற்சிகளை நம் முன்னோர்கள் காட்டியது தான் தியானம். உண் முக அக வழி பாடாகிய தியானம் சிறக்க ஆசிரம அறக்கட்டளை நிர்வாகம் உள் ஒளி உணர்வு மையம் (தியான மண்டபம்) ஒன்றை ஆசிரமவளாகத்தில் உருவாக்கி உள்ளது." },
  { eyebrow: "வழிபாடு", title: "சித்தர் ஆசிரம நாள் வழிபாடு", text: "தினந்தோறும் கோரக்கருக்கு மூன்று கால பூஜைகள் நடத்தப்படுகின்றன. பக்தர்களின் வழிபாட்டுக்கு கருவறை காலை 6:00 மணி முதல் பகல் 1:00 மணி வரை பகல் 4:00 மணி முதல் இரவு 9:00 மணி வரை திறந்திருக்கும். இந்த ஜீவ சமாதி பீடத்திற்கு நாம் எப்போது வந்தாலும் முன் பகுதியில் காவி உடை அணிந்த சிவனடியார்கள் நூற்றுக்கணக்கில் நிறைந்துள்ளதை பார்க்கலாம். பௌர்ணமி தினம் மற்றும் வியாழக்கிழமைகளிலும் இங்கு இரவு தங்கி வேண்டி கொள்ள நினைத்த காரியங்கள் கைகூடும் என்று பக்தர்கள் நம்புகிறார்கள்." },
];

function KorakkarSiddhar() {
  return (
    <>
      {/* Hero Banner with portrait */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">பதினெண் சித்தர்</div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05]">
              <span className="text-primary">கோரக்கர்</span>
              <br />
              <span className="italic font-light">சித்தர்</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              அழியாத வஜ்ரகாயம் பெற்றவர். யோகமும் ஞானமும் ஒன்றாய் விளங்கிய மகா சித்தர். கோரக்கர்.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 italic text-foreground/90">
              "மனம் ஒன்றினால் — மலையையும் அசைக்கலாம்."
              <div className="text-xs text-gold mt-2 not-italic tracking-widest">— கோரக்கர்</div>
            </blockquote>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-30 blur-3xl rounded-full" />
            <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1780933638/img_5001_aaayj0.jpg" alt="கோரக்கர் சித்தர்" width={1280} height={1600} className="relative rounded-3xl shadow-luxury w-full" />
          </div>
        </div>
      </section>

      {/* Storytelling sections */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-28">
          {story.map((s, i) => (
            <Reveal key={s.title}>
              <article className="grid md:grid-cols-[120px_1fr] gap-8">
                <div className="md:text-right">
                  <div className="text-5xl font-serif-tamil text-gold/40">0{i + 1}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{s.eyebrow}</div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-primary">{s.title}</h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-loose">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote Card Panel */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-14 text-center  bg-gradient-to-br from-gold/20 to-amber-300/20 backdrop-blur-sm border border-gold/20 shadow-luxury">
              <h3 className="text-3xl md:text-4xl font-semibold text-primary"> ஜீவசமாதியின் முக்கியத்துவம்</h3>
              <p className="mt-5 text-muted-foreground leading-loose max-w-2xl mx-auto">
                ஜீவசமாதி என்பது சாதாரண சமாதி அல்ல — உயிரோடு ஆழ்நிலை தியானத்தில் அமர்ந்து உடலை இணையச் செய்த நிலை. சித்தரின் ஆற்றல் என்றும் அப்பீடத்தில் தங்கியிருக்கும். அதனால்தான் இது அபூர்வ சக்தி வாய்ந்த தலம்.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781077473/Arul_beedam_gszga7.jpg" alt="ஜீவசமாதி" loading="lazy" className="rounded-3xl shadow-luxury" />
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">கோரக்கர் சித்தரின் கொடை</div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary">அருள் தொடரும் பீடம்</h2>
                <p className="mt-5 text-muted-foreground leading-loose">
                  ஜீவசமாதி தலத்தில் தியானம் செய்வோர் சித்தரின் ஆற்றலை நேரடியாக உணரலாம். உலகின் எந்த மூலையிலிருந்தும் வந்து இங்கு வேண்டிக்கொள்வோர் அருள் பெறுகின்றனர்.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
