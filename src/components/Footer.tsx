const Footer = () => {
  return (
    <footer className="bg-navy dark:bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gold text-sm">
            © {new Date().getFullYear()} TriFusion Management GmbH. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-gold-dark text-xs">
          HRB 23694 | Commercial Register of Mönchengladbach
        </div>
      </div>
    </footer>
  );
};

export default Footer;
