import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BrandStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      data-testid="brand-statement-section"
      className="py-32 lg:py-44 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] font-['Oswald'] text-white">
            Built with{" "}
            <span className="gold-text">Precision</span>.
            <br />
            Designed for{" "}
            <span className="gold-text">Modern Living</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="gold-line w-40 mx-auto mt-12"
        />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-[#D4AF37]/20" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-[#D4AF37]/20" />
    </section>
  );
}
