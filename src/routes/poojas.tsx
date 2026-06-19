import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Section";

export const Route = createFileRoute("/poojas")({
  head: () => ({
    meta: [
      { title: "பூஜைகள் — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "தினசரி நடைதிறப்பு மற்றும் பூஜை நேரங்கள்." },
    ],
  }),
  component: Poojas,
});

function Poojas() {
  return (
    <>
      <PageHero 
        eyebrow="தினசரி வழிபாடு" 
        title="பூஜை நேரங்கள்" 
        subtitle="அருள்மிகு கோரக்கர் சித்தர் ஜீவசமாதி பீடம் தினசரி நடைதிறப்பு மற்றும் பூஜை நேரங்கள்." 
      />
      
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* நடைதிறப்பு (Opening Hours) */}
            <Reveal delay={0.1}>
              <div className="glass rounded-[2.5rem] p-8 md:p-12 h-full border border-border/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-3xl font-semibold text-primary mb-10 flex items-center gap-4">
                  {/* <span className="w-12 h-[2px] bg-gold/50 block"></span> */}
                  நடைதிறப்பு
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="p-6 rounded-2xl bg-background/40 border border-border/30 hover:border-gold/30 transition-colors">
                    <h4 className="text-xl font-medium text-gold mb-4">தினசரி</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold/50 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-lg">காலை 5:00 மணி முதல் பகல் 1:00 மணி வரை</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold/50 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-lg">மதியம் 4:00 மணி முதல் இரவு 9:00 மணி வரை</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-background/40 border border-border/30 hover:border-gold/30 transition-colors">
                    <h4 className="text-xl font-medium text-gold mb-4">வியாழன்</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold/50 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-lg">காலை 5:00 மணி முதல் பகல் 1:00 மணி வரை</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold/50 mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-lg">மதியம் 3:00 மணி முதல் இரவு 9:00 மணி வரை</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* பூஜை நேரம் (Pooja Timings) */}
            <Reveal delay={0.2}>
              <div className="glass rounded-[2.5rem] p-8 md:p-12 h-full border border-border/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-bl from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-3xl font-semibold text-primary mb-10 flex items-center gap-4">
                  {/* <span className="w-12 h-[2px] bg-gold/50 block"></span> */}
                  பூஜை நேரம்
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    { label: "காலை", time: "8:00 மணி" },
                    { label: "மதியம்", time: "12:30 மணி" },
                    { label: "இரவு", time: "8:30 மணி" },
                  ].map((pooja, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-6 rounded-2xl bg-background/40 border border-border/30 hover:border-gold/30 transition-colors group/item"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover/item:scale-110 transition-transform">
                          <div className="w-2 h-2 rounded-full bg-gold" />
                        </div>
                        <span className="text-xl font-medium text-primary">{pooja.label}</span>
                      </div>
                      <span className="text-lg text-gold font-medium">{pooja.time}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative element at the bottom */}
                <div className="mt-12 flex justify-center opacity-30">
                  <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">சித்தர் அருள்வாக்கு</span>
              <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-6">கோரக்கர் சித்தர் எந்திர மந்திரம்</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                கோரக்கர் சித்தரின் அருளால் வழங்கப்பட்ட புனித எந்திர மந்திரம் பக்தர்களால் பக்தியுடன் போற்றப்பட்டு வருகிறது.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-[2.5rem] p-4 md:p-8 border border-border/50 relative overflow-hidden group mb-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative rounded-[2rem] overflow-hidden border border-gold/20 p-2 bg-background/50">
                 {/* Decorative corners */}
                 <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/50 rounded-tl-lg"></div>
                 <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold/50 rounded-tr-lg"></div>
                 <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold/50 rounded-bl-lg"></div>
                 <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/50 rounded-br-lg"></div>

                 <img 
                   src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781079348/Manthiram_hn23zh.png"
                   alt="கோரக்கர் சித்தர் எந்திர மந்திரம்" 
                   className="w-full h-auto object-contain rounded-[1.5rem] shadow-2xl relative z-10"
                 />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-[2rem] bg-background/60 border border-border/40 hover:border-gold/30 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-transparent"></div>
                <p className="text-muted-foreground text-left md:text-justify text-base md:text-lg leading-8">
                  கோரக்கர் சித்தரின் எந்திர மந்திரம் ஆன்மீக ஆற்றல், மனஅமைதி மற்றும் இறையருளைப் பெற உதவும் புனித அருள்வழியாக பக்தர்களால் போற்றப்படுகிறது. பக்தியுடனும் நம்பிக்கையுடனும் சித்தரை தியானித்து வழிபடுவதன் மூலம் நேர்மறை எண்ணங்கள், மனவலிமை மற்றும் ஆன்மீக முன்னேற்றம் கிடைக்கும் என நம்பப்படுகிறது.
                </p>
              </div>

              <div className="text-center">
                <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-16 h-16 rounded-full bg-gold/20 blur-xl"></div>
                <p className="text-primary font-semibold text-xl md:text-2xl italic relative z-10">
                  "கோரக்கர் சித்தரின் அருள் என்றும் பக்தர்களை காத்து வழிநடத்துகிறது"
                </p>
                <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-16 h-16 rounded-full bg-gold/20 blur-xl"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
