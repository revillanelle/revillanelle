// Lightweight inline SVG icon set — no external icon library dependency.

export function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M23.44 4.83c-.8.37-1.66.62-2.56.73a4.48 4.48 0 0 0 1.96-2.47 8.94 8.94 0 0 1-2.83 1.08 4.47 4.47 0 0 0-7.63 4.08A12.7 12.7 0 0 1 3.07 3.6a4.47 4.47 0 0 0 1.38 5.96 4.44 4.44 0 0 1-2.02-.56v.06a4.47 4.47 0 0 0 3.58 4.38 4.5 4.5 0 0 1-2.01.08 4.47 4.47 0 0 0 4.17 3.1A8.97 8.97 0 0 1 1 18.58a12.66 12.66 0 0 0 6.86 2.01c8.23 0 12.73-6.82 12.73-12.73 0-.19 0-.39-.01-.58a9.1 9.1 0 0 0 2.24-2.33l.62.08z" />
    </svg>
  )
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SpotifyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1.03.26c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.58-1.04 8.5-.6 11.65 1.33.36.22.47.7.26 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.36-1.32 9.78-.68 13.5 1.6.44.27.58.85.31 1.29Zm.13-3.4C15.98 8.4 10.1 8.2 6.7 9.24a1.13 1.13 0 1 1-.66-2.16c3.9-1.18 10.4-.95 14.5 1.48a1.13 1.13 0 0 1-1.15 1.94Z" />
    </svg>
  )
}

export function MusicNoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M20 3v11.55A4 4 0 1 0 22 18V6h-4v9.55A4 4 0 1 0 20 19V6.83L9 9.35v9.2A4 4 0 1 0 11 22V6L20 3Z" />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  )
}

export function HeartIcon({ filled, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? '#c3897f' : 'none'}
      stroke={filled ? '#c3897f' : 'currentColor'}
      strokeWidth="1.6"
      width="16"
      height="16"
      {...props}
    >
      <path d="M12 20.5s-7.5-4.6-10-9.3C.5 8 2 4.5 5.6 4c2-.3 3.8.7 6.4 3.4C14.6 4.7 16.4 3.7 18.4 4c3.6.5 5.1 4 3.6 7.2-2.5 4.7-10 9.3-10 9.3Z" />
    </svg>
  )
}

export function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15" {...props}>
      <path d="M1 12s4-7.5 11-7.5S23 12 23 12s-4 7.5-11 7.5S1 12 1 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function CommentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="15" height="15" {...props}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.9-.94L3 20l1.02-4.16A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  )
}

export function ChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18" {...props}>
      <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18" {...props}>
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ShareIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16" {...props}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8l7.6-4.2M8.2 13.2l7.6 4.2" />
    </svg>
  )
}

export function HamburgerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22" {...props}>
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  spotify: SpotifyIcon,
  music: MusicNoteIcon,
}
