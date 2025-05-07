import { Toaster } from "sonner";
import ChatWidget from "./components/ChatWidget";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation bar - sticky at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        {/* Hero section - introduces the product */}
        <HeroSection />

        {/* How It Works section - explains the process */}
        <HowItWorks />

        {/* Why Choose Us section - highlights benefits */}
        <WhyChooseUs />

        {/* Testimonials section - social proof */}
        <Testimonials />

        {/* Contact form - lead generation */}
        <ContactForm />
      </main>

      {/* Footer - site navigation and info */}
      <Footer />

      {/* Chat widget - floating UI element */}
      <ChatWidget />
      <Toaster />
    </div>
  );
};

export default App
