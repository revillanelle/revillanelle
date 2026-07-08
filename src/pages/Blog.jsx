import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'
import SubscriptionFooter from '../components/SubscriptionFooter.jsx'
import { SearchIcon, EyeIcon, CommentIcon, HeartIcon } from '../components/Icons.jsx'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    supabase
      .from('posts')
      .select('*')
      .order('post_date', { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message)
        else setPosts(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className="wave-bg">
      <section className="px-6 md:px-16 pt-10 pb-4 flex items-center justify-between">
        <span className="text-sm text-muted">All Posts</span>
        <SearchIcon />
      </section>

      <section className="px-6 md:px-16 pb-16 max-w-3xl mx-auto">
        {loading && <p className="text-muted text-sm text-center py-16">Yükleniyor...</p>}
        {error && (
          <p className="text-rose text-sm text-center py-16">
            Yazılar yüklenemedi: {error}. Supabase bağlantını (.env) kontrol et.
          </p>
        )}
        {!loading && !error && posts.length === 0 && (
          <p className="text-muted text-sm text-center py-16">Henüz yazı yok.</p>
        )}

        {posts.map((post) => (
          <article key={post.id} className="border-b border-line py-10">
            {post.cover_image_url && (
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover mb-6"
                />
              </Link>
            )}
            <p className="text-xs text-muted mb-3">
              Rüzgâr Hiç &nbsp;•&nbsp; {post.post_date} &nbsp;•&nbsp; {post.read_time}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-paper/80">
              <Link to={`/blog/${post.slug}`} className="hover:text-paper">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted font-body font-light mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-6 text-xs text-muted">
              <span className="flex items-center gap-1"><EyeIcon /> {post.views ?? 0} views</span>
              <span className="flex items-center gap-1"><CommentIcon /> {post.comments ?? 0} comments</span>
              <span className="flex items-center gap-1 ml-auto">
                {post.likes > 0 && post.likes} <HeartIcon filled={post.likes > 0} />
              </span>
            </div>
          </article>
        ))}
      </section>

      <SubscriptionFooter />
    </main>
  )
}
