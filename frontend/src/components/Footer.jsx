import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer-section" className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
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
            </div>
            <p className="text-sm text-[#A3A3A3] max-w-sm leading-relaxed">
              Premium aluminium solutions for modern architecture. Crafting spaces with precision and elegance since 1998.
            </p>
            <p className="text-xs text-[#A3A3A3]/50 mt-4">
              A venture by Monalisa Aluminium
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-6 font-['Oswald']">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Products", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-[#A3A3A3] hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-6 font-['Oswald']">
              Services
            </h4>
            <ul className="space-y-3">
              {["Sliding Windows", "Casement Windows", "Aluminium Doors", "Glass Partitions", "Invisible Grills"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-sm text-[#A3A3A3]">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A3A3A3]/50">
            &copy; {new Date().getFullYear()} High Square Aluminium. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            data-testid="scroll-to-top-btn"
            className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300 text-[#A3A3A3]"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
