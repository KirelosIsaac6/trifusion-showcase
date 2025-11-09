import Logo from "./Logo";
import { Language, translations } from "@/translations";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gold-light py-12 border-t border-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Logo className="w-16 h-16" />
          
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-gold">
              {t.footer.company}
            </h3>
            <p className="text-base font-medium">
              Excellence in Hotel Management
            </p>
          </div>

          <div className="text-center space-y-1 text-sm">
            <p>Am Flutgraben 53, 41515 Grevenbroich, Germany</p>
          </div>

          <div className="text-center text-sm">
            <p>HRB 23694 | District Court of Mönchengladbach</p>
          </div>

          <div className="pt-4 border-t border-gold/20 w-full max-w-md">
            <p className="text-center text-sm opacity-80">
              © {currentYear} {t.footer.company}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
