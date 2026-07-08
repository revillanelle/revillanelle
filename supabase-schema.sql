-- Run this once in your Supabase project's SQL Editor
-- (Dashboard → SQL Editor → New query → paste → Run)

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  post_date date not null default current_date,
  read_time text default '1 min read',
  excerpt text default '',
  body text default '',              -- paragraphs separated by a blank line
  cover_image_url text,
  views int default 0,
  comments int default 0,
  likes int default 0,
  created_at timestamptz default now()
);

alter table posts enable row level security;

-- Anyone (including logged-out visitors) can read posts.
create policy "Public can read posts"
  on posts for select
  using (true);

-- Only a logged-in user can create/edit/delete posts.
-- Since sign-ups are NOT exposed anywhere in the site UI, the only way
-- to become "authenticated" is the one admin account you create yourself
-- in Dashboard → Authentication → Users → Add user. Keep that login private.
create policy "Authenticated users can insert posts"
  on posts for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update posts"
  on posts for update
  to authenticated
  using (true);

create policy "Authenticated users can delete posts"
  on posts for delete
  to authenticated
  using (true);

-- Optional: seed the 5 posts from the original site so the blog isn't
-- empty on first load. Body text is left as a placeholder — edit each
-- post from /admin once you're logged in and paste your real text in.
insert into posts (slug, title, post_date, read_time, excerpt, body, views, comments, likes) values
  ('hicklikten-gelen', 'Hiçlikten Gelen', '2024-06-05', '1 min read',
   'A reflection on disillusionment, static expectations, and choosing stillness over the noise of the world.',
   '[Buraya orijinal yazı/şarkı sözü metnini kendin ekle]', 12, 0, 0),
  ('bir-ergenlik-fantezisi', 'Bir Ergenlik Fantezisi - Rüzgâr Hiç', '2023-03-02', '2 min read',
   'On indifference, refusing inherited paths, and stepping into disguise rather than conforming.',
   '[Buraya orijinal yazı/şarkı sözü metnini kendin ekle]', 38, 0, 1),
  ('i-wish-everyone-had-the-ability', 'I wish everyone had the ability to improvise in music, and feel the soul of it', '2022-04-19', '1 min read',
   'A short note on small sensory joys — spice tea, skateboarding by the sea, and the camaraderie of martial arts.',
   '[Buraya orijinal yazı/şarkı sözü metnini kendin ekle]', 11, 0, 2),
  ('nisf-ul-leyl', 'Nisf-ül Leyl¹', '2022-01-31', '1 min read',
   'A poem built around midnight imagery — moonlight, beauty, and the passage of night.',
   '[Buraya orijinal yazı/şarkı sözü metnini kendin ekle]', 16, 0, 0),
  ('kaderin-tanricalari', 'Kaderin Tanrıçaları¹ - Rüzgâr Hiç', '2022-01-31', '3 min read',
   'Mythic imagery around fate, birth and rebirth, drawing on the figure of the three fate goddesses.',
   '[Buraya orijinal yazı/şarkı sözü metnini kendin ekle]', 15, 0, 0)
on conflict (slug) do nothing;
