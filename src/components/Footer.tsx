import Logo from "./Logo";
import { Language, translations } from "@/translations";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Logo className="w-12 h-12" />
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {t.footer.company}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
