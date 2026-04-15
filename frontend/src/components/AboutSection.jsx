import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1765766601432-edcdc9ae017d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBnbGFzcyUyMGRvb3IlMjBzbGlkaW5nfGVufDB8fHx8MTc3NjIzMzUzN3ww&ixlib=rb-4.1.0&q=85";

const stats = [
  { number: "25+", label: "Years of Excellence" },
  { number: "1000+", label: "Projects Completed" },
  { number: "2", label: "Locations" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="py-24 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="Modern interior with glass walls"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-[#D4AF37]/40" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white mb-8">
              Redefining
              <br />
              Aluminium Since <span className="gold-text">1998</span>
            </h2>
            <p className="text-base leading-relaxed text-[#A3A3A3] mb-6">
              High Square Aluminium, a venture by Monalisa Aluminium, has been at the forefront of premium aluminium solutions for over two decades. Based in Indore with operations extending to Dewas, we bring architectural visions to life through precision engineering and exceptional craftsmanship.
            </p>
            <p className="text-base leading-relaxed text-[#A3A3A3] mb-12">
              Our commitment to quality materials and innovative design has made us the trusted choice for architects, builders, and homeowners seeking lasting elegance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="border-t border-[#D4AF37]/30 pt-4"
                >
                  <span className="text-3xl lg:text-4xl font-bold font-['Oswald'] gold-text">
                    {stat.number}
                  </span>
                  <p className="text-xs tracking-[0.1em] uppercase text-[#A3A3A3] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
