import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Language, translations } from "@/translations";

interface ContactProps {
  language: Language;
}

const Contact = ({ language }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/kirelosisaac679@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission - TriFusion Management",
        }),
      });

      if (response.ok) {
        toast({
          title: t.contact.form.success,
          description: "",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gradient">
          {t.contact.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base sm:text-lg">
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 sm:p-8 shadow-[var(--shadow-elegant)] hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border-border focus:border-gold transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-border focus:border-gold transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="border-border focus:border-gold transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-white hover-lift shadow-[var(--shadow-elegant)] font-semibold"
              >
                {isSubmitting ? "Sending..." : t.contact.form.submit}
              </Button>
            </form>
          </Card>

          <Card className="p-6 sm:p-8 flex flex-col justify-center shadow-[var(--shadow-elegant)] hover-lift">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {t.footer.company}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.contact.info.address}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {t.contact.info.register}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
