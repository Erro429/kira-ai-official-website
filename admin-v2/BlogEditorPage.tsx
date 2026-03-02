import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Loader2, Save, Eye } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

export function BlogEditorPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(isEditing);

    // Form state
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [featuredImageUrl, setFeaturedImageUrl] = useState('');
    const [youtubeVideoUrl, setYoutubeVideoUrl] = useState('');

    // Fetch post if editing
    useEffect(() => {
        if (!id) return;

        async function fetchPost() {
            const { data, error } = await (supabase
                .from('blog_posts') as any)
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else if (data) {
                setTitle(data.title);
                setSlug(data.slug);
                setCategory(data.category || '');
                setExcerpt(data.excerpt || '');
                setContent(data.content || '');
                setFeaturedImageUrl(data.featured_image_url || '');
                setYoutubeVideoUrl(data.youtube_video_url || '');
            }
            setFetching(false);
        }

        fetchPost();
    }, [id]);

    // Auto-generate slug from title (only in create mode)
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTitle(val);
        if (!isEditing) {
            setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
        }
    };

    const handleSave = async (status: 'draft' | 'published') => {
        if (!title || !content) {
            alert('Title and Content are required');
            return;
        }

        setLoading(true);

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert('You must be logged in');
                setLoading(false);
                return;
            }

            const postData: any = {
                title,
                slug,
                category: category || null,
                excerpt: excerpt || null,
                content,
                featured_image_url: featuredImageUrl || null,
                youtube_video_url: youtubeVideoUrl || null,
                status,
            };

            let error;

            if (isEditing) {
                ({ error } = await (supabase.from('blog_posts') as any)
                    .update(postData)
                    .eq('id', id));
            } else {
                postData.author_id = user.id;
                ({ error } = await (supabase.from('blog_posts') as any)
                    .insert(postData));
            }

            if (error) {
                console.error('Error saving post:', error);
                alert(`Error: ${error.message}`);
            } else {
                navigate('/admin/blog');
            }
        } catch (err: any) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return <div className="ka-spinner"><Loader2 /></div>;
    }

    return (
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            {/* Header */}
            <div className="ka-page-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Link to="/admin/blog" className="ka-btn ka-btn-ghost ka-btn-icon">
                        <ArrowLeft style={{ width: 18, height: 18 }} />
                    </Link>
                    <h1 className="ka-page-title">{isEditing ? 'Edit Post' : 'Write New Post'}</h1>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="ka-btn ka-btn-outline" disabled={loading} onClick={() => handleSave('draft')}>
                        <Save style={{ width: 14, height: 14 }} />
                        Save Draft
                    </button>
                    <button className="ka-btn ka-btn-primary" disabled={loading} onClick={() => handleSave('published')}>
                        {loading ? <Loader2 style={{ width: 14, height: 14, animation: 'ka-spin 1s linear infinite' }} /> : <Eye style={{ width: 14, height: 14 }} />}
                        Publish
                    </button>
                </div>
            </div>

            <div className="ka-editor-layout">
                {/* Left: Content */}
                <div>
                    <div className="ka-form-group">
                        <label className="ka-label" htmlFor="title">Article Title</label>
                        <input
                            id="title"
                            className="ka-input"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="e.g. Understanding the Loneliness Epidemic"
                            style={{ fontSize: 16, fontWeight: 600 }}
                        />
                    </div>

                    <div className="ka-form-group">
                        <label className="ka-label" htmlFor="content">Content (HTML)</label>
                        <textarea
                            id="content"
                            className="ka-textarea"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="<h2>Your heading</h2><p>Write your blog post content here in HTML...</p>"
                            style={{ minHeight: 400, fontFamily: 'monospace', fontSize: 13, lineHeight: 1.6 }}
                        />
                    </div>
                </div>

                {/* Right: Settings */}
                <div>
                    <div className="ka-card">
                        <div className="ka-card-body" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div className="ka-form-group" style={{ margin: 0 }}>
                                <label className="ka-label" htmlFor="featured-image">Cover Image URL</label>
                                <input
                                    id="featured-image"
                                    className="ka-input"
                                    value={featuredImageUrl}
                                    onChange={(e) => setFeaturedImageUrl(e.target.value)}
                                    placeholder="https://images.unsplash.com/..."
                                />
                                {featuredImageUrl && (
                                    <div style={{ marginTop: 8, borderRadius: 6, overflow: 'hidden', border: '1px solid var(--admin-border)' }}>
                                        <img src={featuredImageUrl} alt="Preview" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
                                    </div>
                                )}
                            </div>

                            <div className="ka-form-group" style={{ margin: 0 }}>
                                <label className="ka-label" htmlFor="youtube-url">YouTube Video URL</label>
                                <input
                                    id="youtube-url"
                                    className="ka-input"
                                    value={youtubeVideoUrl}
                                    onChange={(e) => setYoutubeVideoUrl(e.target.value)}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                />
                            </div>

                            <div className="ka-form-group" style={{ margin: 0 }}>
                                <label className="ka-label" htmlFor="slug">Slug</label>
                                <input
                                    id="slug"
                                    className="ka-input"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    placeholder="url-friendly-slug"
                                />
                            </div>

                            <div className="ka-form-group" style={{ margin: 0 }}>
                                <label className="ka-label" htmlFor="category">Category</label>
                                <input
                                    id="category"
                                    className="ka-input"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder="e.g. Mental Health"
                                />
                            </div>

                            <div className="ka-form-group" style={{ margin: 0 }}>
                                <label className="ka-label" htmlFor="excerpt">Excerpt</label>
                                <textarea
                                    id="excerpt"
                                    className="ka-textarea"
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    placeholder="Short summary for listing page..."
                                    style={{ minHeight: 80 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
