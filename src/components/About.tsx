import {
  GraduationCap,
  Users,
  Languages,
  BookOpen,
  Monitor,
  Library,
  Home,
  Award,
  Wifi,
} from "lucide-react";

const features = [
  { icon: Award, title: "Established in 2004", desc: "20+ years of academic excellence" },
  { icon: BookOpen, title: "Experienced Faculty", desc: "Expert teachers with proven results" },
  { icon: Languages, title: "English & Assamese Medium", desc: "Dual medium of instruction available" },
  { icon: GraduationCap, title: "Integrated JEE / NEET Coaching", desc: "Board + competitive exam preparation" },
  { icon: Monitor, title: "Smart Digital Classrooms", desc: "Technology-driven learning environment" },
  { icon: Library, title: "Library Facility", desc: "Vast collection of books & resources" },
  { icon: Home, title: "Hostel Facility", desc: "Safe & comfortable residential campus" },
  //{ icon: Users, title: "35 Students per Class", desc: "Personalized attention for every student" },
  { icon: Wifi, title: "Free WiFi Campus", desc: "24x7 high-speed internet access" }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              About the Institute
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Abhigyan Academy</strong>, established in 2004 under the Guidance Education Society, is a Senior Secondary School of Science, Arts and Commerce.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to the regular academic classes  of 6 to 12 ,the Institution provides integrated coaching for JEE & NEET  under the same roof with Library Facilities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With limited students per class and a focus on holistic development, we aim to nurture smart, sensitive and successful individuals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-1">
              Affiliated to ASSEB -II with code 174118 and to ASSEB-I with code 18170325507.UDISE  - 13H0972.
            </p>
            <p className="text-muted-foreground leading-relaxed ">
                For more details visit:&nbsp;
                <a
                  href="https://www.abhigyanacademy.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  www.abhigyanacademy.co.in
                </a>
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
