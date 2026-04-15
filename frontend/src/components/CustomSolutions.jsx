import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Ruler, Paintbrush } from "lucide-react";

const solutions = [
  {
    icon: Ruler,
    title: "Custom Aluminium Profiles",
    desc: "Bespoke aluminium extrusions designed to your exact specifications for unique architectural requirements.",
  },
  {
    icon: Palette,
    title: "Architectural Solutions",
    desc: "Complete aluminium facade systems, curtain walls, and structural glazing for modern commercial buildings.",
  },
  {
    icon: Paintbrush,
    title: "Powder Coating",
    desc: "Premium powder-coated finishes in any RAL color — durable, weather-resistant, and visually stunning.",
  },
];

export default function CustomSolutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      data-testid="custom-solutions-section"
      className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#D4AF37]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#D4AF37]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            Tailored Excellence
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white">
            Custom Solutions
          </h2>
          <p className="text-base text-[#A3A3A3] mt-6 max-w-lg mx-auto">
            Beyond standard offerings, we specialize in bespoke aluminium solutions that bring your architectural vision to reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              data-testid={`custom-solution-${i}`}
              className="bg-[#121212] border border-[#D4AF37]/10 p-10 text-center group hover:border-[#D4AF37]/40 transition-all duration-500 gold-glow"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-[#D4AF37]/30 rotate-45 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <sol.icon className="w-7 h-7 text-[#D4AF37] -rotate-45" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold font-['Oswald'] uppercase tracking-wider text-white mb-3">
                {sol.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A3A3A3]">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            data-testid="custom-solutions-cta"
            className="inline-block border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 px-10 py-4 text-xs tracking-[0.2em] uppercase"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
