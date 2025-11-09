import { useEffect, useRef } from "react";
import { Language, translations } from "@/translations";

interface AboutProps {
  language: Language;
}

const About = ({ language }: AboutProps) => {
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
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="text-foreground">{t.about.title} </span>
          <span className="text-gradient">{t.about.highlight}</span>
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-base sm:text-lg">{t.about.description1}</p>
          <p className="text-base sm:text-lg">{t.about.description2}</p>
          <p className="text-base sm:text-lg">{t.about.description3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
