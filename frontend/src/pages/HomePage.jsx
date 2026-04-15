import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrandStatement from "../components/BrandStatement";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProductShowcase from "../components/ProductShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectsGallery from "../components/ProjectsGallery";
import CustomSolutions from "../components/CustomSolutions";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <HeroSection />
      <BrandStatement />
      <AboutSection />
      <ServicesSection />
      <ProductShowcase />
      <WhyChooseUs />
      <ProjectsGallery />
      <CustomSolutions />
      <ContactSection />
      <Footer />
    </div>
  );
}
