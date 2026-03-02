import re

def escape_sql(text):
    if text is None:
        return 'NULL'
    return text.replace("'", "''")

def extract_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract Title
    title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
    title = title_match.group(1).strip() if title_match else "Untitled Post"
    if '| Kira AI' in title:
        title = title.split('|')[0].strip()

    # Extract Excerpt
    excerpt_match = re.search(r'<meta name="description" content="(.*?)">', html, re.IGNORECASE)
    excerpt = excerpt_match.group(1).strip() if excerpt_match else ""

    # Extract Content (from <article> to </article>)
    content_match = re.search(r'<article>(.*?)</article>', html, re.IGNORECASE | re.DOTALL)
    if content_match:
        content = content_match.group(1).strip()
        # Remove the header if it's there as it's often redundant in themed blogs
        content = re.sub(r'<header.*?</header>', '', content, flags=re.IGNORECASE | re.DOTALL).strip()
    else:
        content = html

    # Clean up whitespace in content
    content = re.sub(r'\n\s+', '\n', content)

    return title, excerpt, content

file_path = r'c:\Users\hustl\Downloads\kira-ai-official-website (10)\AIBestFriendBlogPost.html'
title, excerpt, content = extract_content(file_path)
slug = 'you-want-an-ai-best-friend'

sql = f"""
DO $$
DECLARE
    v_user_id INTEGER;
    v_category_id INTEGER;
BEGIN
    -- 1. Get the admin user ID from public.users
    BEGIN
        SELECT user_id INTO v_user_id FROM public.users WHERE email = 'admin@kira.ai' LIMIT 1;
    EXCEPTION WHEN OTHERS THEN
        v_user_id := NULL;
    END;


    -- 2. Insert the Blog Post
    INSERT INTO public.blog_posts (
        title,
        slug,
        excerpt,
        content,
        category,
        status,
        featured_image_url,
        published_at,
        author_id
    )
    VALUES (
        '{escape_sql(title)}',
        '{slug}',
        '{escape_sql(excerpt)}',
        '{escape_sql(content)}',
        'Connection',
        'published',
        'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1950&auto=format&fit=crop', -- Verified Premium AI/Tech Image
        NOW(),
        v_user_id
    )
    ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content = EXCLUDED.content,
        category = EXCLUDED.category,
        featured_image_url = EXCLUDED.featured_image_url,
        status = EXCLUDED.status,
        author_id = COALESCE(v_user_id, blog_posts.author_id);

    RAISE NOTICE 'Blog post "%" inserted/updated successfully.', '{escape_sql(title)}';
END $$;
"""

with open('output_sql.sql', 'w', encoding='utf-8') as f:
    f.write(sql)

print("SQL written to output_sql.sql")

