const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer navy circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="hsl(var(--navy))"
        className="transition-colors duration-300"
      />
      {/* Gold ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="4"
        className="transition-colors duration-300"
      />
      {/* T letter - vertical part */}
      <rect
        x="45"
        y="30"
        width="10"
        height="40"
        fill="hsl(var(--gold))"
        className="transition-colors duration-300"
      />
      {/* T letter - horizontal top part */}
      <rect
        x="32"
        y="30"
        width="36"
        height="8"
        fill="hsl(var(--gold))"
        className="transition-colors duration-300"
      />
    </svg>
  );
};

export default Logo;
