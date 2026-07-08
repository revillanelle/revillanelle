import { bookingServices } from '../data/content.js'
import SubscriptionFooter from '../components/SubscriptionFooter.jsx'

export default function Bookings() {
  return (
    <main>
      <section
        className="relative bg-cover bg-center py-16 md:py-24 px-6 md:px-16"
        style={{ backgroundImage: "url('/images/ocean-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative flex flex-col md:flex-row justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {bookingServices.map((s) => (
            <div key={s.title} className="w-full md:w-72 bg-black/90">
              <img src={s.image} alt={s.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg mb-3">{s.title}</h3>
                <div className="w-full h-px bg-line mb-6" />
                <button className="btn-solid text-sm px-6 py-2.5">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SubscriptionFooter />
    </main>
  )
}
