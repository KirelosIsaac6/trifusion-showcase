const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three triangles forming a fusion symbol */}
      <path
        d="M50 15 L35 40 L65 40 Z"
        fill="hsl(var(--gold))"
        className="transition-colors duration-300"
      />
      <path
        d="M30 45 L15 70 L45 70 Z"
        fill="hsl(var(--navy))"
        className="transition-colors duration-300"
      />
      <path
        d="M70 45 L55 70 L85 70 Z"
        fill="hsl(var(--gold-dark))"
        className="transition-colors duration-300"
      />
      {/* Center connecting element */}
      <circle
        cx="50"
        cy="50"
        r="8"
        fill="hsl(var(--gold-light))"
        className="transition-colors duration-300"
      />
    </svg>
  );
};

export default Logo;
