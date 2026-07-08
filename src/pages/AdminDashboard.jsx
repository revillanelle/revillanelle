import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'

export default function AdminDashboard() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    setLoading(true)
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('post_date', { ascending: false })
    if (error) setError(error.message)
    else setPosts(data)
    setLoading(false)
  }

  async function handleDelete(post) {
    if (!confirm(`"${post.title}" yazısını silmek istediğine emin misin? Bu geri alınamaz.`)) return
    const { error } = await supabase.from('posts').delete().eq('id', post.id)
    if (error) {
      alert('Silinemedi: ' + error.message)
      return
    }
    setPosts((prev) => prev.filter((p) => p.id !== post.id))
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif text-2xl md:text-3xl">Blog Yönetimi</h1>
        <button onClick={handleLogout} className="text-sm text-muted hover:text-skyline">
          Çıkış yap
        </button>
      </div>

      <Link to="/admin/new" className="btn-solid inline-block mb-10">
        + Yeni Yazı
      </Link>

      {loading && <p className="text-muted text-sm">Yükleniyor...</p>}
      {error && <p className="text-rose text-sm">{error}</p>}

      <ul className="divide-y divide-line">
        {posts.map((post) => (
          <li key={post.id} className="py-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted mb-1">{post.post_date} · {post.read_time}</p>
              <p className="font-serif text-lg">{post.title}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0 text-sm">
              <Link to={`/admin/edit/${post.id}`} className="btn-outline px-4 py-1.5">
                Düzenle
              </Link>
              <button
                onClick={() => handleDelete(post)}
                className="text-rose hover:opacity-70 px-2"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      {!loading && posts.length === 0 && (
        <p className="text-muted text-sm">Henüz yazı yok. "Yeni Yazı" ile ekleyebilirsin.</p>
      )}
    </main>
  )
}
