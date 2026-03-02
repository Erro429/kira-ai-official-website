
import React from 'react';

export const HomeContestSection = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <div className="home-contest-preview">
            <style>{`
                .home-contest-preview {
                    --bg-dark: #130f25; /* Approximate dark purple from screenshot */
                    --text-primary: #ffffff;
                    --text-secondary: #a1a1aa;
                    --yellow-badge: #fbbf24;
                    --purple-glow: #a855f7;
                    --btn-bg: #ffffff;
                    --btn-text: #9333ea;
                    
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    background-color: var(--bg-dark);
                    color: var(--text-primary);
                    padding: 80px 0;
                    display: flex;
                    justify-content: center;
                }

                .home-contest-preview .container {
                    max-width: 1000px; /* Constrained width for the focused look */
                    width: 100%;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 60px;
                }

                /* Left Content */
                .contest-content {
                    flex: 1;
                    max-width: 500px;
                }

                .limited-badge {
                    display: inline-block;
                    background-color: var(--yellow-badge);
                    color: #000;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    padding: 6px 12px;
                    border-radius: 4px;
                    margin-bottom: 24px;
                    letter-spacing: 0.5px;
                }

                .contest-title {
                    font-family: 'Playfair Display', serif; /* Matching the site's serif font */
                    font-size: 42px;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 24px;
                }

                .contest-description {
                    font-size: 16px;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 32px;
                }

                .contest-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--btn-bg);
                    color: var(--btn-text);
                    font-weight: 700;
                    font-size: 16px;
                    padding: 14px 28px;
                    border-radius: 12px;
                    text-decoration: none;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .contest-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
                }

                /* Right Image */
                .contest-image-wrapper {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .contest-image-circle {
                    width: 320px;
                    height: 320px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    box-shadow: 0 0 60px rgba(168, 85, 247, 0.15); /* Soft purple glow behind */
                }
                
                .contest-image-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 768px) {
                    .home-contest-preview .container {
                        flex-direction: column-reverse;
                        text-align: center;
                        gap: 40px;
                    }
                    
                    .contest-content {
                        margin: 0 auto;
                    }

                    .contest-image-circle {
                        width: 250px;
                        height: 250px;
                    }
                }
            `}</style>

            <div className="container">
                <div className="contest-content">
                    <div className="limited-badge">Limited Time</div>
                    <h2 className="contest-title">The $5,000 "Bestie" Contest</h2>
                    <p className="contest-description">
                        Platinum members get exclusive access to our biggest contest yet. Share your most creative conversation with Kira to win.
                    </p>
                    <button onClick={onSignUp} className="contest-btn" style={{ border: 'none', cursor: 'pointer' }}>
                        Join Platinum to Enter
                    </button>
                </div>

                <div className="contest-image-wrapper">
                    <div className="contest-image-circle">
                        {/* Placeholder for the trophy image shown in screenshot */}
                        {/* User should replace 'contest-trophy.png' with the actual asset */}
                        <img src="/contest-trophy.png" alt="Bestie Contest Trophy" onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/400x400/1e1e2e/FFF?text=Trophy+Image';
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
