import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";
import siddhar from "../assets/siddhar.jpg";
import lamps from "../assets/lamps.jpg";
import samadhi from "../assets/samadhi.jpg";

export const Route = createFileRoute("/korakkar-siddhar")({
  head: () => ({
    meta: [
      { title: "கோரக்கர் சித்தர் — வாழ்க்கை வரலாறு" },
      { name: "description", content: "பதினெண் சித்தர்களுள் தலைசிறந்த கோரக்கர் சித்தரின் வாழ்க்கை, ஆற்றல்கள், போதனைகள், இலக்கியம் மற்றும் மரபு." },
      { property: "og:image", content: siddhar },
    ],
  }),
  component: KorakkarSiddhar,
});

const story = [
  { eyebrow: "வாழ்க்கை வரலாறு", title: "சித்தரின் தோற்றம்", text: "கோரக்கர் சித்தர் இமயமலையிலிருந்து தென்னகம் வந்தவர் என்றும், மச்சேந்திரநாதரின் சீடர் என்றும் சாத்திரங்கள் கூறுகின்றன. யோகம், மருத்துவம், ரசவாதம், மந்திரம் ஆகியவற்றில் அபூர்வ ஆற்றல் கொண்டவர்." },
  { eyebrow: "ஆற்றல்கள்", title: "எண் சித்திகள்", text: "அணிமா, மகிமா, லகிமா, கரிமா உள்ளிட்ட எட்டு வகை சித்திகளையும் பெற்றவர். காலத்தைக் கடந்து வாழும் ஆற்றலையும், ஐம்பூதங்களையும் ஆட்டுவிக்கும் சக்தியையும் பெற்றவர் என்பது நம்பிக்கை." },
  { eyebrow: "போதனைகள்", title: "வாழ்வின் தத்துவம்", text: "“உள்ளம் தூய்மையாக இரு, உடல் சீராக இரு, மூச்சு நிதானமாக இரு — அதுவே சித்தி.” யோக நெறி, அஷ்டாங்க யோகம், குண்டலினி எழுச்சி பற்றி எளிய தமிழில் போதித்தவர்." },
  { eyebrow: "இலக்கியம்", title: "சித்தர் பாடல்கள்", text: "கோரக்கர் வைத்தியம், கோரக்கர் ஞானம், கோரக்கர் சூத்திரம் உள்ளிட்ட பல நூல்கள் இவருக்குக் குறிப்பிடப்படுகின்றன. வைத்தியம், ரசவாதம், யோக ரகசியங்கள் இதில் அடங்கியுள்ளன." },
  { eyebrow: "மரபு", title: "என்றும் வாழும் சித்தர்", text: "ஜீவசமாதி அடைந்தாலும் இன்றளவும் கோரக்கர் இக்கோவிலில் வாழ்ந்து கொண்டிருப்பதாகவே பக்தர்கள் நம்புகின்றனர். தியானத்தில் அமர்ந்தோர் அவரது அருள் தொடுதலை உணர்ந்துள்ளனர்." },
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
              <span className="text-gradient-gold">கோரக்கர்</span>
              <br />
              <span className="italic font-light">சித்தர்</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              காலத்தைக் கடந்த ஞானி. யோகத்தின் மாமன்னன். தென்னக சித்தர் மரபின் முன்னோடி.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 italic text-foreground/90">
              "மனம் ஒன்றினால் — மலையையும் அசைக்கலாம்."
              <div className="text-xs text-gold mt-2 not-italic tracking-widest">— கோரக்கர்</div>
            </blockquote>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-30 blur-3xl rounded-full" />
            <img src={siddhar} alt="கோரக்கர் சித்தர்" width={1280} height={1600} className="relative rounded-3xl shadow-luxury w-full" />
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
                  <h2 className="text-3xl md:text-4xl font-semibold text-gradient-gold">{s.title}</h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-loose">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Large image panel */}
      <section className="relative h-[60vh] overflow-hidden my-12">
        <img src={lamps} alt="தீபாராதனை" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="relative h-full flex items-end pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 w-full text-center">
            <Reveal>
              <p className="text-2xl md:text-4xl font-serif-tamil text-gradient-gold italic leading-tight max-w-3xl mx-auto">
                "சித்தர் என்பவன் இறப்பற்றவன் — அவன் சமாதியில் அமர்ந்தாலும் அருள் வழங்கிக் கொண்டிருப்பான்."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src={samadhi} alt="ஜீவசமாதி" loading="lazy" className="rounded-3xl shadow-luxury" />
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">கோரக்கர் சித்தரின் கொடை</div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gradient-gold">அருள் தொடரும் பீடம்</h2>
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
