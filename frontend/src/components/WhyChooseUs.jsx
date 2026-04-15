import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Wrench, Settings, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Premium Materials",
    desc: "We use only the finest aluminium alloys and glass, ensuring longevity and performance.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    desc: "Over two decades of hands-on expertise in precision aluminium fabrication.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    desc: "Every project is unique — we engineer bespoke solutions tailored to your vision.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Efficient production processes ensure your projects stay on schedule.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "From consultation to installation, we prioritize your satisfaction at every step.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      data-testid="why-choose-section"
      className="py-24 lg:py-32 bg-[#121212] relative"
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            The High Square Difference
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`why-card-${i}`}
              className="text-center p-6 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold font-['Oswald'] uppercase tracking-wider text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#A3A3A3]">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
