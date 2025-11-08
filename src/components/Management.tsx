import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const Management = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const directors = [
    {
      name: "Masiulla Harari",
      title: "Managing Director",
      location: "Grevenbroich",
    },
    {
      name: "Sayed Tahir Taghadossi",
      title: "Managing Director",
      location: "Grevenbroich",
    },
    {
      name: "Mina Isaac Roshdi Youssef",
      title: "Managing Director",
      location: "Düsseldorf",
    },
  ];

  return (
    <section
      id="management"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-navy dark:text-gold">
          Management Team
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our leadership team brings extensive experience and expertise in hospitality 
          management, ensuring strategic vision and operational excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directors.map((director, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-gold"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy to-navy-light dark:from-gold dark:to-gold-light mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-navy dark:text-gold">
                {director.name}
              </h3>
              <p className="text-muted-foreground font-medium mb-1">
                {director.title}
              </p>
              <p className="text-sm text-muted-foreground">{director.location}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
