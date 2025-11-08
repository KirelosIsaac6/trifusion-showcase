import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-navy dark:text-gold">
          About Us
        </h2>
        <Card className="p-8 sm:p-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              TriFusion Management GmbH is a distinguished hospitality management company 
              headquartered in Grevenbroich, Germany. We specialize in the comprehensive 
              operation and management of hotels, delivering exceptional guest experiences 
              through professional service and strategic business practices.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to elevate hospitality standards by combining traditional 
              values with innovative management approaches. We believe in creating spaces 
              where comfort meets excellence, ensuring every guest receives unparalleled 
              service and attention to detail.
            </p>
            <p className="text-lg leading-relaxed">
              As a registered company with the Commercial Register of Mönchengladbach 
              (HRB 23694), we operate with full transparency and professional integrity, 
              guided by experienced management committed to the highest standards in 
              hospitality excellence.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
