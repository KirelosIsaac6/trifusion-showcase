import logoImage from "@/assets/logo.png";

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <img 
      src={logoImage} 
      alt="TriFusion Management GmbH Logo" 
      className={className}
    />
  );
};

export default Logo;
