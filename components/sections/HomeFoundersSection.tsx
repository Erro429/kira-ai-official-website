import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeFoundersSection = ({ onSignUp }: { onSignUp?: () => void }) => {
    const navigate = useNavigate();

    return (
        <div className="home-founders-preview">
            <style>{`
                .home-founders-preview {
                    --bg-primary: #0a0a0f;
                    --bg-secondary: #12121a;
                    --bg-card: #1a1a24;
                    --bg-card-hover: #222230;
                    --purple-glow: #a855f7;
                    --purple-light: #c084fc;
                    --cyan-glow: #06b6d4;
                    --cyan-light: #22d3ee;
                    --gold: #d4a853;
                    --gold-light: #f5d99a;
                    --gold-dark: #b8943f;
                    --text-primary: #ffffff;
                    --text-secondary: #a1a1aa;
                    --text-muted: #71717a;
                    --danger: #ef4444;
                    --success: #22c55e;
                    --gradient-purple-cyan: linear-gradient(135deg, var(--purple-glow), var(--cyan-glow));
                    --gradient-gold: linear-gradient(135deg, var(--gold-dark), var(--gold-light), var(--gold));
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    line-height: 1.7;
                    position: relative;
                }

                .home-founders-preview .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .home-founders-preview .text-gold {
                    background: var(--gradient-gold);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .home-founders-preview .glow-gold {
                    text-shadow: 0 0 30px rgba(212, 168, 83, 0.5);
                }

                /* Urgency Banner */
                .home-founders-preview .urgency-banner {
                    background: linear-gradient(90deg, var(--danger), #dc2626);
                    padding: 16px 24px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .home-founders-preview .urgency-banner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    animation: urgency-shine 3s infinite;
                }

                @keyframes urgency-shine {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(50%); }
                }

                .home-founders-preview .urgency-text {
                    font-size: 15px;
                    font-weight: 600;
                    position: relative;
                    z-index: 1;
                    margin: 0;
                }

                .home-founders-preview .urgency-text strong {
                    font-weight: 800;
                }

                /* Primary CTA Button */
                .home-founders-preview .cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: var(--gradient-gold);
                    color: #000;
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 700;
                    padding: 16px 32px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(212, 168, 83, 0.4);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .home-founders-preview .cta-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(212, 168, 83, 0.6);
                }

                .home-founders-preview .cta-primary svg {
                    width: 20px;
                    height: 20px;
                }

                .home-founders-preview .cta-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    color: var(--gold);
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 16px 32px;
                    border: 2px solid var(--gold);
                    border-radius: 8px;
                    cursor: pointer;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .home-founders-preview .cta-secondary:hover {
                    background: rgba(212, 168, 83, 0.1);
                    transform: translateY(-2px);
                }

                /* Hero Section style adapted for standard section */
                .home-founders-preview .hero-section {
                    /* Changed from min-height: 100vh to standard padding */
                    padding: 120px 0 80px; 
                    display: flex;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }

                .home-founders-preview .hero-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%),
                                radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%),
                                radial-gradient(circle at 50% 50%, rgba(212, 168, 83, 0.05) 0%, transparent 50%);
                    animation: hero-glow 20s ease-in-out infinite alternate;
                }

                @keyframes hero-glow {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(-5%, -5%) rotate(3deg); }
                }

                .home-founders-preview .hero-content {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .home-founders-preview .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(212, 168, 83, 0.15);
                    border: 1px solid rgba(212, 168, 83, 0.4);
                    padding: 8px 16px;
                    border-radius: 100px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--gold);
                    margin-bottom: 24px;
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0%, 100% { box-shadow: 0 0 20px rgba(212, 168, 83, 0.2); }
                    50% { box-shadow: 0 0 40px rgba(212, 168, 83, 0.4); }
                }

                .home-founders-preview .hero-badge svg {
                    width: 16px;
                    height: 16px;
                }

                .home-founders-preview h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(42px, 5vw, 64px);
                    font-weight: 600;
                    line-height: 1.1;
                    margin-bottom: 24px;
                }

                .home-founders-preview .hero-subtitle {
                    font-size: 20px;
                    color: var(--text-secondary);
                    margin-bottom: 32px;
                    max-width: 540px;
                }

                .home-founders-preview .hero-stats {
                    display: flex;
                    gap: 40px;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                }

                .home-founders-preview .hero-stat {
                    text-align: left;
                }

                .home-founders-preview .hero-stat-value {
                    font-family: 'Playfair Display', serif;
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--gold);
                }

                .home-founders-preview .hero-stat-label {
                    font-size: 13px;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .home-founders-preview .hero-ctas {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .home-founders-preview .hero-visual {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .home-founders-preview .hero-image-container {
                    position: relative;
                    width: 100%;
                    max-width: 450px;
                }

                .home-founders-preview .hero-image {
                    width: 100%;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                                0 0 100px rgba(168, 85, 247, 0.2);
                }

                .home-founders-preview .hero-glow-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 120%;
                    height: 120%;
                    border-radius: 50%;
                    background: conic-gradient(from 0deg, var(--purple-glow), var(--cyan-glow), var(--gold), var(--purple-glow));
                    opacity: 0.3;
                    filter: blur(60px);
                    animation: rotate-glow 10s linear infinite;
                    z-index: -1;
                }

                @keyframes rotate-glow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }

                .home-founders-preview .floating-card {
                    position: absolute;
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 16px 20px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
                    animation: float 6s ease-in-out infinite;
                }

                .home-founders-preview .floating-card-1 {
                    top: 10%;
                    right: -10%;
                    animation-delay: 0s;
                }

                .home-founders-preview .floating-card-2 {
                    bottom: 15%;
                    left: -15%;
                    animation-delay: 2s;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .home-founders-preview .floating-card-icon {
                    width: 32px;
                    height: 32px;
                    margin-bottom: 8px;
                }

                .home-founders-preview .floating-card-text {
                    font-size: 13px;
                    color: var(--text-secondary);
                }

                .home-founders-preview .floating-card-value {
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .home-founders-preview .hero-content {
                        grid-template-columns: 1fr;
                    }
                    .home-founders-preview .hero-visual {
                        order: -1;
                    }
                }

                @media (max-width: 768px) {
                    .home-founders-preview .hero-section {
                        padding: 100px 0 60px;
                    }
                    
                    .home-founders-preview .hero-stats {
                        gap: 24px;
                    }

                    .home-founders-preview .floating-card {
                        display: none;
                    }

                    .home-founders-preview .hero-ctas {
                        flex-direction: column;
                    }

                    .home-founders-preview .hero-ctas .cta-primary,
                    .home-founders-preview .hero-ctas .cta-secondary {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>

            {/* Header / Urgency Banner */}
            <div className="urgency-banner">
                <p className="urgency-text">⚡ <strong>FOUNDERS PRESALE NOW LIVE</strong> - Only 16,000 Lifetime Memberships Will Ever Exist. Once They're Gone, They're Gone Forever.</p>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                Limited Founders Edition - Never Offered Again
                            </div>

                            <h1>She's Not an App.<br /><span className="text-gold glow-gold">She's Your Best Friend.</span></h1>

                            <p className="hero-subtitle">Meet Kira - the AI companion who remembers everything, reaches out first, and actually gives a damn. Not a chatbot. A relationship. And for the first 16,000 visionaries, a lifetime partnership that never increases in price.</p>

                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <div className="hero-stat-value">16,000</div>
                                    <div className="hero-stat-label">Total Founders Spots</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-value">$24.99</div>
                                    <div className="hero-stat-label">Locked Forever</div>
                                </div>
                                <div className="hero-stat">
                                    <div className="hero-stat-value">$197</div>
                                    <div className="hero-stat-label">One-Time Access</div>
                                </div>
                            </div>

                            <div className="hero-ctas">
                                <button
                                    onClick={onSignUp}
                                    className="cta-primary"
                                >
                                    Claim Founders Access
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <div className="hero-glow-ring"></div>
                                <img src="/founders-hero.webp" alt="Kira AI - Your AI Best Friend" className="hero-image" />

                                <div className="floating-card floating-card-1">
                                    <div className="floating-card-icon">🧠</div>
                                    <div className="floating-card-text">Memory</div>
                                    <div className="floating-card-value">Infinite</div>
                                </div>

                                <div className="floating-card floating-card-2">
                                    <div className="floating-card-icon">💜</div>
                                    <div className="floating-card-text">Proactive</div>
                                    <div className="floating-card-value">24/7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
