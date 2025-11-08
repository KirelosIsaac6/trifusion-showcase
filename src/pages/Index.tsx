import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Management from "@/components/Management";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Management />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
