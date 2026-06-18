import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/annadhanam")({
  head: () => ({
    meta: [
      { title: "அன்னதானம் — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "கோரக்கர் ஆசிரம அன்னதான மரபு மற்றும் அன்னக்காவடி மரபு." },
    ],
  }),
  component: AnnadhanamPage,
});

function AnnadhanamPage() {
  return (
    <>
      <PageHero
        eyebrow="தானத்தில் சிறந்தது அன்னதானம்"
        title="அன்னதானம்"
        subtitle="பசி என்ற நெருப்பு ஏழை எளியவர்களின் தேகத்தில் பற்றி எரிகின்ற போது அதை நீக்க எடுக்கப்படும் முயற்சிதான் ஜிவகாருண்யம் என்பது இராமலிங்க அடிகளாரின் வாக்கு. அந்த கருத்தை வலியுறுத்திய வள்ளுவர் பெருமகனார்."
      />



      {/* Sacred Quotes Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 grain" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal delay={0.1}>
              <div className="glass p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center relative hover-lift">
                <div className="absolute top-6 left-6 text-6xl text-gold/20 font-serif">"</div>
                <blockquote className="relative z-10 text-sm md:text-xl text-primary font-serif-tamil leading-relaxed">
                  அற்றார் அழிபசி தீர்த்தல் அஃதொருவன் பெற்றான் பொருள்வைப்புழி
                </blockquote>
                <div className="mt-6 text-sm md:text-xl text-muted-foreground font-medium">— என்று திருக்குறளில் வள்ளுவர் பெருமகனாரும்</div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center relative hover-lift">
                <div className="absolute top-6 left-6 text-6xl text-gold/20 font-serif">"</div>
                <blockquote className="relative z-10 text-sm md:text-xl text-primary font-serif-tamil leading-relaxed">
                  மனதின் ஞாலத்து வாழ்வோருக்கு எல்லாம் உண்டி கொடுத்தோர் உயிர் கொடுத் தோரே
                </blockquote>
                <div className="mt-6 text-sm md:text-xl text-muted-foreground font-medium">— என்று சீத்தலைச்சாத்தனார்</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Annadhanam Mahimai */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            {/* <SectionHeading eyebrow="அன்னதானத்தின் மகிமை" title="உயிரையே காக்கும் தர்மம்" align="center" /> */}
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-loose">
              <p>மணிமேகலையில் பசிப்பிணியைப் போக்குவோர் உயிர் கொடுத்தோராகவும், ஒப்பற்ற புகழுக்கு சொந்தக்காரர்கள் என்று விளம்புகின்றார்.</p>
              <p className="font-semibold text-primary">"பசி வந்திட குடிப்பிறப்பு, விழுப்பம், கல்வி, நாணம், புகழ், அழகு, சிற்றின்பம், அறிவு, பக்தி, இன்பம் ஆகிய பத்தும் பறந்து போகும் என்பது பழமொழி."</p>
              <p>உயிராகிய ஒளி பசியால் குறைவது என்பது கடவுளாகிய ஒளி நம் உடலை விட்டே விலகுவதே ஆகும், அதனால் தான் அன்னத்தை "பிரம்மம்" என்று வேதம் கூறுகிறது. தன்பசியாற்றிக் கொள்வதோடு பிறர் பசியாற்றும் பண்புடையது மனித உயிர்.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Korakkar Ashram Annadhanam Tradition */}
      <section className="py-24 bg-gold/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
                <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1780937253/IMG_6154_gcc2hb.jpg" alt="அன்னதானம்" className="relative rounded-3xl shadow-luxury w-full aspect-[4/3] object-cover" />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                {/* <SectionHeading eyebrow="கோரக்கர் ஆசிரம அன்னதான மரபு" title="சீரிய நெறி" /> */}
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                  <p>ஒவ்வொரு நாளும் சித்தர் ஆசிரமத்திற்கு யாத்திரீகர்கள், துறவிகள், திக்கற்றவர்கள் என பல தரப்பட்டவர்கள் வந்து வழிபாடு நிகழ்த்தி இரவு சித்தர் ஆசிரமத்திலேயே தங்குகின்றனர்.</p>
                  <p>இந்த ஆசிரமத்தில் நாள்தோறும் தங்குவோர் எத்தனை பேராயினும் அத்தனை பேருக்கும் மூன்று வேளை உணவு வழங்கப்பட்டு வருகிறது.</p>
                  <div className="p-6 glass rounded-2xl border-l-4 border-l-gold">
                    <p className="font-semibold text-primary">திக்கற்றோருக்குத் தங்கும் இடமும்,<br />பசித்தாருக்கு உணவும்,<br />நோயுற்றார்க்கு மருந்தும் நல்கி வாழ்விப்பதே சைவ சமய நெறியாகும்.</p>
                  </div>
                  <p>இதுவே சித்தர்கள் போற்றிய சீரிய நெறியும் ஆகும். சித்தர்கள் பலருள்ளும் கோரக்கர் சித்தர் இந்நெறியில் தலை நின்ற அருட்பெருஞ் சான்றோராவர்.</p>
                  <p className="text-xl text-primary font-medium">அவர் ஜீவ சமாதி கூடியுள்ள இந்த ஆசிரமத்தில் பசித்த வயிற்றோடு படுத்து உறங்கியவர் எவரும் இல்லை</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Annakkavadi Tradition */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PageHero
            eyebrow="தொடரும் பக்தி மரபு"
            title="அன்னக்காவடி மரபு"
            subtitle="தினமும் வீடு தோறும் அன்னம் சேகரித்து கோரக்கர் சித்தருக்கு நிவேதனம் செய்யப்பட்டு, பின்னர் பக்தர்களுக்கும் சிவனடியார்களுக்கும் வழங்கப்படுகிறது. பல நூற்றாண்டுகளாகத் தொடரும் பக்தி மரபான இது, தானம் மற்றும் தர்மத்தின் உயர்ந்த அடையாளமாக இன்றளவும் கடைப்பிடிக்கப்பட்டு வருகிறது."
          />


          {/* Annakkavadi Featured Image */}
          <section className="py-10 pb-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <Reveal>
                <div className="group relative rounded-3xl overflow-hidden border-2 border-gold/30 shadow-luxury hover:shadow-[0_20px_60px_rgba(212,175,55,0.25)] transition-all duration-700">
                  <img
                    src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781081117/Annakavadi_uxjnaw.png"
                    alt="அன்னக்காவடி மரபு"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-3xl pointer-events-none" />
                </div>
                <p className="mt-5 text-center text-sm text-muted-foreground tracking-wide italic">
                  பல நூற்றாண்டுகளாக தொடரும் கோரக்கர் சித்தரின் அன்னக்காவடி மரபு
                </p>
              </Reveal>
            </div>
          </section>

           <section>
                 <p className="mt-12 space-y-6 text-lg text-muted-foreground leading-loose justify-center text-center ">
                  அன்னக்காவடி தருமம் தாயே!
                  நாள்தோறும், இரவில் அடியவர்களுக்கு அன்னம் பாலிக்கக் கோரக்கச் சித்தர் ஆலயத்தில் சிறப்பான ஒரு நெறி பல நூறு ஆண்டுகளாகப் பின்பற்றப்பட்டு வருகிறது. இவ்வாசிரமத்தின் தலைமப் பூசாரியோ, அன்றி அவரின் உதவியாளர்களில் ஒருவரோ மாலை 7.00 மணி அளவில் தம் தோளில் ஓர் அன்னக்காவடியை ஏந்தி இவ்வூரின் வடக்கு மற்றும் தெற்கு வீதிகளில் உள்ள இல்லங்களுக்கு செல்வார்.
                  காவடியின் இருபக்கங்களிலும் பெரிய பானைகள் உரியில் வைக்கப் பெற்றிருக்கும். இரண்டு அன்னக்காவடி தம் இல்லத்தின் வாயிலில் வந்து நின்றவுடன், புதிதாக இரவில் சமைத்த சோற்றினை ஒரு தட்டில் எடுத்து வந்து அவ்வில்லத்துப் பெண்கள் அன்னக்காவடிப் பானையில் இடுகின்றனர். ‘அன்னக்காவடி தருமம் தாயே’ என்று கூறி வரும், இவ்வன்னக்காவடிக்கு அங்கு வாழ்ந்து வரும் அனைவரும் அன்னம் பாலிக்கப்படுகிறது.
                </p>
              </section>

          {/* <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "புறப்பாடு", desc: "தினமும் இரவு 7:00 மணியளவில் கோரக்கர் ஆசிரமத்திலிருந்து அன்னக்காவடிகள் வடக்கு மற்றும் தெற்கு திசைகளை நோக்கி புறப்படுகின்றன." },
              { step: "02", title: "சேகரிப்பு", desc: "ஊர் மக்களின் வீடுகளிலிருந்து சாதம் பக்தி சிரத்தையுடன் சேகரிக்கப்படுகிறது." },
              { step: "03", title: "நிவேதனம்", desc: "சேகரிக்கப்பட்ட அன்னம் முதலில் கோரக்கர் சித்தருக்கு நிவேதனம் செய்யப்படுகிறது." },
              { step: "04", title: "விநியோகம்", desc: "பின்னர் அது சிவனடியார்களுக்கும் பக்தர்களுக்கும் பிரசாதமாக வழங்கப்படுகிறது." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="glass p-8 rounded-3xl h-full relative hover-lift group">
                  <div className="text-5xl font-bold text-gold/10 absolute top-4 right-4 group-hover:text-gold/20 transition-colors">{item.step}</div>
                  <h3 className="text-2xl font-semibold text-primary mb-4 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground relative z-10">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div> */}
        </div>
      </section>



      {/* Annadhanam Contribution Plans */}
      <section className="py-24 bg-gold/5 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="அன்னதான கட்டணங்கள்" title="உங்கள் பங்களிப்பு" align="center" />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <div className="glass p-8 md:p-10 rounded-3xl border border-gold/30 hover-lift text-center flex flex-col items-center h-full">
                {/* <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <span className="text-2xl"></span>
                </div> */}
                <h3 className="text-2xl font-semibold text-primary mb-2">வடை பாயாசத்துடன் சிறப்பு அன்னதானம்</h3>
                <div className="mt-auto pt-6">
                  <div className="text-4xl font-bold text-gold mb-2">₹10,000</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass p-8 md:p-10 rounded-3xl border border-gold/30 hover-lift text-center flex flex-col items-center h-full">
                {/* <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🕉️</span>
                </div> */}
                <h3 className="text-2xl font-semibold text-primary mb-2">சிறப்பு பூஜை செய்ய கட்டணம்</h3>
                <div className="mt-auto pt-6">
                  <div className="text-4xl font-bold text-gold mb-2">₹3,500</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center max-w-2xl mx-auto text-muted-foreground bg-white/50 p-6 rounded-2xl border border-gold/10">
              <p>அன்னதானம், சிறப்பு பூஜை செய்ய விரும்பும் உள்ளவர்கள் அலுவலகத்தில் பணம் செலுத்தி ரசீது பெற்றுக்கொள்ளுமாறு பணிவுடன் கேட்டுக்கொள்ளப்படுகிறார்கள்.</p>
              {/* <p className="mt-4 text-primary font-medium">அன்னதானம், சிறப்பு பூஜை செய்ய விரும்பும் உள்ளவர்கள் அலுவலகத்தில் பணம் செலுத்தி ரசீது பெற்றுக்கொள்ளுமாறு பணிவுடன் கேட்டுக்கொள்ளப்படுகிறார்கள்.</p> */}
            </div>
          </Reveal>
        </div>
      </section>


      {/* Hero CTA */}
      <section className="pb-16 -mt-10 relative z-10 text-center">
        <Reveal>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#D9381E]  text-primary-foreground font-semibold shadow-gold hover-lift text-lg">
            அன்னதானம் செய்ய
          </Link>
        </Reveal>
      </section>

      {/* Call to Action Banner */}
      {/* <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroTemple} alt="Temple" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-primary-foreground">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif-tamil font-bold leading-tight mb-8">
              அன்னதானம் செய்திடுவீர்!<br/>
              பசி அகற்றிடுவீர்!<br/>
              கோரக்கர் அருள்பெறுவீர்!
            </h2>
            <Link to="/contact" className="inline-flex items-center px-10 py-5 rounded-full bg-white text-primary font-bold shadow-luxury hover-lift text-xl transition-all hover:bg-gold hover:text-white">
              அன்னதானத்தில் பங்கேற்க
            </Link>
          </Reveal>
        </div>
      </section> */}
    </>
  );
}
