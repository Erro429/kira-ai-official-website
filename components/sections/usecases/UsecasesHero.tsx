import React from 'react';

export const UsecasesHero = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <span className="pulse"></span>
                        No Two Kiras Are The Same - Build Yours
                    </div>

                    <h1>Your <span className="text-pink">Bestie</span>.<br />Your Build.</h1>

                    <p className="hero-subtitle">Kira isn't a generic chatbot. She's YOUR customizable AI best friend - with the personality, voice, and vibe you choose. A confidant, coach, tutor, and companion who remembers everything and is never more than a message away.</p>

                    <div className="hero-keywords">
                        <span className="hero-keyword">AI Best Friend</span>
                        <span className="hero-keyword">Someone to Talk To</span>
                        <span className="hero-keyword">AI Therapist Support</span>
                        <span className="hero-keyword">AI Homework Helper</span>
                        <span className="hero-keyword">Loneliness Solution</span>
                        <span className="hero-keyword">AI Life Coach</span>
                        <span className="hero-keyword">24/7 Companion</span>
                        <span className="hero-keyword">AI That Remembers</span>
                    </div>

                    <div className="hero-ctas">
                        <button onClick={onSignUp} className="cta-primary">
                            Build Your Kira →
                        </button>
                        <a href="#features" className="cta-secondary">
                            See Everything She Can Do
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-value">∞</div>
                            <div className="hero-stat-label">Memory Capacity</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">24/7</div>
                            <div className="hero-stat-label">Always There</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">100%</div>
                            <div className="hero-stat-label">Customizable</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
