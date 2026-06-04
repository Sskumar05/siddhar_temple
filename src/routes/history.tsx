import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "வரலாறு — கோரக்கர் சித்தர் கோவில்" },
      { name: "description", content: "கோரக்கர் சித்தர் ஜீவசமாதி பீடத்தின் வரலாற்று காலவரிசை, தோற்றம், முக்கிய நிகழ்வுகள், ஜீவசமாதி முக்கியத்துவம்." },
    ],
  }),
  component: History,
});

const timeline = [
  { year: "11–12ஆம் நூற்றாண்டு", title: "சித்தரின் வருகை", text: "கோரக்கர் சித்தர் தென்னகம் வந்து வடக்கு பொய்கைநல்லூரில் தங்கினார் என்று மரபு கூறுகிறது." },
  { year: "சித்திர மாதம்", title: "ஜீவசமாதி", text: "சித்தர் தம் சீடர்களின் முன்னிலையில் யோக சமாதியில் அமர்ந்து ஜீவசமாதி அடைந்தார்." },
  { year: "18ஆம் நூற்றாண்டு", title: "புதுப்பித்தல்", text: "உள்ளூர் மக்கள் ஆதரவில் கோவில் விரிவாக்கம் செய்யப்பட்டது. குருபூஜை விழா தொடங்கப்பட்டது." },
  { year: "20ஆம் நூற்றாண்டு", title: "மீட்டெடுப்பு", text: "பக்தர் சபையால் கோவில் முழுமையாகப் புதுப்பிக்கப்பட்டு, தினசரி பூஜைகள் ஒழுங்குபடுத்தப்பட்டன." },
  { year: "தற்போது", title: "உலகம் முழுவதும் பக்தர்கள்", text: "இன்று உலகின் பல்வேறு நாடுகளிலிருந்து பக்தர்கள் வந்து ஜீவசமாதியைத் தரிசிக்கின்றனர்." },
];

function History() {
  return (
    <>
      <PageHero eyebrow="வரலாறு" title="நூற்றாண்டுகளின் கதை" subtitle="ஓர் சித்தரின் ஜீவசமாதியிலிருந்து உலகப் பிரசித்தி பெற்ற பீடம் ஆகிய பயணம்." />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative">
          {/* vertical golden thread */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((t, i) => (
              <Reveal key={t.year}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "md:[&>div]:order-2" : ""}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-gold shadow-gold ring-4 ring-background" />
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{t.year}</div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary">{t.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{t.text}</p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-14 text-center">
              <h3 className="text-3xl md:text-4xl font-semibold text-primary">ஜீவசமாதியின் முக்கியத்துவம்</h3>
              <p className="mt-5 text-muted-foreground leading-loose max-w-2xl mx-auto">
                ஜீவசமாதி என்பது சாதாரண சமாதி அல்ல — உயிரோடு ஆழ்நிலை தியானத்தில் அமர்ந்து உடலை இணையச் செய்த நிலை. சித்தரின் ஆற்றல் என்றும் அப்பீடத்தில் தங்கியிருக்கும். அதனால்தான் இது அபூர்வ சக்தி வாய்ந்த தலம்.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
