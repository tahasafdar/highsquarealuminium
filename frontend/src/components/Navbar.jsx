import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3" data-testid="nav-logo">
          <div className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 bg-[#D4AF37] rotate-0" />
          </div>
          <div className="leading-none">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-white font-['Oswald']">
              High Square
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
              Aluminium
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase text-[#A3A3A3] hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-get-quote-btn"
            className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300 px-6 py-2.5 text-xs tracking-[0.2em] uppercase"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-lg border-t border-white/5"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-[#A3A3A3] hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="border border-[#D4AF37] text-[#D4AF37] text-center py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
