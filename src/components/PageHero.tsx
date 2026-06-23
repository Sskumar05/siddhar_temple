import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, className, children }: { eyebrow?: string; title: string; subtitle?: string; className?: string; children?: ReactNode }) {
  return (
    <section className={`relative pt-25 pb-20 overflow-hidden bg-gradient-hero grain ${className || ""}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-ember/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {eyebrow && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-widest uppercase text-gold mb-6">
            <span className="w-1 h-1 rounded-full bg-gold" /> {eyebrow}
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          <span className="text-primary">{title}</span>
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
