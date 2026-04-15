import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, DoorOpen, Grid3x3, Fence, PanelTop, Shield } from "lucide-react";

const services = [
  {
    icon: PanelTop,
    title: "Sliding Windows",
    desc: "Smooth-glide aluminium sliding windows for effortless ventilation and modern aesthetics.",
  },
  {
    icon: Grid3x3,
    title: "Casement Windows",
    desc: "Premium hinged windows offering maximum airflow and unobstructed views.",
  },
  {
    icon: Layers,
    title: "Domal Windows",
    desc: "Curved architectural windows adding distinctive character to any structure.",
  },
  {
    icon: DoorOpen,
    title: "Aluminium Doors",
    desc: "Durable, sleek doors engineered for security and refined style.",
  },
  {
    icon: Fence,
    title: "Glass Partitions",
    desc: "Frameless and framed solutions creating elegant spatial divisions.",
  },
  {
    icon: Shield,
    title: "Invisible Grills",
    desc: "Safety without compromise — near-invisible grills for balconies and windows.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      data-testid="services-section"
      className="py-24 lg:py-32 bg-[#121212] relative noise-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`service-card-${i}`}
              className="bg-[#1A1A1A] border border-white/5 hover:border-[#D4AF37]/30 p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 group gold-glow tilt-card"
            >
              <service.icon
                className="w-8 h-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold font-['Oswald'] uppercase tracking-wide text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A3A3A3]">
                {service.desc}
              </p>
              <div className="w-8 h-px bg-[#D4AF37]/40 mt-6 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
