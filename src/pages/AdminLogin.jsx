import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function AdminLogin() {
  const { session, loading } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (!loading && session) {
    const dest = location.state?.from ?? '/admin'
    return <Navigate to={dest} replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setSubmitting(false)
    if (error) setError(error.message)
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h1 className="font-serif text-2xl mb-8 text-center">Admin Girişi</h1>
        <div className="space-y-5">
          <input
            type="email"
            required
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field-line"
          />
          <input
            type="password"
            required
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field-line"
          />
        </div>
        {error && <p className="text-sm text-rose mt-4">{error}</p>}
        <button type="submit" disabled={submitting} className="btn-solid w-full mt-8">
          {submitting ? 'Giriş yapılıyor...' : 'Giriş yap'}
        </button>
      </form>
    </main>
  )
}
