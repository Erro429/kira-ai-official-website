-- Create the blog_posts table if it doesn't exist
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
-- ...
  author_id UUID REFERENCES auth.users(id)
);

-- Enable nullable author_id for seed data
ALTER TABLE blog_posts ALTER COLUMN author_id DROP NOT NULL;

-- Turn on Row Level Security (RLS) recommended for production
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Enable read access for all users" ON blog_posts FOR SELECT USING (true);

-- Create policies to allow authenticated users to insert/update (for admin)
-- Note: 'authenticated' role includes logged-in users. Refine if you have specific admin roles.
CREATE POLICY "Enable insert for authenticated users" ON blog_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON blog_posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users" ON blog_posts FOR DELETE USING (auth.role() = 'authenticated');

-- Ensure columns exist (for existing tables)
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS excerpt TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS featured_image_url TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS youtube_video_url TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS category TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'draft';
-- Seed Data (using ON CONFLICT DO NOTHING to avoid duplicates)
INSERT INTO blog_posts (title, slug, excerpt, content, category, status, featured_image_url, created_at)
VALUES
(
  'Can You Buy Land with Bad Credit? Yes, You Can.',
  'can-you-buy-land-with-bad-credit',
  'I’ve been selling undeveloped land in Florida long enough to know that credit scores don’t tell me what I actually need to know about someone. They tell me what happened in the past, maybe.',
  '<h2>The Myth of Credit Scores in Land Ownership</h2><p>I’ve been selling undeveloped land in Florida long enough to know that credit scores don’t tell me what I actually need to know about someone. They tell me what happened in the past, maybe. But they don''t tell me about your ambition, your work ethic, or your commitment to building a legacy.</p><p>Banks look at numbers on a screen. We look at people who want to own a piece of America. That''s why we offer owner financing with no credit checks. If you have the down payment and the monthly commitment, you can own land. It''s that simple.</p><h3>Why We Don''t Check Credit</h3><ul><li><strong>Land is collateral:</strong> If you stop paying, we get the land back. The risk is managed by the asset itself, not your FICO score.</li><li><strong>Opportunity for all:</strong> We believe everyone deserves a shot at ownership, regardless of past financial hiccups.</li><li><strong>Direct relationship:</strong> We are the bank. We make the rules. And our rule is: can you pay today?</li></ul><p>Don''t let a three-digit number stand between you and your freedom.</p>',
  'Land Investing',
  'published',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  '2026-02-09T10:00:00Z'
),
(
  'The Asset Class That Never Goes to Zero',
  'the-asset-class-that-never-goes-to-zero',
  'The Game Nobody Tells You About. Here’s what I’ve learned selling undeveloped land in Florida for years now: Your financial advisor makes money when your money moves. Land makes money when it sits still.',
  '<h2>The Game Nobody Tells You About</h2><p>Here’s what I’ve learned selling undeveloped land in Florida for years now: Your financial advisor makes money when your money moves. Land makes money when it sits still.</p><p>Stocks can go to zero. Crypto can vanish overnight. Companies go bankrupt. But land? Land is the only asset that they aren''t making any more of.</p><h3>Defensibility of Land</h3><p>Raw land is a tangible asset. You can walk on it. You can build on it. You can pass it down to your children. It doesn''t require maintenance like a rental property. It doesn''t require you to watch charts all day.</p><p>In a world of digital volatility, physical ownership is the ultimate hedge.</p>',
  'Wealth Building',
  'published',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  '2026-02-07T14:30:00Z'
),
(
  'The Strategic Retreat: What Serious Preppers Know',
  'the-strategic-retreat-what-serious-preppers-know',
  'It’s not just about acreage; it’s about water, defensibility, and sustainability. When the average person looks at land, they see a view. When a survivalist looks at land, they see a lifeline.',
  '<h2>More Than Just Dirt</h2><p>It’s not just about acreage; it’s about water, defensibility, and sustainability. When the average person looks at land, they see a view. When a survivalist looks at land, they see a lifeline.</p><p>Putnam County offers a unique strategic advantage. Located between major cities but far enough away to avoid the chaos. Access to natural water sources. Fertile soil. It is the perfect location for a bug-out property or a homestead.</p><h3>Key Factors for a Strategic Retreat</h3><ol><li><strong>Water Access:</strong> Can you drill a well? Is there surface water?</li><li><strong>Distance from Population Centers:</strong> The "Golden Hour" rule applies to medical care, but the "Golden Distance" applies to safety.</li><li><strong>Community:</strong> Like-minded neighbors who value privacy and self-reliance.</li></ol>',
  'Survival',
  'published',
  'https://images.unsplash.com/photo-1533596238283-e29f60f8d9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  '2026-01-31T09:15:00Z'
),
(
  'Digital Title: The Future of Land Ownership',
  'digital-title-future-land-ownership',
  'Blockchain technology is revolutionizing how we record and transfer property rights. Secure, immutable, and faster than traditional county recording.',
  '<p>We are at the forefront of digital real estate. By leveraging secure digital signatures and blockchain-backed recording, we ensure your ownership is indisputable.</p>',
  'Technology',
  'published',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  '2026-01-25T11:00:00Z'
)
ON CONFLICT (slug) DO UPDATE SET 
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  excerpt = EXCLUDED.excerpt,
  featured_image_url = EXCLUDED.featured_image_url,
  category = EXCLUDED.category,
  status = EXCLUDED.status;

-- Create the waiting_list table
CREATE TABLE IF NOT EXISTS waiting_list (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  usage_plan TEXT,
  rename_kira TEXT,
  user_nickname TEXT,
  status TEXT DEFAULT 'pending'
);

-- Turn on Row Level Security (RLS)
ALTER TABLE waiting_list ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public insert (anyone can join waitlist)
CREATE POLICY "Enable insert for public" ON waiting_list FOR INSERT WITH CHECK (true);

-- Create policies to allow only admins/authenticated users to view (optional, specific logic depends on auth)
-- For now, we'll allow authenticated users to view
CREATE POLICY "Enable select for authenticated users" ON waiting_list FOR SELECT USING (auth.role() = 'authenticated');

-- Add subscription_plan column to user_activations if it doesn't exist (inferred table)
CREATE TABLE IF NOT EXISTS user_activations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id), -- or public.users
  street_address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  payment_processor_token TEXT,
  status TEXT,
  subscription_plan TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE user_activations ADD COLUMN IF NOT EXISTS subscription_plan TEXT;
ALTER TABLE user_activations ADD COLUMN IF NOT EXISTS subscription_consent BOOLEAN DEFAULT FALSE;
ALTER TABLE user_activations ADD COLUMN IF NOT EXISTS tos_consent BOOLEAN DEFAULT FALSE;

-- Create the kira_recordings table
CREATE TABLE IF NOT EXISTS kira_recordings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security (RLS)
ALTER TABLE kira_recordings ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Enable read access for all users" ON kira_recordings FOR SELECT USING (true);

-- Create policies to allow authenticated users to insert/update/delete (for admin)
CREATE POLICY "Enable insert for authenticated users" ON kira_recordings FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON kira_recordings FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users" ON kira_recordings FOR DELETE USING (auth.role() = 'authenticated');
