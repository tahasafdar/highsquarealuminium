import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1655019545925-ddad6147d575?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbmlnaHQlMjBkYXJrJTIwbHV4dXJ5fGVufDB8fHx8MTc3NjIzMzU0Mnww&ixlib=rb-4.1.0&q=85",
    title: "Luxe Residences",
    category: "Residential",
    height: "h-80",
  },
  {
    image: "https://images.unsplash.com/photo-1644489263595-6f5730ce3144?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhbHVtaW5pdW0lMjB3aW5kb3dzJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2MjMzNTMxfDA&ixlib=rb-4.1.0&q=85",
    title: "Skyline Tower",
    category: "Commercial",
    height: "h-96",
  },
  {
    image: "https://images.unsplash.com/photo-1621176302222-01cb014875c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhbHVtaW5pdW0lMjB3aW5kb3dzJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2MjMzNTMxfDA&ixlib=rb-4.1.0&q=85",
    title: "Vista Apartments",
    category: "Residential",
    height: "h-72",
  },
  {
    image: "https://images.unsplash.com/photo-1743051883652-7390ec9337f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3IlMjBnbGFzcyUyMGRvb3IlMjBzbGlkaW5nfGVufDB8fHx8MTc3NjIzMzUzN3ww&ixlib=rb-4.1.0&q=85",
    title: "The Grand Suite",
    category: "Luxury",
    height: "h-96",
  },
  {
    image: "https://images.unsplash.com/photo-1689540872073-56f6ebe202cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbmlnaHQlMjBkYXJrJTIwbHV4dXJ5fGVufDB8fHx8MTc3NjIzMzU0Mnww&ixlib=rb-4.1.0&q=85",
    title: "Apex Corporate",
    category: "Commercial",
    height: "h-80",
  },
  {
    image: "https://images.pexels.com/photos/9538574/pexels-photo-9538574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Urban Living",
    category: "Residential",
    height: "h-72",
  },
];

export default function ProjectsGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="projects"
      ref={ref}
      data-testid="projects-section"
      className="py-24 lg:py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`project-card-${i}`}
              className={`relative overflow-hidden group cursor-pointer border border-white/5 ${project.height}`}
              onClick={() => setLightbox(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold font-['Oswald'] uppercase text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          data-testid="project-lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors"
            data-testid="lightbox-close-btn"
          >
            <X size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4">
              <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                {lightbox.category}
              </p>
              <h3 className="text-2xl font-bold font-['Oswald'] uppercase text-white mt-1">
                {lightbox.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
