import { discographyShort } from '../data/content.js'
import SubscriptionFooter from '../components/SubscriptionFooter.jsx'

export default function Diskography() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center py-24 md:py-32 px-6 md:px-24"
        style={{ backgroundImage: "url('/images/turntable-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <ul className="relative font-serif text-base md:text-lg space-y-1">
          {discographyShort.map((d) => (
            <li key={d.year} className="text-paper/90">
              {d.year} - {d.text}
            </li>
          ))}
        </ul>
      </section>
      <SubscriptionFooter />
    </main>
  )
}
