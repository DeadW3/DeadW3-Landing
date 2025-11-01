interface StealYourFaceProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function StealYourFace({
  className = "",
  primaryColor = "#c92d25",
  secondaryColor = "#253387"
}: StealYourFaceProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Left half of skull (blue) */}
      <path
        d="M 50,50 m -35,0 a 35,35 0 0,1 35,-35 L 50,50 Z"
        fill={secondaryColor}
      />

      {/* Right half of skull (red) */}
      <path
        d="M 50,50 m 0,-35 a 35,35 0 0,1 35,35 L 50,50 Z"
        fill={primaryColor}
      />

      {/* Lightning bolt divider */}
      <path
        d="M 50,15 L 50,50 L 47,50 L 50,85 L 50,50 L 53,50 Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />

      {/* Skull outline */}
      <ellipse cx="50" cy="50" rx="35" ry="35" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* Left eye socket */}
      <ellipse cx="38" cy="42" rx="6" ry="8" fill="black" />

      {/* Right eye socket */}
      <ellipse cx="62" cy="42" rx="6" ry="8" fill="black" />

      {/* Nose cavity */}
      <path
        d="M 47,52 L 50,58 L 53,52 Z"
        fill="black"
      />

      {/* Teeth - top */}
      <g fill="black" stroke="currentColor" strokeWidth="0.5">
        <rect x="42" y="65" width="4" height="6" rx="0.5" />
        <rect x="48" y="65" width="4" height="6" rx="0.5" />
        <rect x="54" y="65" width="4" height="6" rx="0.5" />
      </g>

      {/* Jaw line */}
      <path
        d="M 20,55 Q 50,80 80,55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
