import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Posters from "@/components/Posters";
import About from "@/components/About";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Posters />
      <About />
      <RegistrationForm />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
