import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";
import architecture from "../assets/architecture.jpg";
import samadhi from "../assets/samadhi.jpg";
import lamps from "../assets/lamps.jpg";
import pooja from "../assets/pooja.jpg";

export const Route = createFileRoute("/about-temple")({
  head: () => ({
    meta: [
      { title: "கோவில் பற்றி — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "வடக்கு பொய்கைநல்லூர் கோரக்கர் சித்தர் கோவிலின் வரலாறு, தனிச்சிறப்பு, கட்டிடக்கலை மற்றும் ஆன்மீக முக்கியத்துவம்." },
    ],
  }),
  component: AboutTemple,
});

const sections = [
  { title: "கோவில் அறிமுகம்", img: architecture, content: "வடக்கு பொய்கைநல்லூரில் அமைந்துள்ள இக்கோவில், மகா சித்தர் கோரக்கரின் ஜீவசமாதி அமைந்த புனித தலமாகும். பதினெண் சித்தர்களில் தலைசிறந்தவராக போற்றப்படும் கோரக்கர் சித்தர் இங்கு நிரந்தர சமாதி அடைந்துள்ளார். நூற்றாண்டுகளாக ஆயிரக்கணக்கான பக்தர்கள் இங்கு வந்து வணங்கி அருள்பெற்றுச் செல்கின்றனர்." },
  { title: "புனித முக்கியத்துவம்", img: samadhi, content: "ஜீவசமாதி தலங்கள் சக்தி நிறைந்தவை. இங்கு வருபவர்களின் வேண்டுதல்கள் நிறைவேறும், மனத்தடைகள் விலகும், ஆன்மீகப் பாதையில் முன்னேற்றம் கிடைக்கும் என்பது பக்தர்களின் அசையாத நம்பிக்கை. சித்தரின் ஆற்றல் இப்பீடத்தில் என்றும் வாழ்ந்து கொண்டிருக்கிறது." },
  { title: "கோவில் கட்டிடக்கலை", img: lamps, content: "சோழர் கால சிற்பக்கலையின் சிறப்பான எடுத்துக்காட்டாக விளங்கும் இக்கோவில், செதுக்கப்பட்ட கல் தூண்கள், அழகான விமானம், விரிவான மண்டபங்களோடு கம்பீரமாய் காட்சியளிக்கிறது. ஒவ்வொரு சிற்பமும் ஒரு வரலாற்றைச் சொல்கிறது." },
  { title: "ஆன்மீக முக்கியத்துவம்", img: pooja, content: "சித்தர் மரபின் தொடர்ச்சியாக யோகம், ஆயுர்வேதம், மந்திரம் ஆகியவற்றின் இரகசியங்களை இங்குப் பாதுகாக்கப்படுகின்றன. தியானத்திற்கும் சாதனைக்கும் ஏற்ற அமைதியான சூழல் இங்குண்டு." },
  { title: "சிறப்பு வழிபாடு", img: samadhi, content: "தினசரி அபிஷேகம், ஆராதனை, அர்ச்சனை, பௌர்ணமி தோறும் சிறப்பு பூஜை, மாதந்தோறும் குரு பூஜை — அனைத்தும் பாரம்பரிய முறையில் செய்யப்படுகின்றன." },
];

function AboutTemple() {
  return (
    <>
      <PageHero eyebrow="கோவில் பற்றி" title="அருள் நிறைந்த தலம்" subtitle="நூற்றாண்டுகளின் ஆன்மீக மரபு, கம்பீரமான கட்டிடக்கலை, அமைதியின் சூழல்." />
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
                  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{String(i + 1).padStart(2, "0")} / 05</div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">{s.title}</h2>
                  <p className="mt-6 text-muted-foreground leading-loose">{s.content}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
