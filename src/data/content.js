export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Diskography', path: '/diskografi' },
  { label: 'Bookings', path: '/services' },
  { label: 'Blog', path: '/blog' },
]

export const social = [
  { name: 'Twitter 1', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'Twitter 2', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Spotify', href: 'https://spotify.com', icon: 'spotify' },
  { name: 'Apple Music', href: 'https://music.apple.com', icon: 'music' },
]

export const biography = [
  'Pertevniyal High School',
  'Istanbul University - English Language and Literature',
  'Classical Turkish Music Instructions - Burcu Karadağ',
  'Music Production&Sound Engineering - PointBlank Music School',
  'Bahasa Indonesia B2 - Consulate General of Indonesia',
  'Hang Glider Pilot - Turkish Air Association',
  'Neyzen (Ney Flute Player)',
  'ICC Sailing License - Windy Sailing Academy',
  'Wellness Instructor (Level 1) - The Ministry of Youth and Sport',
  'Alpinist Mountaineer Course- İDOSK',
  'Cmas 1 Star Scuba Diver',
  'EASA PPL (Private Pilot Licence) Holder',
  'ITF Taekwon-Do / Red-Black Belt',
  'ISKA KICKBOXING - 1. Dan',
  'ISKA KICKBOXING - 2. Degree Coach',
]

// The one highlighted (rose-colored) line matches the live site.
export const discographyFull = [
  { year: '2013', text: "I've just started (EP)", highlight: false },
  { year: '2014', text: 'Son dans (Single) - (The Last Dance)', highlight: false },
  { year: '2017', text: 'Kaderin Tanrıçaları (Single) - (The Three Wyrd Sisters)', highlight: true },
  { year: '2019', text: 'Karşılıklı Yardımlaşma (Album) - (Mutual Aid)', highlight: false },
  { year: '2019/2022', text: 'Progressive Musings 1,2,3,4,5', highlight: false },
  { year: '2022', text: 'A Vain Attempt, But Still', highlight: false },
]

// Shorter list shown on the Diskography page hero overlay.
export const discographyShort = [
  { year: '2013', text: "I've just started (EP)" },
  { year: '2014', text: 'Son dans (Single)' },
  { year: '2017', text: 'Kaderin Tanrıçaları (Single)' },
  { year: '2019', text: 'Karşılıklı Yardımlaşma (Album)' },
]

// Services grid as shown on the Home page.
export const homeServices = [
  { title: 'Localization', tagline: 'Software and Game Localization', image: '/images/rain-street.jpg' },
  { title: 'Soundtracks', tagline: 'Original music for your projects', image: '/images/halloween-house.avif' },
  { title: 'Transcreation', tagline: 'Cultural Adaptation', image: '/images/deer.avif' },
]

// Services grid as shown on the Bookings page (bookable items).
export const bookingServices = [
  { title: 'Localization', image: '/images/localization-plant.avif' },
  { title: 'Film / Dizi Müziği', image: '/images/halloween-house.avif' },
  { title: 'Transcreation', image: '/images/deer.avif' },
]

export const contact = {
  city: 'istanbul',
  email: 'arkadascuci@gmail.com',
  phone: '+905512295927',
}

export const singleRelease = {
  artist: 'Rüzgâr Hiç',
  title: 'As the bombs drop over',
  cover: '/images/tea-field.avif',
  duration: '04:01',
  tracks: [
    { number: 1, title: 'As the bombs drop over' },
    { number: 2, title: 'Nisf-ül Leyl' },
  ],
}

// NOTE: blog post content now lives in Supabase (see supabase-schema.sql and
// the /admin dashboard), not in this file. The old static blogPosts array has
// been removed — Blog.jsx and BlogPost.jsx fetch live from the `posts` table.
