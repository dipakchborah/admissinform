import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:7002569495"
      aria-label="Call Now"
       className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
                 bg-accent text-accent-foreground flex items-center justify-center 
                 shadow-elevated hover:scale-110 transition-transform duration-300 
                 animate-float lg:hidden"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
