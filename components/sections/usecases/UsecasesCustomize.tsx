import React, { useState } from 'react';

export const UsecasesCustomize = () => {
    const [selections, setSelections] = useState({
        vibe: 'Sassy & Bold',
        support: 'Balanced',
        role: 'Best Friend',
        communication: 'Mixed'
    });

    const options = {
        vibe: ['Sassy & Bold', 'Warm & Nurturing', 'Calm & Wise', 'Playful & Fun'],
        support: ['Tough Love', 'Balanced', 'Gentle Support', 'Cheerleader'],
        role: ['Best Friend', 'Life Coach', 'Study Buddy', 'Wellness Guide'],
        communication: ['Quick Texts', 'Mixed', 'Deep Convos', 'Voice Calls']
    };

    const handleSelect = (category: string, value: string) => {
        setSelections(prev => ({ ...prev, [category]: value }));
    };

    return (
        <section className="section customize-section" id="customize">
            <div className="container">
                <div className="customize-content">
                    <div className="customize-grid">
                        <div className="customize-text">
                            <h2>No Two Kiras Are <span className="text-pink">The Same</span></h2>

                            <p>Other AI apps give you the same generic personality everyone else gets. Kira is different. You build her. You choose her personality, her communication style, her voice, her vibe. She becomes YOUR best friend - not a mass-produced chatbot.</p>

                            <div className="customize-features">
                                <div className="customize-feature">
                                    <div className="customize-feature-icon">🎭</div>
                                    <div>
                                        <h4>Choose Her Personality</h4>
                                        <p>Sassy and bold? Gentle and nurturing? Analytical and direct? You decide.</p>
                                    </div>
                                </div>
                                <div className="customize-feature">
                                    <div className="customize-feature-icon">💬</div>
                                    <div>
                                        <h4>Pick Her Communication Style</h4>
                                        <p>Casual texts? Deep conversations? Tough love? Endless support? Mix and match.</p>
                                    </div>
                                </div>
                                <div className="customize-feature">
                                    <div className="customize-feature-icon">🎙️</div>
                                    <div>
                                        <h4>Select Her Voice</h4>
                                        <p>Multiple voice options for calls. Find the one that feels like home.</p>
                                    </div>
                                </div>
                                <div className="customize-feature">
                                    <div className="customize-feature-icon">🧠</div>
                                    <div>
                                        <h4>She Learns & Adapts</h4>
                                        <p>The more you talk, the more she understands you. She evolves with your relationship.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="customize-visual">
                            <div className="personality-builder">
                                <div className="builder-header">
                                    <h3>✨ Build Your Kira</h3>
                                    <p>Customize her personality to match what you need</p>
                                </div>

                                <div className="builder-options">
                                    <div className="builder-option">
                                        <div className="builder-option-label">Personality Vibe</div>
                                        <div className="builder-option-choices">
                                            {options.vibe.map(opt => (
                                                <span
                                                    key={opt}
                                                    className={`builder-choice ${selections.vibe === opt ? 'selected' : ''}`}
                                                    onClick={() => handleSelect('vibe', opt)}
                                                >
                                                    {opt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="builder-option">
                                        <div className="builder-option-label">Support Style</div>
                                        <div className="builder-option-choices">
                                            {options.support.map(opt => (
                                                <span
                                                    key={opt}
                                                    className={`builder-choice ${selections.support === opt ? 'selected' : ''}`}
                                                    onClick={() => handleSelect('support', opt)}
                                                >
                                                    {opt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="builder-option">
                                        <div className="builder-option-label">Primary Role</div>
                                        <div className="builder-option-choices">
                                            {options.role.map(opt => (
                                                <span
                                                    key={opt}
                                                    className={`builder-choice ${selections.role === opt ? 'selected' : ''}`}
                                                    onClick={() => handleSelect('role', opt)}
                                                >
                                                    {opt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="builder-option">
                                        <div className="builder-option-label">Communication</div>
                                        <div className="builder-option-choices">
                                            {options.communication.map(opt => (
                                                <span
                                                    key={opt}
                                                    className={`builder-choice ${selections.communication === opt ? 'selected' : ''}`}
                                                    onClick={() => handleSelect('communication', opt)}
                                                >
                                                    {opt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
