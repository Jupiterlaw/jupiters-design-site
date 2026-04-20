import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductGallery } from "@/components/ProductGallery";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <ProductGallery />
      <ProjectShowcase />
      <ContactForm />
      <Footer />
      <WhatsAppButton variant="floating" label="WhatsApp us" />
    </main>
  );
}
