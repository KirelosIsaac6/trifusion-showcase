import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
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

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto text-center">
        <img
          src={logo}
          alt="TriFusion Management GmbH Logo"
          className="w-48 h-48 mx-auto mb-8 object-contain"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy dark:text-foreground mb-4">
          TriFusion Management GmbH
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Excellence in Hotel Management and Hospitality Services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-white transition-all duration-300"
          >
            <a href="#about">Learn More</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
