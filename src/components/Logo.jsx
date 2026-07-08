// Hand-recreated line-art version of the antler + heart mark used across the site.
export default function Logo({ className = 'w-16 h-16' }) {
  return (
    <svg
      viewBox="0 0 100 110"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* left antler */}
      <path d="M50 55 C48 45 44 42 38 40 C34 38.5 30 39 27 36 M38 40 C36 34 37 30 33 26 M27 36 C24 33 24 29 20 27" />
      <path d="M50 55 C47 48 46 40 41 34 C38 30 37 25 33 22" />
      {/* right antler */}
      <path d="M50 55 C52 45 56 42 62 40 C66 38.5 70 39 73 36 M62 40 C64 34 63 30 67 26 M73 36 C76 33 76 29 80 27" />
      <path d="M50 55 C53 48 54 40 59 34 C62 30 63 25 67 22" />
      {/* neck/body */}
      <path d="M50 55 C46 62 46 68 50 74 C54 68 54 62 50 55 Z" />
      {/* heart */}
      <path d="M50 90 C42 82 34 84 34 91 C34 97 42 101 50 108 C58 101 66 97 66 91 C66 84 58 82 50 90 Z" />
    </svg>
  )
}
