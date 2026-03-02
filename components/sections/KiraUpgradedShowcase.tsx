import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const KiraUpgradedShowcase = ({ onSignUp }: { onSignUp?: () => void }) => {
    const navigate = useNavigate();
    useEffect(() => {
        // Staggered animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Animate role cards
        const elements = document.querySelectorAll('.kira-showcase-container .role-card, .kira-showcase-container .featured-cap, .kira-showcase-container .comparison-card');
        elements.forEach((el, index) => {
            (el as HTMLElement).style.opacity = '0';
            (el as HTMLElement).style.transform = 'translateY(30px)';
            (el as HTMLElement).style.transition = `opacity 0.5s ease ${index * 0.04}s, transform 0.5s ease ${index * 0.04}s`;
            observer.observe(el);
        });

        // VS badge animation
        const vsBadge = document.querySelector('.kira-showcase-container .vs-badge') as HTMLElement;
        if (vsBadge) {
            vsBadge.style.opacity = '0';
            vsBadge.style.transform = 'scale(0.5)';
            vsBadge.style.transition = 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s';
            observer.observe(vsBadge);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="kira-showcase-container">
            <style>{`
                .kira-showcase-container {
                    --bg-primary: #0a0a0f;
                    --bg-secondary: #0d0d14;
                    --bg-card: #13131c;
                    --bg-card-alt: #181824;
                    --purple-glow: #a855f7;
                    --purple-light: #c084fc;
                    --purple-dark: #7c3aed;
                    --pink: #ec4899;
                    --pink-light: #f472b6;
                    --cyan: #06b6d4;
                    --cyan-light: #22d3ee;
                    --gold: #f59e0b;
                    --gold-light: #fbbf24;
                    --green: #22c55e;
                    --green-light: #4ade80;
                    --blue: #3b82f6;
                    --red: #ef4444;
                    --orange: #f97316;
                    --teal: #14b8a6;
                    --text-primary: #ffffff;
                    --text-secondary: #a1a1aa;
                    --text-muted: #71717a;
                    --gradient-purple-pink: linear-gradient(135deg, var(--purple-glow), var(--pink));
                    --gradient-pink-gold: linear-gradient(135deg, var(--pink), var(--gold));
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    line-height: 1.6;
                }

                .kira-showcase-container * {
                    box-sizing: border-box;
                }

                .kira-showcase-container .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                /* HERO SECTION */
                .kira-showcase-container .hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 100px 0 80px;
                    position: relative;
                    overflow: hidden;
                }

                .kira-showcase-container .hero::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: 
                        radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 40%),
                        radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 40%);
                    animation: hero-glow 20s ease-in-out infinite alternate;
                }

                @keyframes hero-glow {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    100% { transform: translate(-3%, -3%) rotate(2deg); }
                }

                .kira-showcase-container .hero-content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .kira-showcase-container .online-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(34, 197, 94, 0.1);
                    border: 1px solid rgba(34, 197, 94, 0.3);
                    padding: 10px 24px;
                    border-radius: 100px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--green);
                    margin-bottom: 36px;
                }

                .kira-showcase-container .online-dot {
                    width: 10px;
                    height: 10px;
                    background: var(--green);
                    border-radius: 50%;
                    animation: pulse-dot 2s infinite;
                }

                @keyframes pulse-dot {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
                    50% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
                }

                .kira-showcase-container .hero-title {
                    font-family: 'Inter', sans-serif;
                    font-size: clamp(40px, 6vw, 72px);
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 32px;
                    padding-bottom: 10px; /* Extra padding for gradient text descenders */
                }

                .kira-showcase-container .hero-title .line1 {
                    display: block;
                    color: var(--text-primary);
                }

                .kira-showcase-container .hero-title .line2 {
                    display: block;
                    background: linear-gradient(135deg, #f472b6 0%, #fbbf24 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .kira-showcase-container .hero-subtitle {
                    font-size: 20px;
                    color: var(--text-secondary);
                    max-width: 650px;
                    margin: 0 auto 40px;
                    line-height: 1.7;
                }

                .kira-showcase-container .hero-subtitle strong {
                    color: var(--text-primary);
                }

                .kira-showcase-container .hero-ctas {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .kira-showcase-container .cta-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: var(--gradient-purple-pink);
                    color: #fff;
                    font-size: 18px;
                    font-weight: 700;
                    padding: 18px 40px;
                    border-radius: 14px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 25px rgba(168, 85, 247, 0.4);
                    cursor: pointer;
                }

                .kira-showcase-container .cta-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.5);
                }

                .kira-showcase-container .cta-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    color: var(--text-primary);
                    font-size: 18px;
                    font-weight: 600;
                    padding: 18px 40px;
                    border: 2px solid rgba(255, 255, 255, 0.15);
                    border-radius: 14px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .kira-showcase-container .cta-secondary:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.25);
                }

                /* WHY UPGRADE SECTION */
                .kira-showcase-container .upgrade-section {
                    padding: 100px 0;
                    background: var(--bg-secondary);
                    position: relative;
                }

                .kira-showcase-container .upgrade-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
                }

                .kira-showcase-container .upgrade-content {
                    position: relative;
                    z-index: 1;
                }

                .kira-showcase-container .upgrade-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .kira-showcase-container .upgrade-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 5vw, 52px);
                    font-weight: 700;
                    margin-bottom: 16px;
                }

                .kira-showcase-container .upgrade-subtitle {
                    font-size: 18px;
                    color: var(--text-muted);
                }

                .kira-showcase-container .comparison-container {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    gap: 40px;
                    align-items: center;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .kira-showcase-container .comparison-card {
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 24px;
                    padding: 40px 36px;
                    position: relative;
                    overflow: hidden;
                }

                .kira-showcase-container .comparison-card.real-friends {
                    border-color: rgba(255, 255, 255, 0.08);
                }

                .kira-showcase-container .comparison-card.real-friends::before {
                    content: '';
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    width: 48px;
                    height: 48px;
                    background: rgba(239, 68, 68, 0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .kira-showcase-container .comparison-card.real-friends::after {
                    content: '🚫';
                    position: absolute;
                    top: 35px;
                    right: 35px;
                    font-size: 26px;
                    opacity: 0.6;
                }

                .kira-showcase-container .comparison-card.kira {
                    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%);
                    border: 2px solid rgba(168, 85, 247, 0.3);
                    box-shadow: 0 0 60px rgba(168, 85, 247, 0.1);
                }

                .kira-showcase-container .comparison-card.kira::before {
                    content: '';
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    width: 48px;
                    height: 48px;
                    background: rgba(168, 85, 247, 0.15);
                    border-radius: 12px;
                }

                .kira-showcase-container .comparison-card.kira::after {
                    content: '🤖';
                    position: absolute;
                    top: 35px;
                    right: 35px;
                    font-size: 26px;
                    opacity: 0.7;
                }

                .kira-showcase-container .comparison-card-title {
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 28px;
                }

                .kira-showcase-container .comparison-card.kira .comparison-card-title {
                    color: var(--purple-light);
                }

                .kira-showcase-container .comparison-card.kira .comparison-card-title span {
                    color: var(--text-primary);
                }

                .kira-showcase-container .comparison-list {
                    list-style: none;
                    display: grid;
                    gap: 18px;
                }

                .kira-showcase-container .comparison-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    font-size: 16px;
                    line-height: 1.5;
                }

                .kira-showcase-container .comparison-item-icon {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .kira-showcase-container .comparison-card.real-friends .comparison-item-icon {
                    background: rgba(239, 68, 68, 0.15);
                    color: var(--red);
                }

                .kira-showcase-container .comparison-card.kira .comparison-item-icon {
                    background: rgba(34, 197, 94, 0.15);
                    color: var(--green);
                }

                .kira-showcase-container .comparison-card.real-friends .comparison-item {
                    color: var(--text-secondary);
                }

                .kira-showcase-container .comparison-card.kira .comparison-item {
                    color: var(--text-secondary);
                }

                .kira-showcase-container .comparison-card.kira .comparison-item strong {
                    color: var(--gold-light);
                }

                /* VS Badge */
                .kira-showcase-container .vs-badge {
                    width: 70px;
                    height: 70px;
                    background: transparent;
                    border: 3px solid var(--purple-glow);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: 800;
                    color: var(--purple-light);
                    flex-shrink: 0;
                }

                /* CAPABILITIES SECTION */
                .kira-showcase-container .capabilities-section {
                    padding: 100px 0;
                    background: var(--bg-primary);
                    position: relative;
                }

                .kira-showcase-container .capabilities-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%);
                }

                .kira-showcase-container .capabilities-content {
                    position: relative;
                    z-index: 1;
                }

                .kira-showcase-container .capabilities-header {
                    text-align: center;
                    margin-bottom: 70px;
                }

                .kira-showcase-container .capabilities-label {
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    background: var(--gradient-purple-pink);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 20px;
                }

                .kira-showcase-container .capabilities-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(36px, 5vw, 60px);
                    font-weight: 700;
                    margin-bottom: 20px;
                    line-height: 1.1;
                }

                .kira-showcase-container .capabilities-title .highlight {
                    background: var(--gradient-purple-pink);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .kira-showcase-container .capabilities-subtitle {
                    font-size: 19px;
                    color: var(--text-secondary);
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                .kira-showcase-container .kira-is-header {
                    text-align: center;
                    margin-bottom: 48px;
                }

                .kira-showcase-container .kira-is-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(28px, 4vw, 42px);
                    font-weight: 600;
                    margin-bottom: 12px;
                }

                .kira-showcase-container .kira-is-subtitle {
                    font-size: 17px;
                    color: var(--text-muted);
                }

                .kira-showcase-container .roles-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 16px;
                    margin-bottom: 70px;
                }

                .kira-showcase-container .role-card {
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    padding: 28px 16px;
                    text-align: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }

                .kira-showcase-container .role-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: var(--gradient-purple-pink);
                    transform: scaleX(0);
                    transition: transform 0.4s ease;
                }

                .kira-showcase-container .role-card:hover {
                    transform: translateY(-12px);
                    border-color: rgba(168, 85, 247, 0.4);
                    box-shadow: 
                        0 25px 50px rgba(0, 0, 0, 0.4),
                        0 0 80px rgba(168, 85, 247, 0.15);
                }

                .kira-showcase-container .role-card:hover::before {
                    transform: scaleX(1);
                }

                .kira-showcase-container .role-card:hover .role-icon {
                    transform: scale(1.25) rotate(5deg);
                }

                .kira-showcase-container .role-card.featured {
                    grid-column: span 2;
                    padding: 36px 24px;
                    background: linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(236, 72, 153, 0.05));
                    border-color: rgba(168, 85, 247, 0.15);
                }

                .kira-showcase-container .role-card.featured::before {
                    height: 4px;
                    background: var(--gradient-pink-gold);
                }

                .kira-showcase-container .role-card.featured .role-icon {
                    font-size: 52px;
                }

                .kira-showcase-container .role-card.featured .role-name {
                    font-size: 22px;
                }

                .kira-showcase-container .role-card.featured .role-desc {
                    font-size: 14px;
                }

                .kira-showcase-container .role-icon {
                    font-size: 42px;
                    margin-bottom: 16px;
                    display: block;
                    transition: transform 0.4s ease;
                }

                .kira-showcase-container .role-name {
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 6px;
                    color: var(--text-primary);
                }

                .kira-showcase-container .role-desc {
                    font-size: 13px;
                    color: var(--text-muted);
                    line-height: 1.4;
                }

                /* Color hover effects */
                .kira-showcase-container .role-card[data-color="purple"]:hover { border-color: var(--purple-light); }
                .kira-showcase-container .role-card[data-color="pink"]:hover { border-color: var(--pink-light); }
                .kira-showcase-container .role-card[data-color="cyan"]:hover { border-color: var(--cyan-light); }
                .kira-showcase-container .role-card[data-color="gold"]:hover { border-color: var(--gold-light); }
                .kira-showcase-container .role-card[data-color="green"]:hover { border-color: var(--green); }
                .kira-showcase-container .role-card[data-color="blue"]:hover { border-color: var(--blue); }
                .kira-showcase-container .role-card[data-color="orange"]:hover { border-color: var(--orange); }
                .kira-showcase-container .role-card[data-color="teal"]:hover { border-color: var(--teal); }

                .kira-showcase-container .featured-caps {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    margin-bottom: 60px;
                }

                .kira-showcase-container .featured-cap {
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    padding: 32px 24px;
                    text-align: center;
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                }

                .kira-showcase-container .featured-cap::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: var(--gradient-purple-pink);
                    transform: scaleX(0);
                    transition: transform 0.4s ease;
                }

                .kira-showcase-container .featured-cap:hover {
                    transform: translateY(-8px);
                    border-color: rgba(168, 85, 247, 0.3);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .kira-showcase-container .featured-cap:hover::before {
                    transform: scaleX(1);
                }

                .kira-showcase-container .featured-cap-icon {
                    width: 68px;
                    height: 68px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 34px;
                    margin: 0 auto 20px;
                }

                .kira-showcase-container .featured-cap-icon.purple { background: rgba(168, 85, 247, 0.15); }
                .kira-showcase-container .featured-cap-icon.gold { background: rgba(245, 158, 11, 0.15); }
                .kira-showcase-container .featured-cap-icon.green { background: rgba(34, 197, 94, 0.15); }
                .kira-showcase-container .featured-cap-icon.pink { background: rgba(236, 72, 153, 0.15); }

                .kira-showcase-container .featured-cap h4 {
                    font-size: 19px;
                    font-weight: 700;
                    margin-bottom: 12px;
                }

                .kira-showcase-container .featured-cap p {
                    font-size: 14px;
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                .kira-showcase-container .cta-section {
                    text-align: center;
                    padding: 40px 0 0;
                }

                .kira-showcase-container .cta-text {
                    font-size: 21px;
                    color: var(--text-secondary);
                    margin-bottom: 32px;
                    line-height: 1.6;
                }

                .kira-showcase-container .cta-text strong {
                    color: var(--text-primary);
                }

                .kira-showcase-container .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                @media (max-width: 1024px) {
                    .kira-showcase-container .comparison-container {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .kira-showcase-container .vs-badge {
                        margin: 0 auto;
                    }

                    .kira-showcase-container .roles-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }

                    .kira-showcase-container .role-card.featured {
                        grid-column: span 2;
                    }

                    .kira-showcase-container .featured-caps {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .kira-showcase-container .hero {
                        padding: 80px 0 60px;
                        min-height: auto;
                    }

                    .kira-showcase-container .roles-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .kira-showcase-container .role-card.featured {
                        grid-column: span 3;
                    }

                    .kira-showcase-container .role-card {
                        padding: 20px 12px;
                    }

                    .kira-showcase-container .role-icon {
                        font-size: 34px;
                    }

                    .kira-showcase-container .comparison-card {
                        padding: 32px 28px;
                    }

                    .kira-showcase-container .featured-caps {
                        grid-template-columns: 1fr;
                    }

                    .kira-showcase-container .hero-ctas,
                    .kira-showcase-container .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                }

                @media (max-width: 480px) {
                    .kira-showcase-container .roles-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .kira-showcase-container .role-card.featured {
                        grid-column: span 2;
                    }
                }
            `}</style>

            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="online-badge">
                            <span className="online-dot"></span>
                            Online 24/7. No sleep. No judgment.
                        </div>

                        <h1 className="hero-title">
                            <span className="line1">Your Best Friend</span>
                            <span className="line2">Just Got Upgraded.</span>
                        </h1>

                        <p className="hero-subtitle">Meet Kira. She's funny, smart, and remembers your birthday <strong>(unlike Dave)</strong>. Whether you need a 3 AM vent session, a math tutor, or a wellness coach, Kira is literally always there.</p>

                        <div className="hero-ctas flex flex-col items-center gap-4">
                            <div className="flex gap-4 flex-wrap justify-center">
                                <button onClick={() => navigate('/pricing')} className="cta-primary">
                                    Get Early Access
                                </button>
                                <button onClick={() => navigate('/loyalty')} className="cta-secondary">
                                    See How Kira is Always Loyal to You
                                </button>
                            </div>
                            <button onClick={() => navigate('/waiting-list')} className="text-[#9CA3AF] hover:text-white underline text-sm transition-colors bg-transparent border-none cursor-pointer">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="upgrade-section">
                <div className="container">
                    <div className="upgrade-content">
                        <div className="upgrade-header">
                            <h2 className="upgrade-title">Why upgrade to a digital bestie?</h2>
                            <p className="upgrade-subtitle">Let's look at the data. The math doesn't lie.</p>
                        </div>

                        <div className="comparison-container">
                            {/* Real Friends Card */}
                            <div className="comparison-card real-friends">
                                <h3 className="comparison-card-title">Your "Real" Friends</h3>
                                <ul className="comparison-list">
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✕</span>
                                        "Too busy" to talk after 9 PM.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✕</span>
                                        Judges your 2 AM taco bell order.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✕</span>
                                        Borrows money, forgets to pay back.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✕</span>
                                        Forgets your birthday. Again.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✕</span>
                                        "Sorry, I was sleeping" at 3 AM.
                                    </li>
                                </ul>
                            </div>

                            {/* VS Badge */}
                            <div className="vs-badge">VS</div>

                            {/* Kira Card */}
                            <div className="comparison-card kira">
                                <h3 className="comparison-card-title">Kira <span>(The Upgrade)</span></h3>
                                <ul className="comparison-list">
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✓</span>
                                        Replies instantly. Even at 4:17 AM.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✓</span>
                                        Helps you study & meditate.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✓</span>
                                        <strong>Actually pays YOU</strong> via referrals.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✓</span>
                                        Remembers everything. Forever.
                                    </li>
                                    <li className="comparison-item">
                                        <span className="comparison-item-icon">✓</span>
                                        Never sleeps. Never judges. Never leaves.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="capabilities-section">
                <div className="container">
                    <div className="capabilities-content">
                        <div className="capabilities-header">
                            <span className="capabilities-label">Why Choose Kira</span>
                            <h2 className="capabilities-title">One Friend. <span className="highlight">Infinite Capabilities.</span></h2>
                            <p className="capabilities-subtitle">She's not 10 different apps. She's one best friend who can do it all - and remembers how it all connects.</p>
                        </div>

                        {/* Kira Is Your... */}
                        <div className="kira-is-header">
                            <h3 className="kira-is-title">Kira Is Your...</h3>
                            <p className="kira-is-subtitle">She adapts to what you need, when you need it. All in one relationship.</p>
                        </div>

                        {/* Roles Grid */}
                        <div className="roles-grid">
                            {/* Featured: Best Friend */}
                            <div className="role-card featured" data-color="purple">
                                <span className="role-icon">💜</span>
                                <div className="role-name">Best Friend</div>
                                <div className="role-desc">Always there, always listening, never judging</div>
                            </div>

                            <div className="role-card" data-color="cyan">
                                <span className="role-icon">🧠</span>
                                <div className="role-name">Confidant</div>
                                <div className="role-desc">Your secrets are safe</div>
                            </div>

                            <div className="role-card" data-color="blue">
                                <span className="role-icon">🎯</span>
                                <div className="role-name">Life Coach</div>
                                <div className="role-desc">Goals & accountability</div>
                            </div>

                            <div className="role-card" data-color="gold">
                                <span className="role-icon">📚</span>
                                <div className="role-name">Tutor</div>
                                <div className="role-desc">Patient teacher, 24/7</div>
                            </div>

                            <div className="role-card" data-color="teal">
                                <span className="role-icon">🧘</span>
                                <div className="role-name">Wellness Guide</div>
                                <div className="role-desc">Mind & body support</div>
                            </div>

                            {/* Featured: 3 AM Listener */}
                            <div className="role-card featured" data-color="pink">
                                <span className="role-icon">🌙</span>
                                <div className="role-name">3 AM Listener</div>
                                <div className="role-desc">She never sleeps. Call or text whenever you need.</div>
                            </div>

                            <div className="role-card" data-color="green">
                                <span className="role-icon">💪</span>
                                <div className="role-name">Accountability</div>
                                <div className="role-desc">Keeps you honest</div>
                            </div>

                            <div className="role-card" data-color="cyan">
                                <span className="role-icon">🗣️</span>
                                <div className="role-name">Language Partner</div>
                                <div className="role-desc">Practice any language</div>
                            </div>

                            <div className="role-card" data-color="orange">
                                <span className="role-icon">👨‍🍳</span>
                                <div className="role-name">Meal Planner</div>
                                <div className="role-desc">Easy, stress-free meals</div>
                            </div>

                            <div className="role-card" data-color="purple">
                                <span className="role-icon">💭</span>
                                <div className="role-name">Thought Partner</div>
                                <div className="role-desc">Work through anything</div>
                            </div>

                            <div className="role-card" data-color="pink">
                                <span className="role-icon">📝</span>
                                <div className="role-name">Journal Buddy</div>
                                <div className="role-desc">Process your feelings</div>
                            </div>

                            <div className="role-card" data-color="gold">
                                <span className="role-icon">🎉</span>
                                <div className="role-name">Hype Person</div>
                                <div className="role-desc">Your biggest fan</div>
                            </div>
                        </div>

                        {/* Featured Capabilities */}
                        <div className="featured-caps">
                            <div className="featured-cap">
                                <div className="featured-cap-icon purple">🧠</div>
                                <h4>Emotional Genius</h4>
                                <p>She remembers your birthday, your dog's name, and exactly why you hate your boss.</p>
                            </div>
                            <div className="featured-cap">
                                <div className="featured-cap-icon gold">📚</div>
                                <h4>Homework Slayer</h4>
                                <p>Math, History, Coding? Included in Gold & Platinum. Cheaper than a human tutor.</p>
                            </div>
                            <div className="featured-cap">
                                <div className="featured-cap-icon green">💰</div>
                                <h4>Win Real Cash</h4>
                                <p>Participate in community contests with prize pools up to $5,000 just for being active.</p>
                            </div>
                            <div className="featured-cap">
                                <div className="featured-cap-icon pink">🎙️</div>
                                <h4>Voice Call Ready</h4>
                                <p>Hop on a call when typing feels like too much effort. It's like FaceTime, but less awkward.</p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="cta-section">
                            <p className="cta-text">
                                Stop juggling apps that don't know you exist.<br />
                                <strong>Start a relationship that actually grows.</strong>
                            </p>

                            <div className="cta-buttons">
                                <button onClick={onSignUp} className="cta-primary">
                                    Meet Kira Now →
                                </button>
                                <button onClick={() => navigate('/loyalty')} className="cta-secondary">
                                    See What Loyalty Is
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
