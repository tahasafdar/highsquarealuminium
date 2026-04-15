import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const serviceOptions = [
  "Sliding Windows",
  "Casement Windows",
  "Domal Windows",
  "Aluminium Doors",
  "Glass Partitions",
  "Invisible Grills",
  "Custom Solution",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "", location: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="py-24 lg:py-32 bg-[#121212] relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
            Let's Connect
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-['Oswald'] text-white">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-['Oswald'] uppercase tracking-wide text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-1">Phone</p>
                  <p className="text-white">+91 731 XXX XXXX</p>
                  <p className="text-white">+91 7272 XXX XXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 border border-[#D4AF37]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-1">Email</p>
                  <p className="text-white">info@highsquarealuminium.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 border border-[#D4AF37]/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-1">
                    Head Office — Indore
                  </p>
                  <p className="text-[#A3A3A3] text-sm">
                    Monalisa Aluminium, MG Road, Indore, MP 452001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 border border-[#D4AF37]/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] mb-1">
                    Branch — Dewas
                  </p>
                  <p className="text-[#A3A3A3] text-sm">
                    High Square Aluminium, AB Road, Dewas, MP 455001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                data-testid="contact-success"
                className="h-full flex flex-col items-center justify-center text-center p-8 border border-[#D4AF37]/20"
              >
                <CheckCircle className="w-16 h-16 text-[#D4AF37] mb-6" />
                <h3 className="text-2xl font-semibold font-['Oswald'] uppercase text-white mb-3">
                  Thank You
                </h3>
                <p className="text-[#A3A3A3]">
                  We've received your inquiry and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  data-testid="contact-send-another"
                  className="mt-6 text-xs tracking-[0.15em] uppercase text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:opacity-80 transition-opacity"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      data-testid="contact-name-input"
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      data-testid="contact-email-input"
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      data-testid="contact-phone-input"
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-colors"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      data-testid="contact-service-select"
                      className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block">
                    Location
                  </label>
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    data-testid="contact-location-select"
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select location</option>
                    <option value="Indore">Indore (Head Office)</option>
                    <option value="Dewas">Dewas (Branch)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-[#A3A3A3] mb-2 block">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    data-testid="contact-message-input"
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#D4AF37]/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <p data-testid="contact-error" className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit-btn"
                  className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 px-8 py-4 text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={14} />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
