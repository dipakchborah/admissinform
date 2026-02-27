import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import poster1 from "@/assets/posters/poster1.jpg";
import poster2 from "@/assets/posters/poster2.jpg";
import poster3 from "@/assets/posters/poster3.jpg";

const posters = [
  { src: poster1, alt: "Admissions Open 2026-27" },
  { src: poster2, alt: "Academic Excellence" },
  { src: poster3, alt: "JEE NEET CUET Coaching" },
];

const Posters = () => {
  return (
    <section id="posters" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Admission Brochure 2026–27
        </h2>
        {/* <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Download or view our latest admission brochures for complete details.
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posters.map((poster, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden shadow-card bg-card transition-all duration-300 hover:shadow-elevated hover:scale-[1.03]"
            >
              <img
                src={poster.src}
                alt={poster.alt}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Download Full Brochure
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-10 text-base shadow-elevated gap-3"
          >
            <a href="/brochure/abhigayn_academy_brochure.pdf" download="Abhigyan-Academy-Brochure-2026.pdf">
              <Download className="w-5 h-5" />
              Download Full Brochure
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Get the complete admission brochure with all details
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Posters;
