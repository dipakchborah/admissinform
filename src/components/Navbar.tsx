import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/abhigyan-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Admission", href: "#posters" },
  { label: "Contact", href: "#register" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Abhigyan Academy" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-5">
            <a href="tel:7002569495">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button> */}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in-up">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full w-full mt-2">
              <a href="tel:7002569495">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
