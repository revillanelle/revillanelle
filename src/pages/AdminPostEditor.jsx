import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'

const emptyForm = {
  title: '',
  slug: '',
  post_date: new Date().toISOString().slice(0, 10),
  read_time: '1 min read',
  excerpt: '',
  body: '',
  cover_image_url: '',
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function AdminPostEditor() {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState(emptyForm)
  const [slugTouched, setSlugTouched] = useState(false)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isEditing) return
    supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else {
          setForm({
            title: data.title,
            slug: data.slug,
            post_date: data.post_date,
            read_time: data.read_time ?? '1 min read',
            excerpt: data.excerpt ?? '',
            body: data.body ?? '',
            cover_image_url: data.cover_image_url ?? '',
          })
          setSlugTouched(true)
        }
        setLoading(false)
      })
  }, [id, isEditing])

  function updateField(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'title' && !slugTouched) {
        next.slug = slugify(value)
      }
      return next
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = { ...form }

    const { error } = isEditing
      ? await supabase.from('posts').update(payload).eq('id', id)
      : await supabase.from('posts').insert(payload)

    setSaving(false)
    if (error) {
      setError(error.message)
      return
    }
    navigate('/admin')
  }

  if (loading) return <p className="text-center py-24 text-muted text-sm">Yükleniyor...</p>

  return (
    <main className="max-w-2xl mx-auto px-6 py-14">
      <h1 className="font-serif text-2xl md:text-3xl mb-10">
        {isEditing ? 'Yazıyı Düzenle' : 'Yeni Yazı'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 text-sm">
        <div>
          <label className="block text-xs text-muted mb-1">Başlık</label>
          <input
            required
            value={form.title}
            onChange={(e) => updateField('title', e.target.value)}
            className="field-line"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-1">
            Slug (URL) — /blog/{form.slug || '...'}
          </label>
          <input
            required
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true)
              updateField('slug', slugify(e.target.value))
            }}
            className="field-line"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs text-muted mb-1">Tarih</label>
            <input
              type="date"
              required
              value={form.post_date}
              onChange={(e) => updateField('post_date', e.target.value)}
              className="field-line"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">Okuma süresi</label>
            <input
              value={form.read_time}
              onChange={(e) => updateField('read_time', e.target.value)}
              className="field-line"
              placeholder="1 min read"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-muted mb-1">Kapak görseli (URL, opsiyonel)</label>
          <input
            value={form.cover_image_url}
            onChange={(e) => updateField('cover_image_url', e.target.value)}
            className="field-line"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-1">Özet</label>
          <textarea
            rows="2"
            value={form.excerpt}
            onChange={(e) => updateField('excerpt', e.target.value)}
            className="field-line resize-none"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-1">
            Yazının tamamı (paragraflar arasında boş satır bırak)
          </label>
          <textarea
            rows="12"
            required
            value={form.body}
            onChange={(e) => updateField('body', e.target.value)}
            className="field-line resize-y"
          />
        </div>

        {error && <p className="text-rose">{error}</p>}

        <div className="flex items-center gap-4 pt-4">
          <button type="submit" disabled={saving} className="btn-solid">
            {saving ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
          <button type="button" onClick={() => navigate('/admin')} className="btn-outline">
            Vazgeç
          </button>
        </div>
      </form>
    </main>
  )
}
