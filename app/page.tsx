import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NosotrosSection from "./components/NosotrosSection";
import ProductosSection from "./components/ProductosSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";
import SocialSection from "./components/SocialSection";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <HeroSection />
        <NosotrosSection />
        <ProductosSection />
        <ContactoSection />
        <SocialSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
