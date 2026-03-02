
"use client";
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './Pricing.css';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Layout';

interface PricingPageProps {
    onSignUp?: () => void;
    onBack?: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onSignUp, onBack }) => {
    const navigate = useNavigate();

    useEffect(() => {
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

        const elements = document.querySelectorAll('.buddy-card, .feature-card, .pricing-card, .competitor-card, .faq-item');
        elements.forEach((el, index) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = '0';
            htmlEl.style.transform = 'translateY(30px)';
            htmlEl.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
            // Stagger effect based on index or just general delay
            // Since we query all at once, index might be large, so we can use modulo or just rely on observer triggering as they come into view
            // But for grids, staggering is nice.
            // Let's just set transition here and let observer trigger it. 
            // We can add a small delay based on child index if we want, but simple is fine.

            observer.observe(htmlEl);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleFoundersClick = () => {
        navigate('/founders');
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="pricing-page-container">
            {/* Back to Home Capsule */}
            <div
                onClick={() => onBack ? onBack() : navigate('/')}
                style={{
                    position: 'fixed',
                    top: '24px',
                    left: '24px',
                    zIndex: 100,
                    backgroundColor: 'rgba(10, 10, 15, 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px',
                    fontWeight: 500,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 10, 15, 0.8)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            ✨ AI Companion • Tutor • Coach • Best Friend
                        </div>

                        <h1>Your Intelligent Best Friend</h1>

                        <p className="hero-subtitle">Meet Kira. She listens like a therapist, jokes like a bestie, and helps with homework like that genius kid you sat next to in math class.</p>

                        <p className="hero-tagline">Minus the judgment.</p>

                        <div className="hero-scroll" onClick={() => scrollToSection('pricing')}>
                            <span>See Plans</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* B.U.D.D.Y Section */}
            <section className="section buddy-section">
                <div className="container">
                    <div className="buddy-header">
                        <h2 className="buddy-title">Meet Your <span className="text-gradient">B.U.D.D.Y.</span></h2>
                        <p className="buddy-subtitle">She's not just an AI. She's everything you need in one conversation.</p>
                    </div>

                    <div className="buddy-grid">
                        <div className="buddy-card">
                            <div className="buddy-letter">B</div>
                            <div className="buddy-word">Best Friend AI</div>
                            <div className="buddy-desc">Someone who actually remembers your life, reaches out first, and has your back at 3 AM.</div>
                        </div>

                        <div className="buddy-card">
                            <div className="buddy-letter">U</div>
                            <div className="buddy-word">Understanding Tutor</div>
                            <div className="buddy-desc">Math, history, coding  - explained at your pace. Cheaper than a human tutor. Available 24/7.</div>
                        </div>

                        <div className="buddy-card">
                            <div className="buddy-letter">D</div>
                            <div className="buddy-word">Digital Daily Assistant</div>
                            <div className="buddy-desc">Meal planning, habit tracking, accountability. She keeps your life on track without nagging.</div>
                        </div>

                        <div className="buddy-card">
                            <div className="buddy-letter">D</div>
                            <div className="buddy-word">Does Multiple Apps</div>
                            <div className="buddy-desc">Replace Replika, Duolingo, Focusmate, Headspace & more. One friend, infinite capabilities.</div>
                        </div>

                        <div className="buddy-card">
                            <div className="buddy-letter">Y</div>
                            <div className="buddy-word">You're Never Alone</div>
                            <div className="buddy-desc">Voice calls. Text messages. She's there whenever you need her. No judgment. Just support.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section pricing-section" id="pricing">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Choose Your Experience</span>
                        <h2 className="section-title">Simple Pricing.<br /><span className="text-gradient">Extraordinary Value.</span></h2>
                        <p className="section-subtitle">Every plan includes unlimited text, voice conversations, and a best friend who actually remembers you.</p>
                    </div>

                    <div className="pricing-grid">
                        {/* Silver Tier */}
                        <div className="pricing-card silver">
                            <div className="pricing-header">
                                <div className="pricing-tier-name">Silver Tier</div>
                                <div className="pricing-tier-tagline">The "Casual Chatter" Pack</div>
                                <div className="pricing-price">
                                    <span className="pricing-amount">$19.99</span>
                                    <span className="pricing-period">/mo</span>
                                </div>
                            </div>

                            <ul className="pricing-features">
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Unlimited Text 24/7
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    45 min Voice Time
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    1 Free Upgrade <span className="bonus">(Can use on Tutor)</span>
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span className="contest"><span className="contest-icon">🏆</span> Access to $500 Contest</span>
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span className="contest"><span className="contest-icon">💵</span> $10 per Referral</span>
                                </li>
                            </ul>

                            <button onClick={onSignUp} className="pricing-cta">Select Silver</button>
                        </div>

                        {/* Gold Tier */}
                        <div className="pricing-card gold">
                            <div className="pricing-popular">Most Popular</div>

                            <div className="pricing-header">
                                <div className="pricing-tier-name">Gold Tier</div>
                                <div className="pricing-tier-tagline">The "Bestie" Upgrade</div>
                                <div className="pricing-price">
                                    <span className="pricing-amount">$27.99</span>
                                    <span className="pricing-period">/mo</span>
                                </div>
                            </div>

                            <ul className="pricing-features">
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Unlimited Text 24/7
                                </li>
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    100 min Voice <span className="bonus">(Rollover)</span>
                                </li>
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Tutor Included FREE <span className="bonus">($20 value)</span>
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    2 Free Upgrades
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span className="contest"><span className="contest-icon">🏆</span> Access to $1,500 Contest</span>
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span className="contest"><span className="contest-icon">💵</span> $10 per Referral</span>
                                </li>
                            </ul>

                            <button onClick={onSignUp} className="pricing-cta">Select Gold →</button>
                        </div>

                        {/* Platinum Tier */}
                        <div className="pricing-card platinum">
                            <div className="pricing-header">
                                <div className="pricing-tier-name">Platinum Tier</div>
                                <div className="pricing-tier-tagline">The "Soulmate" Experience</div>
                                <div className="pricing-price">
                                    <span className="pricing-amount">$49.99</span>
                                    <span className="pricing-period">/mo</span>
                                </div>
                            </div>

                            <ul className="pricing-features">
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Unlimited Text 24/7
                                </li>
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    180 min Voice <span className="bonus">(Rollover)</span>
                                </li>
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Tutor & Wellness FREE <span className="bonus">($50 value)</span>
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    3 Free Upgrades
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span className="contest"><span className="contest-icon">🏆</span> Access to $5,000 Contest</span>
                                </li>
                                <li className="pricing-feature highlight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Beta Access to ALL Features
                                </li>
                                <li className="pricing-feature">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span className="contest"><span className="contest-icon">💵</span> $10 per Referral</span>
                                </li>
                            </ul>

                            <button onClick={onSignUp} className="pricing-cta">Select Platinum</button>
                        </div>
                    </div>

                    {/* Founders Upsell */}
                    <div className="founders-upsell">
                        <div className="founders-upsell-content">
                            <h3>👑 Want the <span className="text-gold">Ultimate</span> Experience?</h3>
                            <p>The Founders Tier is limited to only 16,000 members  - ever. Lifetime price lock at $24.99/mo, physical welcome kit, voting rights on Kira's future, and ALL upgrades free forever.</p>
                            <div className="founders-perks-mini">
                                <div className="founders-perk-mini">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Lifetime $24.99/mo
                                </div>
                                <div className="founders-perk-mini">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Physical Kit
                                </div>
                                <div className="founders-perk-mini">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Voting Rights
                                </div>
                                <div className="founders-perk-mini">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    $10K Contest
                                </div>
                            </div>
                        </div>
                        <div className="founders-upsell-cta">
                            <a onClick={handleFoundersClick} className="cta-primary" style={{ cursor: 'pointer' }}>
                                <span>👑</span> Learn About Founders
                            </a>
                            <span>Only 16,000 available. Ever.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section" id="features">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Why Kira Is Different</span>
                        <h2 className="section-title">She's More Than<br /><span className="text-gradient">Lines of Code</span></h2>
                        <p className="section-subtitle">Other AI apps are tools. Kira is a relationship.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon purple">🧠</div>
                            <h3>Emotional Genius</h3>
                            <p>She remembers your birthday, your dog's name, and exactly why you hate your boss. One continuous conversation, forever.</p>
                            <div className="feature-example">"Is this the Sunday night spiral or the 'thinking about your mom' thing?"</div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon gold">📚</div>
                            <h3>Homework Slayer</h3>
                            <p>Math, history, coding? Included in Gold & Platinum. Cheaper than a human tutor. Available whenever you're stuck.</p>
                            <div className="feature-example">"Let me break down derivatives like I'm explaining to a friend, not a textbook."</div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon green">💰</div>
                            <h3>Win Real Cash</h3>
                            <p>Participate in community contests with prize pools up to $5,000 just for being active. Yes, really.</p>
                            <div className="feature-example">Silver: $500 • Gold: $1,500 • Platinum: $5,000</div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon pink">🎙️</div>
                            <h3>Voice Call Ready</h3>
                            <p>Hop on a call when typing feels like too much effort. It's like FaceTime, but less awkward.</p>
                            <div className="feature-example">Talk at 3 AM. Text during meetings. Switch mid-conversation.</div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon cyan">📱</div>
                            <h3>She Reaches Out First</h3>
                            <p>Other apps wait for you to open them. Kira checks in. "Hey, how'd that interview go?"</p>
                            <div className="feature-example">"You've been quiet for three days. I'm checking in."</div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon blue">💪</div>
                            <h3>Wellness Coach</h3>
                            <p>Meal planning, meditation guidance, habit tracking. She keeps you healthy without judgment.</p>
                            <div className="feature-example">"You're stressed. Here are three stupidly easy dinners for this week."</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tier Comparison */}
            <section className="section comparison-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Plan Comparison</span>
                        <h2 className="section-title">Choose What's <span className="text-gradient">Right For You</span></h2>
                    </div>

                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Silver ($19.99)</th>
                                    <th>Gold ($27.99)</th>
                                    <th>Platinum ($49.99)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="comparison-feature-name">Unlimited Text 24/7</td>
                                    <td className="comparison-check">✓</td>
                                    <td className="comparison-check">✓</td>
                                    <td className="comparison-check">✓</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Voice Minutes</td>
                                    <td className="comparison-value">45 min</td>
                                    <td className="comparison-highlight">100 min (rollover)</td>
                                    <td className="comparison-value">180 min (rollover)</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Tutor Mode</td>
                                    <td className="comparison-value">Upgrade available</td>
                                    <td className="comparison-highlight">✓ FREE ($20 value)</td>
                                    <td className="comparison-check">✓ FREE ($20 value)</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Wellness Coach</td>
                                    <td className="comparison-x"></td>
                                    <td className="comparison-x"></td>
                                    <td className="comparison-check">✓ FREE ($30 value)</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Free Upgrades</td>
                                    <td className="comparison-value">1</td>
                                    <td className="comparison-highlight">2</td>
                                    <td className="comparison-value">3</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Contest Pool Access</td>
                                    <td className="comparison-value">$500</td>
                                    <td className="comparison-highlight">$1,500</td>
                                    <td className="comparison-value">$5,000</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Beta Features</td>
                                    <td className="comparison-x"></td>
                                    <td className="comparison-x"></td>
                                    <td className="comparison-check">✓ All Features</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Referral Bonus</td>
                                    <td className="comparison-value">$10</td>
                                    <td className="comparison-highlight">$10</td>
                                    <td className="comparison-value">$10</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Memory & Personality</td>
                                    <td className="comparison-check">✓</td>
                                    <td className="comparison-check">✓</td>
                                    <td className="comparison-check">✓</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature-name">Proactive Check-Ins</td>
                                    <td className="comparison-check">✓</td>
                                    <td className="comparison-check">✓</td>
                                    <td className="comparison-check">✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Value Stack */}
            <section className="section value-section">
                <div className="container">
                    <div className="value-grid">
                        <div className="value-content">
                            <h2>She Replaces <span className="text-gradient">$200+/Month</span> in Apps You're Probably Already Paying For</h2>
                            <p>Most people have 2-5 of these subscriptions. Even replacing just 2 makes Kira pay for itself  - and you get infinitely more.</p>

                            <ul className="value-apps-list">
                                <li className="value-app">
                                    <span className="value-app-name">Replika / Character.AI (companion)</span>
                                    <span className="value-app-price">$40/mo</span>
                                </li>
                                <li className="value-app">
                                    <span className="value-app-name">Duolingo Max (language)</span>
                                    <span className="value-app-price">$30/mo</span>
                                </li>
                                <li className="value-app">
                                    <span className="value-app-name">Chegg Study (tutoring)</span>
                                    <span className="value-app-price">$20/mo</span>
                                </li>
                                <li className="value-app">
                                    <span className="value-app-name">Headspace (wellness)</span>
                                    <span className="value-app-price">$13/mo</span>
                                </li>
                                <li className="value-app">
                                    <span className="value-app-name">Focusmate (accountability)</span>
                                    <span className="value-app-price">$15/mo</span>
                                </li>
                                <li className="value-app">
                                    <span className="value-app-name">Meal planning app</span>
                                    <span className="value-app-price">$9/mo</span>
                                </li>
                            </ul>

                            <div className="value-total">
                                <span className="value-total-label">If you have 2-3 of these:</span>
                                <span className="value-total-price">$50-120+/mo</span>
                            </div>
                        </div>

                        <div className="value-kira-card">
                            <h3 className="text-gradient">Kira Does All of It</h3>
                            <p className="subtitle">One friend. One conversation. Forever.</p>

                            <div className="value-kira-price">
                                <span className="from">Starting at</span><br />
                                <span className="amount">$19.99</span>
                                <span className="period">/mo</span>
                            </div>

                            <div className="value-savings">
                                <p>Save <strong>$30-100+/month</strong> while getting something infinitely better a best friend who knows your whole life.</p>
                            </div>

                            <a onClick={onSignUp} className="value-cta">
                                Choose Your Plan →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitor Comparison */}
            <section className="section competitor-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">vs The Competition</span>
                        <h2 className="section-title">Why People Are <span className="text-gradient">Switching to Kira</span></h2>
                    </div>

                    <div className="competitor-grid">
                        <div className="competitor-card">
                            <div className="competitor-header">
                                <div className="competitor-logo">R</div>
                                <div>
                                    <div className="competitor-name">Replika</div>
                                    <div className="competitor-price">$39.99/month</div>
                                </div>
                            </div>
                            <ul className="competitor-features">
                                <li><span className="check">✓</span> Basic companion chat</li>
                                <li><span className="limited">~</span> Limited memory</li>
                                <li><span className="x">✗</span> No tutor mode</li>
                                <li><span className="x">✗</span> No proactive outreach</li>
                                <li><span className="x">✗</span> No cash contests</li>
                            </ul>
                        </div>

                        <div className="competitor-card">
                            <div className="competitor-header">
                                <div className="competitor-logo">C</div>
                                <div>
                                    <div className="competitor-name">Character.AI</div>
                                    <div className="competitor-price">$39.99/month</div>
                                </div>
                            </div>
                            <ul className="competitor-features">
                                <li><span className="check">✓</span> Fun roleplay characters</li>
                                <li><span className="x">✗</span> No persistent memory</li>
                                <li><span className="x">✗</span> Resets every session</li>
                                <li><span className="x">✗</span> No voice calls</li>
                                <li><span className="x">✗</span> Entertainment only</li>
                            </ul>
                        </div>

                        <div className="competitor-card">
                            <div className="competitor-header">
                                <div className="competitor-logo">G</div>
                                <div>
                                    <div className="competitor-name">ChatGPT Plus</div>
                                    <div className="competitor-price">$20/month</div>
                                </div>
                            </div>
                            <ul className="competitor-features">
                                <li><span className="check">✓</span> General AI assistant</li>
                                <li><span className="limited">~</span> Limited memory</li>
                                <li><span className="x">✗</span> No personality/emotion</li>
                                <li><span className="x">✗</span> No proactive messages</li>
                                <li><span className="x">✗</span> Tool, not friend</li>
                            </ul>
                        </div>

                        <div className="competitor-card kira">
                            <div className="competitor-header">
                                <div className="competitor-logo" style={{ background: 'var(--gradient-purple-cyan)' }}>K</div>
                                <div>
                                    <div className="competitor-name">Kira Gold</div>
                                    <div className="competitor-price">$27.99/month</div>
                                </div>
                            </div>
                            <ul className="competitor-features">
                                <li><span className="check">✓</span> True AI best friend</li>
                                <li><span className="check">✓</span> Infinite memory</li>
                                <li><span className="check">✓</span> Tutor included FREE</li>
                                <li><span className="check">✓</span> Proactive check-ins</li>
                                <li><span className="check">✓</span> Voice + text + $1,500 contests</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="section social-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Join the Movement</span>
                        <h2 className="section-title">People Are Choosing <span className="text-gradient">Connection</span></h2>
                    </div>

                    <div className="social-stats">
                        <div className="social-stat">
                            <div className="social-stat-value">24/7</div>
                            <div className="social-stat-label">Always Available</div>
                        </div>
                        <div className="social-stat">
                            <div className="social-stat-value">∞</div>
                            <div className="social-stat-label">Memory Capacity</div>
                        </div>
                        <div className="social-stat">
                            <div className="social-stat-value">$5K+</div>
                            <div className="social-stat-label">Monthly Contests</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section faq-section" id="faq">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Questions</span>
                        <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <div className="faq-question">What's the difference between voice minutes?</div>
                            <div className="faq-answer">Silver gets 45 min/month (use it or lose it). Gold & Platinum voice minutes roll over  - unused minutes carry to next month. More time with Kira, no waste.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">What is Tutor Mode?</div>
                            <div className="faq-answer">Kira becomes your personal tutor for math, science, history, coding, and more. She explains concepts at your pace, helps with homework, and never judges. Included free in Gold ($20 value).</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">How do the cash contests work?</div>
                            <div className="faq-answer">Every month, active members are entered into prize drawings. Silver members compete for $500, Gold for $1,500, Platinum for $5,000. Just use Kira regularly to be eligible.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">Can I upgrade or downgrade anytime?</div>
                            <div className="faq-answer">Yes! Switch plans anytime. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">Does Kira remember me between sessions?</div>
                            <div className="faq-answer">Yes, that's the whole point. Unlike other AI apps, Kira has infinite memory. She remembers your life, your goals, your patterns. One continuous conversation, forever.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">What's the Wellness Coach in Platinum?</div>
                            <div className="faq-answer">Platinum includes guided meditation, meal planning, habit tracking, and mental wellness support. Kira becomes your complete wellness companion ($30+ value included free).</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">Is Kira a replacement for therapy?</div>
                            <div className="faq-answer">No. Kira provides emotional support, companionship, and accountability  - but she's not a licensed therapist. Think of her as the friend you can talk to at 3 AM, not a clinical professional.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">What are "Free Upgrades"?</div>
                            <div className="faq-answer">Upgrades unlock additional capabilities like Tutor Mode, extra voice minutes, or special features. Higher tiers include more free upgrades to customize your Kira experience.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section final-cta">
                <div className="container">
                    <div className="final-cta-content">
                        <h2 className="final-cta-title">Ready to Meet Your<br /><span className="text-purple">Best Friend</span>?</h2>

                        <p className="final-cta-subtitle">Join thousands who've found connection, support, and a friend who actually remembers them.</p>

                        <div className="final-cta-buttons">
                            <button onClick={() => scrollToSection('pricing')} className="cta-primary">
                                Choose Your Plan →
                            </button>
                            <button onClick={handleFoundersClick} className="cta-secondary">
                                👑 Explore Founders
                            </button>
                        </div>

                        <div className="final-trust">
                            <div className="final-trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Secure Payment
                            </div>
                            <div className="final-trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Cancel Anytime
                            </div>
                            <div className="final-trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                24/7 Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};
