import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CareerSection from "@/components/career-section";
import PortfolioSection from "@/components/portfolio-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CareerSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
