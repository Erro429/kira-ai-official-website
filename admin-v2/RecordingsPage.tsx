import { useState, useEffect } from 'react';
import { Loader2, Plus, Trash2, Play, Pause, Music, Link as LinkIcon, Upload } from 'lucide-react';
import { supabase } from '../src/lib/supabase';

interface Recording {
    id: string;
    title: string;
    description: string;
    audio_url: string;
    created_at: string;
}

export function RecordingsPage() {
    const [recordings, setRecordings] = useState<Recording[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const [file, setFile] = useState<File | null>(null);

    // Audio Playback State
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        fetchRecordings();
    }, []);

    const fetchRecordings = async () => {
        try {
            const { data, error } = await supabase
                .from('kira_recordings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setRecordings(data || []);
        } catch (error) {
            console.error('Error fetching recordings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            // Reset URL input if file is selected to avoid confusion, or keep it? 
            // We'll prioritize file if present.
        }
    };

    const handleSave = async () => {
        if (!title || (!audioUrl && !file)) {
            alert('Title and Audio (File or URL) are required');
            return;
        }

        setUploading(true);

        try {
            let finalAudioUrl = audioUrl;

            // Handle File Upload if file is selected
            if (file) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${Math.random()}.${fileExt}`;
                const filePath = `${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('audio')
                    .upload(filePath, file);

                if (uploadError) {
                    // Fallback: If bucket doesn't exist, we can't upload. 
                    // Tell user to put file in public/audio and use URL.
                    console.error('Upload error:', uploadError);
                    alert(`Upload failed: ${uploadError.message}. Ensure 'audio' bucket exists.`);
                    setUploading(false);
                    return;
                }

                const { data: { publicUrl } } = supabase.storage
                    .from('audio')
                    .getPublicUrl(filePath);

                finalAudioUrl = publicUrl;
            }

            const { error } = await supabase
                .from('kira_recordings')
                .insert([
                    {
                        title,
                        description,
                        audio_url: finalAudioUrl
                    }
                ]);

            if (error) throw error;

            // Reset form
            setTitle('');
            setDescription('');
            setAudioUrl('');
            setFile(null);
            setShowForm(false);
            fetchRecordings();

        } catch (error: any) {
            console.error('Error saving recording:', error);
            alert(error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this recording?')) return;

        try {
            const { error } = await supabase
                .from('kira_recordings')
                .delete()
                .eq('id', id);

            if (error) throw error;
            fetchRecordings();
        } catch (error) {
            console.error('Error deleting recording:', error);
        }
    };

    const togglePlay = (url: string, id: string) => {
        if (currentAudio) {
            currentAudio.pause();
            if (playingId === id) {
                setPlayingId(null);
                return;
            }
        }

        const audio = new Audio(url);
        audio.play();
        audio.onended = () => setPlayingId(null);
        setCurrentAudio(audio);
        setPlayingId(id);
    };

    return (
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div className="ka-page-header">
                <div>
                    <h1 className="ka-page-title">Audio Recordings</h1>
                    <p className="text-gray-400 text-sm mt-1">Manage public audio conversations.</p>
                </div>
                <button
                    className="ka-btn ka-btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Cancel' : <><Plus size={16} /> Add New Recording</>}
                </button>
            </div>

            {showForm && (
                <div className="ka-card mb-8">
                    <div className="ka-card-body space-y-4">
                        <div className="ka-form-group">
                            <label className="ka-label">Title</label>
                            <input
                                className="ka-input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Conversation about Anxiety"
                            />
                        </div>
                        <div className="ka-form-group">
                            <label className="ka-label">Description</label>
                            <input
                                className="ka-input"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Short description..."
                            />
                        </div>
                        <div className="ka-form-group">
                            <label className="ka-label">Audio Source</label>
                            <div className="flex gap-4 items-start">
                                <div className="flex-1">
                                    <label className="ka-label text-xs mb-1 block">Option 1: Upload File</label>
                                    <div className="border border-dashed border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-white/5 transition-colors relative">
                                        <input
                                            type="file"
                                            accept="audio/*,video/*"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        <div className="flex flex-col items-center gap-2 text-gray-400">
                                            <Upload size={20} />
                                            <span className="text-xs">{file ? file.name : "Click to upload audio/video"}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex px-2 items-center h-full pt-6 text-gray-500 font-mono text-xs">OR</div>
                                <div className="flex-1">
                                    <label className="ka-label text-xs mb-1 block">Option 2: Public URL</label>
                                    <input
                                        className="ka-input"
                                        value={audioUrl}
                                        onChange={(e) => setAudioUrl(e.target.value)}
                                        placeholder="https://..."
                                    />
                                    <p className="text-[10px] text-gray-500 mt-1">Useful if file is already hosted (e.g. /audio/filename.mp3)</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                className="ka-btn ka-btn-primary"
                                disabled={uploading}
                                onClick={handleSave}
                            >
                                {uploading ? <><Loader2 className="animate-spin" size={16} /> Uploading...</> : 'Save Recording'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {loading ? (
                <div className="ka-spinner"><Loader2 /></div>
            ) : (
                <div className="grid gap-4">
                    {recordings.map(recording => (
                        <div key={recording.id} className="ka-card hover:border-purple-500/30 transition-colors">
                            <div className="ka-card-body flex items-center gap-4">
                                <button
                                    onClick={() => togglePlay(recording.audio_url, recording.id)}
                                    className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"
                                >
                                    {playingId === recording.id ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                                </button>

                                <div className="flex-1">
                                    <h3 className="font-bold text-white">{recording.title}</h3>
                                    {recording.description && <p className="text-sm text-gray-400">{recording.description}</p>}
                                    <p className="text-xs text-gray-600 font-mono mt-1 w-full truncate max-w-md">{recording.audio_url}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <a href={recording.audio_url} target="_blank" rel="noopener noreferrer" className="ka-btn ka-btn-ghost ka-btn-icon text-gray-500 hover:text-white">
                                        <LinkIcon size={16} />
                                    </a>
                                    <button
                                        onClick={() => handleDelete(recording.id)}
                                        className="ka-btn ka-btn-ghost ka-btn-icon text-red-500 hover:bg-red-500/10"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {recordings.length === 0 && !loading && (
                        <div className="text-center py-10 text-gray-500 border border-dashed border-gray-800 rounded-xl">
                            <Music size={48} className="mx-auto mb-4 opacity-20" />
                            <p>No recordings uploaded yet.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
