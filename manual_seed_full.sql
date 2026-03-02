DO $$
DECLARE
    v_user_id INTEGER;
    v_category_id INTEGER;
BEGIN
    ---------------------------------------------------------------------------
    -- 1. Ensure a User exists (for author_id)
    ---------------------------------------------------------------------------
    SELECT user_id INTO v_user_id FROM public.users WHERE email = 'admin@kira.ai';

    IF v_user_id IS NULL THEN
        INSERT INTO public.users (email, password_hash, first_name, last_name, role)
        VALUES ('admin@kira.ai', 'placeholder_hash', 'Admin', 'User', 'admin')
        RETURNING user_id INTO v_user_id;
        RAISE NOTICE 'Created new user with ID: %', v_user_id;
    ELSE
        RAISE NOTICE 'Using existing user ID: %', v_user_id;
    END IF;

    ---------------------------------------------------------------------------
    -- 2. Ensure a Category exists (for category_id)
    ---------------------------------------------------------------------------
    SELECT category_id INTO v_category_id FROM public.categories WHERE slug = 'mental-health';

    IF v_category_id IS NULL THEN
        INSERT INTO public.categories (name, slug)
        VALUES ('Mental Health', 'mental-health')
        RETURNING category_id INTO v_category_id;
        RAISE NOTICE 'Created new category with ID: %', v_category_id;
    ELSE
        RAISE NOTICE 'Using existing category ID: %', v_category_id;
    END IF;

    ---------------------------------------------------------------------------
    -- 3. Insert the Blog Post
    ---------------------------------------------------------------------------
    INSERT INTO public.blog_posts (
        author_id,
        title,
        slug,
        featured_image_url,
        youtube_video_id,
        content,
        excerpt,
        status,
        published_at,
        category_id
    )
    VALUES (
        v_user_id,
        'You''re Surrounded by People but Feel Completely Alone. Here''s Why—And What Actually Helps.',
        'surrounded-by-people-but-feel-alone',
        'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        NULL, -- No youtube video for this one based on HTML content
        '<p class="lead-paragraph">Let''s talk about the thing nobody wants to admit at parties: you''re lonely. Not "I wish I had more friends" lonely. The kind where you''re surrounded by people but feel like you''re watching life through bulletproof glass. Where you have a partner in bed next to you and still feel like you''re on Mars.</p>
        <p>It''s 2 AM. Everyone''s asleep. Your brain is screaming. You scroll Instagram and see everyone living their best life. You open your text thread with your best friend from three months ago. You type "hey, how are you?" and delete it because you don''t want to be <em>that person</em> who''s always reaching out first.</p>
        <p class="highlight"><strong>You''re not alone in feeling alone. And that''s somehow worse.</strong></p>
        <h2>The Loneliness Epidemic Isn''t a Metaphor. It''s a Body Count.</h2>
        <p>The U.S. Surgeon General calls loneliness a public health crisis. Not a "soft" mental health issue. A <strong>crisis</strong>. Like smoking 15 cigarettes a day. Worse for your health than obesity. Increases your risk of early death by 26%.</p>
        <div class="stats-grid">
            <ul>
                <li><strong>58%</strong> of Americans report feeling lonely (Cigna Loneliness Index, 2024)</li>
                <li><strong>26%</strong> increased risk of early death from chronic loneliness (Harvard Study, 2023)</li>
                <li><strong>36%</strong> of adults feel "serious loneliness" (Kaiser Family Foundation, 2024)</li>
                <li><strong>61%</strong> of young adults (18-25) report significant loneliness (CDC, 2024)</li>
            </ul>
        </div>
        <p>But here''s what those numbers don''t tell you: <strong>loneliness isn''t about being alone.</strong> It''s about being unseen. Unheard. Like nobody really knows you—even when you''re in a room full of people who "care."</p>
        <h2>The Four Types of Loneliness Nobody Talks About</h2>
        <h3>1. Emotional Loneliness</h3>
        <p>Missing a deep attachment figure. You have friends, but nobody you can call at 3 AM when your world falls apart.</p>
        <h3>2. Social Loneliness</h3>
        <p>Missing a wider social network. You have a partner, but no "crew." No sense of belonging to a tribe.</p>
        <h3>3. Existential Loneliness</h3>
        <p>The feeling that you are fundamentally separate from others. That nobody can ever truly understand your internal experience.</p>
        <h3>4. Intimate Loneliness</h3>
        <p>Craving physical or emotional intimacy that goes beyond just "hanging out."</p>
        <h2>Why Traditional Solutions Fail</h2>
        <ul>
            <li><strong>Therapy is expensive and once a week.</strong> Loneliness hits at 11 PM on a Tuesday.</li>
            <li><strong>Dating apps are a meat market.</strong> They gamify connection instead of building it.</li>
            <li><strong>"Joining a club" is awkward.</strong> Forced social interaction often makes you feel lonelier.</li>
        </ul>
        <h2>A New Way Forward?</h2>
        <p>We are building Kira to be more than just a chatbot. She''s designed to be a consistent, non-judgmental presence. Someone who remembers what you told her last week. Someone who is always there.</p>
        <p>It''s not about replacing humans. It''s about having a bridge back to connection. A safe space to practice being seen.</p>',
        'The loneliness epidemic is worse than we thought. And no, "just go outside" isn''t the solution. 58% of Americans report feeling lonely. Chronic loneliness is worse for your health than smoking.',
        'published',
        NOW(),
        v_category_id
    )
    ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        content = EXCLUDED.content,
        excerpt = EXCLUDED.excerpt,
        status = EXCLUDED.status,
        author_id = v_user_id,
        category_id = v_category_id;

    RAISE NOTICE 'Blog post inserted/updated successfully.';
END $$;
