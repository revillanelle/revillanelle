import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, social } from '../data/content.js'
import { SOCIAL_ICONS, HamburgerIcon, CloseIcon } from './Icons.jsx'

export default function Header() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black">
      {/* top bar: logo + language switcher */}
      <div className="flex flex-col items-center pt-8 pb-6 px-6">
        <Link to="/" aria-label="Rüzgâr Hiç home">
          <img src="/images/logo.png" alt="Rüzgâr Hiç" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
        </Link>

        <div className="mt-6 flex text-sm">
          <button
            onClick={() => setLang('en')}
            className={`flex items-center gap-2 px-4 py-2 border border-line ${
              lang === 'en' ? 'bg-ink2' : 'bg-transparent'
            }`}
          >
            English <span aria-hidden>🇬🇧</span>
          </button>
          <button
            onClick={() => setLang('tr')}
            className={`flex items-center gap-2 px-4 py-2 border border-line border-l-0 ${
              lang === 'tr' ? 'bg-ink2' : 'bg-transparent'
            }`}
          >
            Turkish <span aria-hidden>🇹🇷</span>
          </button>
        </div>
      </div>

      {/* nav row: links (left) + social icons (right) + mobile hamburger */}
      <div className="flex items-center justify-between px-6 md:px-10 py-4 border-t border-b border-line">
        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-skyline transition-colors ${isActive ? 'text-skyline' : 'text-paper'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 text-paper ml-auto">
          {social.map((s, i) => {
            const Icon = SOCIAL_ICONS[s.icon]
            return (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="hover:text-skyline transition-colors">
                <Icon />
              </a>
            )
          })}
        </div>

        <button
          className="md:hidden text-paper ml-auto"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* mobile slide-over menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-paper">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-10 text-xl">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-paper hover:text-skyline"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex justify-center gap-6 mt-12 text-paper">
            {social.map((s, i) => {
              const Icon = SOCIAL_ICONS[s.icon]
              return (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
