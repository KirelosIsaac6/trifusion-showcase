import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Language, translations } from "@/translations";

interface ManagementProps {
  language: Language;
}

const Management = ({ language }: ManagementProps) => {
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

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section
      id="management"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gradient">
          {t.management.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          {t.management.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.management.directors.map((director, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-lift hover:border-gold transition-all duration-300 bg-card shadow-[var(--shadow-elegant)]"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy to-navy-light mx-auto mb-4 flex items-center justify-center text-gold text-2xl font-bold shadow-md">
                {getInitials(director.name)}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
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
