import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Language, translations } from "@/translations";

interface HeroProps {
  language: Language;
}

const Hero = ({ language }: HeroProps) => {
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
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted to-background"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">{t.hero.title}</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-white hover-lift shadow-[var(--shadow-elegant)] font-semibold"
          >
            <a href="#contact">{t.hero.cta1}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-white hover-lift font-semibold"
          >
            <a href="#services">{t.hero.cta2}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
