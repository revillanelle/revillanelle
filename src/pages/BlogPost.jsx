import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient.js'
import SubscriptionFooter from '../components/SubscriptionFooter.jsx'
import { ShareIcon, EyeIcon, CommentIcon, HeartIcon } from '../components/Icons.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) setError(error.message)
        setPost(data)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return <p className="text-center py-24 text-muted text-sm">Yükleniyor...</p>
  }

  if (error) {
    return (
      <main className="px-6 py-24 text-center">
        <p className="mb-6 text-rose text-sm">Yazı yüklenemedi: {error}</p>
        <Link to="/blog" className="btn-outline">Back to Blog</Link>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="px-6 py-24 text-center">
        <p className="mb-6">Post not found.</p>
        <Link to="/blog" className="btn-outline">Back to Blog</Link>
      </main>
    )
  }

  const paragraphs = (post.body ?? '').split(/\n\s*\n/).filter(Boolean)

  return (
    <main className="wave-bg">
      <article className="max-w-2xl mx-auto px-6 md:px-0 py-14">
        <p className="text-xs text-muted mb-2">
          Rüzgâr Hiç &nbsp;•&nbsp; {post.post_date} &nbsp;•&nbsp; {post.read_time}
        </p>
        <div className="flex items-start justify-between mb-8">
          <h1 className="font-serif text-3xl md:text-4xl">{post.title}</h1>
          <ShareIcon className="mt-2 shrink-0" />
        </div>

        {post.cover_image_url && (
          <img src={post.cover_image_url} alt={post.title} className="w-full h-64 md:h-96 object-cover mb-8" />
        )}

        <div className="space-y-4 text-paper/80 font-body font-light text-base leading-relaxed whitespace-pre-line">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="flex items-center gap-6 text-xs text-muted mt-12 pt-6 border-t border-line">
          <span className="flex items-center gap-1"><EyeIcon /> {post.views ?? 0} views</span>
          <span className="flex items-center gap-1"><CommentIcon /> {post.comments ?? 0} comments</span>
          <span className="flex items-center gap-1 ml-auto">
            {post.likes > 0 && post.likes} <HeartIcon filled={post.likes > 0} />
          </span>
        </div>

        <div className="mt-12">
          <Link to="/blog" className="text-sm underline underline-offset-4 hover:text-skyline">
            ← All Posts
          </Link>
        </div>
      </article>

      <SubscriptionFooter />
    </main>
  )
}
