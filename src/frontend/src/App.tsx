import Layout from "@/components/Layout";
import ContactSection from "@/pages/ContactSection";
import HeroSection from "@/pages/HeroSection";
import ProcessSection from "@/pages/ProcessSection";
import ServicesSection from "@/pages/ServicesSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </Layout>
  );
}
