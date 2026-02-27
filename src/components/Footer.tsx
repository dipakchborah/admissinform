import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Abhigyan Academy</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A Senior Secondary School of Science, Arts &amp; Commerce.<br />
              Established in 2004 under Guidance Education Society.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#posters" className="hover:text-accent transition-colors">Admission</a></li>
              <li><a href="#register" className="hover:text-accent transition-colors">Register</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:7002569495" className="hover:text-accent transition-colors">7002569495</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@abhigyanacademy.co.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Na Ali, Near Law College, Jorhat, Assam</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Abhigyan Academy — A Senior Secondary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
