import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NosotrosSection from "./components/NosotrosSection";
import ProductosSection from "./components/ProductosSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <HeroSection />
        <NosotrosSection />
        <ProductosSection />
        <ContactoSection />
      </main>
      <Footer />
    </>
  );
}
