import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Windows",
    image: "https://images.unsplash.com/photo-1657978837711-7257a8357877?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhbHVtaW5pdW0lMjB3aW5kb3dzJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2MjMzNTMxfDA&ixlib=rb-4.1.0&q=85",
    desc: "Sliding, casement, and domal windows crafted with precision aluminium profiles for lasting performance.",
  },
  {
    name: "Doors",
    image: "https://images.unsplash.com/photo-1773579089983-50348cc9abd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBnbGFzcyUyMGRvb3IlMjBzbGlkaW5nfGVufDB8fHx8MTc3NjIzMzUzN3ww&ixlib=rb-4.1.0&q=85",
    desc: "Premium aluminium doors designed for durability, security, and architectural elegance.",
  },
  {
    name: "Partitions",
    image: "https://images.unsplash.com/photo-1770993151375-0dee97eda931?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBnbGFzcyUyMHBhcnRpdGlvbnxlbnwwfHx8fDE3NzYyMzMzMjF8MA&ixlib=rb-4.1.0&q=85",
    desc: "Glass partitions and aluminium frameworks creating sophisticated spatial solutions.",
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % categories.length);
  const prev = () => setActive((p) => (p - 1 + categories.length) % categories.length);

  return (
    <section
      id="products"
      ref={ref}
      data-testid="product-showcase-section"
      className="py-24 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
              Our Collection
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white">
              Product Showcase
            </h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              onClick={prev}
              data-testid="product-prev-btn"
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              data-testid="product-next-btn"
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Product display */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] overflow-hidden relative"
          >
            <img
              src={categories[active].image}
              alt={categories[active].name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
          </motion.div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              key={`info-${active}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-7xl lg:text-8xl font-black font-['Oswald'] gold-text opacity-30">
                0{active + 1}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold font-['Oswald'] uppercase tracking-tight text-white -mt-4">
                {categories[active].name}
              </h3>
              <p className="text-base leading-relaxed text-[#A3A3A3] mt-6 max-w-md">
                {categories[active].desc}
              </p>
              <a
                href="#contact"
                data-testid="product-inquire-btn"
                className="inline-block mt-8 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase"
              >
                Inquire Now
              </a>
            </motion.div>

            {/* Category tabs */}
            <div className="flex gap-4 mt-12">
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => setActive(i)}
                  data-testid={`product-tab-${cat.name.toLowerCase()}`}
                  className={`text-xs tracking-[0.15em] uppercase pb-2 border-b-2 transition-all duration-300 ${
                    i === active
                      ? "text-[#D4AF37] border-[#D4AF37]"
                      : "text-[#A3A3A3] border-transparent hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden gap-3 mt-8 justify-center">
          <button
            onClick={prev}
            className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
