export function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-24 h-6 ${className}`}
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12h20M80 12h20M50 2v20M42 12h16M35 8l7 4-7 4M65 8l-7 4 7 4"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="12" r="3" fill="currentColor" />
      <circle cx="35" cy="12" r="1.5" fill="currentColor" />
      <circle cx="65" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}
