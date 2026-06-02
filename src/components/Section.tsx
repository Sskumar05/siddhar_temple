import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 30, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient-gold leading-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
