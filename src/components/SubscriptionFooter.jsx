import { useState } from 'react'

export default function SubscriptionFooter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="bg-black py-16 px-6 text-center border-t border-line">
      <h3 className="font-serif text-2xl md:text-3xl mb-6">Abonelik Formu</h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="bg-transparent border border-line px-4 py-3 text-sm w-full"
        />
        <button type="submit" className="btn-solid w-full">
          Gönder
        </button>
        {sent && <p className="text-sm text-skyline">Teşekkürler!</p>}
      </form>
    </section>
  )
}
