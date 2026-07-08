import { useState } from 'react'
import {
  biography,
  discographyFull,
  homeServices,
  contact,
  singleRelease,
} from '../data/content.js'
import SubscriptionFooter from '../components/SubscriptionFooter.jsx'
import { PlayIcon, ShareIcon, ChevronLeft, ChevronRight } from '../components/Icons.jsx'

export default function Home() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const galleryImages = ['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg']

  return (
    <main>
      {/* HERO: photo + biography/discography sidebar */}
      <section className="grid md:grid-cols-2">
        <img
          src="/images/hero-ney-player.jpg"
          alt="Rüzgâr Hiç playing the ney flute"
          className="w-full h-[420px] md:h-[620px] object-cover"
        />
        <div className="bg-ink px-6 py-10 md:px-12 md:py-16">
          <h2 className="font-display text-xl md:text-2xl mb-8">
            <span className="text-dim">Arkadaş Cuci</span>
            <span className="text-muted"> / Azâd Adır / </span>
            <span className="text-dim">Rüzgâr Hiç</span>
          </h2>

          <h3 className="font-display text-lg mb-4">Biography</h3>
          <ul className="space-y-1 text-sm text-paper/90 font-body font-light mb-10">
            {biography.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h3 className="font-display text-lg mb-4">Discography</h3>
          <ul className="space-y-1 text-sm font-serif tracking-wide">
            {discographyFull.map((d) => (
              <li key={d.year} className={d.highlight ? 'text-rose' : 'text-muted'}>
                {d.year} - {d.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="relative">
        <img src="/images/video-thumb.jpg" alt="Rüzgâr Hiç studio session" className="w-full h-[420px] md:h-[600px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-24 bg-black/10">
          <h2 className="font-display text-2xl md:text-3xl mb-4">Rüzgâr Hiç</h2>
          <button className="flex items-center gap-3 text-sm tracking-wide underline underline-offset-4">
            <span className="w-8 h-8 rounded-full border border-paper flex items-center justify-center">
              <PlayIcon width="14" height="14" />
            </span>
            Play Video
          </button>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="relative bg-black">
        <div className="grid grid-cols-3">
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Studio view ${i + 1}`} className="w-full h-[180px] md:h-[280px] object-cover" />
          ))}
        </div>
        <button
          aria-label="Next images"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-paper"
          onClick={() => setGalleryIndex((i) => (i + 1) % 3)}
        >
          <ChevronRight width="24" height="24" />
        </button>
      </section>

      {/* MUSIC PLAYER WIDGET */}
      <section className="bg-black py-16 px-6 md:px-24">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <img src={singleRelease.cover} alt={singleRelease.title} className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <p className="text-sm text-muted">{singleRelease.artist}</p>
              <p className="font-display text-lg">{singleRelease.title}</p>
              <p className="text-sm text-muted">{singleRelease.title}</p>
            </div>
            <button className="btn-outline text-xs" aria-label="Share">
              <ShareIcon />
            </button>
            <a href="#" className="btn-outline text-xs whitespace-nowrap">Get Single</a>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted mb-2">
            <span>00:00</span>
            <div className="flex-1 h-px bg-line relative">
              <span className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-paper" />
            </div>
            <span>{singleRelease.duration}</span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-10">
            <button aria-label="Previous track"><ChevronLeft /></button>
            <button
              aria-label="Play"
              className="w-10 h-10 rounded-full border border-paper flex items-center justify-center"
            >
              <PlayIcon width="16" height="16" />
            </button>
            <button aria-label="Next track"><ChevronRight /></button>
          </div>

          <ul className="divide-y divide-line">
            {singleRelease.tracks.map((t) => (
              <li key={t.number} className="flex items-center justify-between py-4 text-sm">
                <span>{t.number} &nbsp; {t.title}</span>
                <a href="#" className="btn-outline text-xs">Get Track</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES OFFERED */}
      <section className="bg-black py-16 px-6 text-center border-t border-line">
        <h2 className="font-display text-xl md:text-2xl tracking-wide mb-16">
          RÜZGÂR HİÇ - SERVICES OFFERED
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {homeServices.map((s) => (
            <div key={s.title}>
              <img src={s.image} alt={s.title} className="w-full h-56 object-cover mb-6" />
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted font-body font-light">{s.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS + FORM */}
      <section className="bg-ink2 py-16 px-6 md:px-16 border-t border-line">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl mb-8">CONTACTS</h2>
            <div className="space-y-4 text-sm">
              <p>{contact.city}</p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-skyline">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={`tel:${contact.phone}`} className="hover:text-skyline">
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <SubscriptionFooter />
    </main>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <input required placeholder="Ad *" className="field-line" />
      <input required type="email" placeholder="E-posta *" className="field-line" />
      <input placeholder="Telefon" className="field-line" />
      <input placeholder="Adres" className="field-line" />
      <input placeholder="Konu" className="field-line sm:col-span-2" />
      <textarea placeholder="Mesaj" rows="3" className="field-line sm:col-span-2 resize-none" />
      <button type="submit" className="btn-solid sm:col-span-2 justify-self-center px-10">
        Gönder
      </button>
      {sent && <p className="sm:col-span-2 text-center text-skyline text-sm">Teşekkürler, mesajınız alındı!</p>}
    </form>
  )
}
