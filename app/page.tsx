import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import NosotrosSection from "./components/NosotrosSection";
import ProductosSection from "./components/ProductosSection";
import BebidasSection from "./components/BebidasSection";
import CremasSection from "./components/CremasSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <MarqueeSection />
        <HeroSection />
        <NosotrosSection />
        <ProductosSection />
        <BebidasSection />
        <CremasSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
