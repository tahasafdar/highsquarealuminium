import { motion } from "framer-motion";

const HERO_IMG = "https://images.pexels.com/photos/36760994/pexels-photo-36760994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1920";

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Modern architecture"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-6"
          >
            High Square Aluminium by Monalisa Aluminium
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white font-['Oswald'] max-w-4xl"
          >
            Crafting
            <br />
            Premium
            <br />
            <span className="gold-text">Aluminium</span>
            <br />
            Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base md:text-lg text-[#A3A3A3] mt-8 max-w-md leading-relaxed"
          >
            Precision. Durability. Design Excellence since 1998.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#products"
              data-testid="hero-explore-btn"
              className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 px-8 py-4 text-xs tracking-[0.2em] uppercase"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              data-testid="hero-quote-btn"
              className="border border-white/20 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 text-xs tracking-[0.2em] uppercase"
            >
              Get Quote
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#A3A3A3] [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
