import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const Services = () => {
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

  const services = [
    {
      title: "Hotel Operations Management",
      description:
        "Comprehensive management of daily hotel operations, ensuring smooth functionality and exceptional guest satisfaction.",
    },
    {
      title: "Strategic Business Development",
      description:
        "Development and implementation of strategic business plans to maximize profitability and market presence.",
    },
    {
      title: "Guest Experience Excellence",
      description:
        "Focus on creating memorable guest experiences through attention to detail and personalized service standards.",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality control measures to maintain the highest standards across all aspects of hotel operations.",
    },
    {
      title: "Staff Training & Development",
      description:
        "Professional development programs ensuring staff excellence and maintaining superior service delivery.",
    },
    {
      title: "Financial Management",
      description:
        "Expert financial oversight including budgeting, cost control, and revenue optimization strategies.",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-navy dark:text-gold">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:border-gold"
            >
              <h3 className="text-xl font-semibold mb-3 text-navy dark:text-gold">
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
