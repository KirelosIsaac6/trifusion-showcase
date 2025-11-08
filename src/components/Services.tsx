import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Language, translations } from "@/translations";

interface ServicesProps {
  language: Language;
}

const Services = ({ language }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const t = translations[language];

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-foreground">{t.services.title} </span>
          <span className="text-gradient">{t.services.highlight}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base sm:text-lg">
          {t.services.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-lift hover:border-gold transition-all duration-300 bg-card shadow-[var(--shadow-elegant)]"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
