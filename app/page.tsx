import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OperatorCompat from "./components/OperatorCompat";
import Partner from "./components/Partner";
import ROICalculator from "./components/ROICalculator";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface-2 focus:px-3 focus:py-2 focus:text-sm"
      >
        Asosiy kontentga o&apos;tish
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <OperatorCompat />
        <Partner />
        <ROICalculator />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
