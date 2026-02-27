import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="gradient-hero min-h-[90vh] flex items-center justify-center pt-16 px-4"
    >
      <div className="container mx-auto text-center py-16 md:py-24">
        <p className="inline-block bg-accent/20 text-accent font-semibold text-sm md:text-base px-5 py-2 rounded-full mb-6 animate-fade-in-up">
          Learn, Lead and Be a Legend
        </p>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Admissions Open 2026–27
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground font-semibold mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          To be <span className="text-accent font-bold">Successful</span> in Exams and in Life, Come to{" "}
          <span className="text-accent font-bold">Abhigyan Academy</span>
        </p>

        <p
          className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.18s" }}
        >
          A Senior Secondary School of Science, Arts &amp; Commerce &nbsp;|&nbsp; Integrated Coaching for JEE / NEET / CUET
        </p>

        <p
          className="text-sm md:text-base text-primary-foreground/60 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Established in 2004 &nbsp;|&nbsp; Under Guidance Education Society
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-8 text-base shadow-elevated"
          >
            <a href="#register">Register Now</a>
          </Button>
          {/* <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold rounded-full px-8 text-base"
          >
            <a href="tel:7002569495">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
