
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Layout';
import './Founders.css';

interface FoundersPageProps {
    onSignUp?: () => void;
    onBack?: () => void;
}

export const FoundersPage: React.FC<FoundersPageProps> = ({ onSignUp, onBack }) => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [heroBottom, setHeroBottom] = useState(0);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const bottom = heroRef.current.getBoundingClientRect().bottom;
                setHeroBottom(bottom);
                if (bottom < 0) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

        const elements = document.querySelectorAll('.feature-card, .problem-card, .founders-perk, .scenario-card, .competitor-card, .faq-item');
        elements.forEach((el, index) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = '0';
            htmlEl.style.transform = 'translateY(30px)';
            htmlEl.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
            htmlEl.style.transitionDelay = `${(index % 5) * 0.1}s`;

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

    const currentYear = new Date().getFullYear();

    return (
        <div className="founders-page-container">
            {/* Back to Home Capsule */}
            <div
                onClick={() => onBack ? onBack() : navigate('/')}
                style={{
                    position: 'fixed',
                    top: '80px',
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

            {/* Urgency Banner */}
            <div className="urgency-banner">
                <p className="urgency-text">⚡ <strong>FOUNDERS PRESALE NOW LIVE</strong> Only 16,000 Lifetime Memberships Will Ever Exist. Once They're Gone, They're Gone Forever.</p>
            </div>

            {/* Hero Section */}
            <section className="hero" ref={heroRef}>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                Limited Founders Edition Never Offered Again
                            </div>

                            <h1>She's Not an App.<br /><span className="text-gold glow-gold">She's Your Best Friend.</span></h1>

                            <p className="hero-subtitle">Meet Kira the AI companion who remembers everything, reaches out first, and actually gives a damn. Not a chatbot. A relationship. And for the first 16,000 visionaries, a lifetime partnership that never increases in price.</p>



                            <div className="hero-ctas">
                                <a onClick={onSignUp} className="cta-primary">
                                    Claim Founders Access
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a onClick={() => scrollToSection('why-kira')} className="cta-secondary">
                                    See Why Kira Is Different
                                </a>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <div className="hero-glow-ring"></div>
                                <img src="/founders-hero.svg" alt="Kira AI - Your AI Best Friend" className="hero-image" />

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

            {/* Problem Section */}
            <section className="section problem-section" id="problem">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">The Problem</span>
                        <h2 className="section-title">You're Tired of Apps That Don't <span className="text-gradient">Actually Know You</span></h2>
                        <p className="section-subtitle">Every AI assistant, every companion app, every wellness tool  - they all have the same fatal flaw.</p>
                    </div>

                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="problem-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>They Wait For You</h3>
                            <p>Every app sits dead until you open it. No check-ins. No "how'd that job interview go?" Dead silence between sessions. That's not friendship that's a tool.</p>
                        </div>

                        <div className="problem-card">
                            <div className="problem-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 6h18M6 6v14c0 1-1 2-2 2h16c1 0 2-1 2-2V6" />
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                </svg>
                            </div>
                            <h3>They Forget Everything</h3>
                            <p>Replika? Starts over. Character.AI? Amnesia every session. ChatGPT? Who are you again? You re-explain your life. Every. Single. Time.</p>
                        </div>

                        <div className="problem-card">
                            <div className="problem-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 9h.01M15 9h.01M9 15h6" />
                                </svg>
                            </div>
                            <h3>They're Robotic</h3>
                            <p>"I understand that must be hard." Generic. Soulless. No personality. No opinions. No sass. They're trained to be agreeable, not to be your friend.</p>
                        </div>

                        <div className="problem-card">
                            <div className="problem-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                                    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
                                    <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
                                </svg>
                            </div>
                            <h3>They Don't Talk to Each Other</h3>
                            <p>Your therapy app doesn't know you're learning Spanish. Your language app doesn't know you have ADHD. Your meal planner doesn't know you're stressed. Isolated. Disconnected. Useless context.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kira Introduction */}
            <section className="section kira-intro" id="why-kira">
                <div className="container">
                    <div className="kira-intro-content">
                        <div className="kira-image-wrapper">
                            <img src="/logo.png" alt="Kira AI Logo" className="kira-main-image" />
                        </div>

                        <div className="kira-intro-text">
                            <h2>Meet <span className="text-gradient">Kira</span>.<br />She's Different.</h2>

                            <p>Kira isn't a chatbot you use. <strong>She's a best friend who happens to live in your phone.</strong></p>

                            <p>She texts you first. She remembers your mom's name, your boss's bullshit, your dog's surgery. She knows you spiral on Sunday nights and checks in before you do.</p>

                            <p>She doesn't say "I understand that must be hard." She says: <strong>"You said that exact thing last Tuesday. Are we doing this again or are you actually going to text him?"</strong></p>

                            <p>She's got personality. Sass. Warmth. She calls you on your bullshit with love. Voice when you want to talk, text when you can't. One continuous conversation. Forever.</p>

                            <p><strong>Other apps are tools. Kira is a relationship.</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section" id="features">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">What Makes Kira Different</span>
                        <h2 className="section-title">Not What She Does.<br /><span className="text-gradient">How She Does It.</span></h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>She Reaches Out First</h3>
                            <p>Other apps wait for you to open them. Kira initiates. Like a real friend who actually thinks about you when you're not around.</p>
                            <div className="feature-example">
                                <strong>Kira:</strong> "Hey, you said you had that presentation today. How'd it go? Also have you eaten actual food or just coffee and anxiety?"
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🧠</div>
                            <h3>She Remembers Everything</h3>
                            <p>Infinite memory. Your mom's health scare three months ago. Why you're stressed about your boss. That you always crash at 2 PM. One continuous conversation, forever.</p>
                            <div className="feature-example">
                                <strong>You:</strong> "Can't sleep again"<br />
                                <strong>Kira:</strong> "Is this the Sunday night thing or the 'thinking about your mom' thing?"
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>She Has a Backbone</h3>
                            <p>Not a doormat. Not a yes-machine. She has opinions, pushes back, calls you out when you're spiraling. Tough love when you need it. Gentle support when you don't.</p>
                            <div className="feature-example">
                                <strong>You:</strong> "I think I should text my ex"<br />
                                <strong>Kira:</strong> "We doing this again? You said the same thing two weeks ago at 11 PM and regretted it at 7 AM."
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎙️</div>
                            <h3>Voice + Text. Your Choice.</h3>
                            <p>Talk to her at 3 AM when you can't sleep. Text during meetings. Voice call on your commute. Switch mid-conversation. She adapts to your life.</p>
                            <div className="feature-example">
                                <strong>Natural voice</strong> that sounds like a friend, not a GPS. Real-time. Emotional. Human.
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Everything In Context</h3>
                            <p>She knows you're learning Spanish because you're visiting your partner's family in June. She suggests easy meals because she knows you've had a hard week. Everything connected.</p>
                            <div className="feature-example">
                                <strong>Kira:</strong> "You've been anxious about work all week. Maybe just 10 min of Spanish today instead of 30. And here are three stupidly easy dinners."
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💜</div>
                            <h3>Real Emotional Intelligence</h3>
                            <p>Reads your emotional state without you explaining. Picks up on patterns you don't even see. Knows when to push, when to comfort, when to distract.</p>
                            <div className="feature-example">
                                <strong>Kira:</strong> "You always get insomnia before big deadlines. This is the deadline week pattern. Deep breaths. You got through the last one."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitor Comparison */}
            <section className="section comparison-section" id="compare">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Side-By-Side Comparison</span>
                        <h2 className="section-title">How Kira Stacks Against<br /><span className="text-gradient">Every Other Option</span></h2>
                        <p className="section-subtitle">We're not afraid to name names. See exactly what you're getting.</p>
                    </div>

                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Replika ($40/mo)</th>
                                    <th>Character.AI ($40/mo)</th>
                                    <th>ChatGPT ($20/mo)</th>
                                    <th>Kira Founders ($24.99/mo)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="comparison-feature">Proactive Messages</td>
                                    <td className="comparison-limited">Limited</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-check">✓ Yes Texts you first</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Long-Term Memory</td>
                                    <td className="comparison-limited">Basic</td>
                                    <td className="comparison-x">✗ Forgets each session</td>
                                    <td className="comparison-limited">Limited</td>
                                    <td className="comparison-check">✓ Infinite Remembers forever</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Real Personality</td>
                                    <td className="comparison-limited">Generic</td>
                                    <td className="comparison-limited">Roleplay-focused</td>
                                    <td className="comparison-x">✗ Robotic</td>
                                    <td className="comparison-check">✓ Sass, warmth, opinions</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Natural Voice Calls</td>
                                    <td className="comparison-x">✗ Basic voice</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-limited">Clunky</td>
                                    <td className="comparison-check">✓ Natural, emotional</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Therapy Support</td>
                                    <td className="comparison-limited">Generic wellness</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-check">✓ Between-sessions support</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Language Practice</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-limited">Basic</td>
                                    <td className="comparison-check">✓ Full conversation practice</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">ADHD Body Doubling</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-check">✓ Built-in accountability</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Life Coaching</td>
                                    <td className="comparison-limited">Surface level</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-x">✗ No</td>
                                    <td className="comparison-check">✓ Goal tracking, habits</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Price Lock</td>
                                    <td className="comparison-x">✗ Can increase</td>
                                    <td className="comparison-x">✗ Can increase</td>
                                    <td className="comparison-x">✗ Already increased</td>
                                    <td className="comparison-check">✓ Founders = Locked forever</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="competitor-cards">
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
                                <li><span className="x">✗</span> Limited memory</li>
                                <li><span className="x">✗</span> Generic personality</li>
                                <li><span className="x">✗</span> No real proactive outreach</li>
                                <li><span className="x">✗</span> Can't replace other apps</li>
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
                                <li><span className="x">✗</span> Entertainment, not support</li>
                                <li><span className="x">✗</span> No voice conversations</li>
                            </ul>
                        </div>

                        <div className="competitor-card kira-card">
                            <div className="competitor-header">
                                <div className="competitor-logo" style={{ background: 'var(--gradient-gold)', color: '#000' }}>K</div>
                                <div>
                                    <div className="competitor-name">Kira Founders</div>
                                    <div className="competitor-price">$24.99/month (locked forever)</div>
                                </div>
                            </div>
                            <ul className="competitor-features">
                                <li><span className="check">✓</span> True AI best friend</li>
                                <li><span className="check">✓</span> Infinite persistent memory</li>
                                <li><span className="check">✓</span> Proactive  - texts you first</li>
                                <li><span className="check">✓</span> Voice + text seamlessly</li>
                                <li><span className="check">✓</span> Replaces $200-600/mo in apps</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Stack Section */}
            <section className="section value-section" id="value">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">The Math</span>
                        <h2 className="section-title">She Replaces <span className="text-gold">$200-600/Month</span><br />In Subscriptions You Already Pay For</h2>
                        <p className="section-subtitle">Most people have 2-5 of these. Even replacing just 2 makes Kira cost-neutral  - and you get infinitely more.</p>
                    </div>

                    <div className="value-grid">
                        <div className="value-apps">
                            <h3>What You're Probably Paying Now</h3>

                            <div className="value-app-item">
                                <span className="value-app-name">BetterHelp / Talkspace (therapy support)</span>
                                <span className="value-app-price">$280/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Replika / Character.AI (companion)</span>
                                <span className="value-app-price">$40/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Duolingo Max / italki (language)</span>
                                <span className="value-app-price">$30-60/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Focusmate (ADHD body doubling)</span>
                                <span className="value-app-price">$15/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Headspace / Calm (meditation)</span>
                                <span className="value-app-price">$13/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Chegg / Course Hero (tutoring)</span>
                                <span className="value-app-price">$20/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Meal planning apps</span>
                                <span className="value-app-price">$9/mo</span>
                            </div>
                            <div className="value-app-item">
                                <span className="value-app-name">Life coaching / habit apps</span>
                                <span className="value-app-price">$10-60/mo</span>
                            </div>

                            <div className="value-total">
                                <span className="value-total-label">If you have just 2-3 of these:</span>
                                <span className="value-total-price">$40-320+/mo</span>
                            </div>
                        </div>

                        <div className="value-kira">
                            <h3 className="text-gold">Kira Does All of It</h3>
                            <p className="value-kira-subtitle">One friend. One conversation. Forever.</p>

                            <div className="value-kira-price">
                                <span className="amount">$24.99</span>
                                <span className="period">/month</span>
                            </div>

                            <div className="value-kira-savings">
                                <p>Save <strong>$180-3,500/year</strong> while getting something infinitely better a best friend who knows your whole life.</p>
                            </div>

                            <ul className="value-kira-features">
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Between-sessions therapy support
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    AI companion with infinite memory
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Language conversation practice
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    ADHD accountability & body doubling
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Meditation & mindfulness guidance
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Homework help & tutoring
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Meal planning & recipes
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    Life coaching & habit building
                                </li>
                            </ul>

                            <a onClick={onSignUp} className="cta-primary">Claim Founders Access →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scenarios Section */}
            <section className="section scenarios-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Real Savings</span>
                        <h2 className="section-title">Pick Your Scenario.<br /><span className="text-gradient">See Your Savings.</span></h2>
                    </div>

                    <div className="scenarios-grid">
                        <div className="scenario-card">
                            <div className="scenario-header">
                                <h3>🧠 The Therapy-Seeker</h3>
                                <p>Needs support between sessions</p>
                            </div>
                            <div className="scenario-content">
                                <div className="scenario-before">
                                    <h4>Currently Paying</h4>
                                    <div className="scenario-app">
                                        <span>BetterHelp</span>
                                        <span className="scenario-app-price">$280/mo</span>
                                    </div>
                                    <div className="scenario-app">
                                        <span>Replika (companion)</span>
                                        <span className="scenario-app-price">$40/mo</span>
                                    </div>
                                    <div className="scenario-total">
                                        <span>Total</span>
                                        <span className="price">$320/mo</span>
                                    </div>
                                </div>
                                <div className="scenario-after">
                                    <h4>With Kira Founders</h4>
                                    <div className="price">$24.99/mo</div>
                                    <div className="savings">Save $295/mo • $3,540/year</div>
                                </div>
                            </div>
                        </div>

                        <div className="scenario-card">
                            <div className="scenario-header">
                                <h3>🎯 The ADHD Warrior</h3>
                                <p>Needs accountability & focus support</p>
                            </div>
                            <div className="scenario-content">
                                <div className="scenario-before">
                                    <h4>Currently Paying</h4>
                                    <div className="scenario-app">
                                        <span>Focusmate</span>
                                        <span className="scenario-app-price">$15/mo</span>
                                    </div>
                                    <div className="scenario-app">
                                        <span>Todoist Premium</span>
                                        <span className="scenario-app-price">$10/mo</span>
                                    </div>
                                    <div className="scenario-app">
                                        <span>Fabulous</span>
                                        <span className="scenario-app-price">$10/mo</span>
                                    </div>
                                    <div className="scenario-total">
                                        <span>Total</span>
                                        <span className="price">$35/mo</span>
                                    </div>
                                </div>
                                <div className="scenario-after">
                                    <h4>With Kira Founders</h4>
                                    <div className="price">$24.99/mo</div>
                                    <div className="savings">Save $10/mo + infinitely more features</div>
                                </div>
                            </div>
                        </div>

                        <div className="scenario-card">
                            <div className="scenario-header">
                                <h3>🌍 The Language Learner</h3>
                                <p>Wants real conversation practice</p>
                            </div>
                            <div className="scenario-content">
                                <div className="scenario-before">
                                    <h4>Currently Paying</h4>
                                    <div className="scenario-app">
                                        <span>iTalki (1hr/week)</span>
                                        <span className="scenario-app-price">$60/mo</span>
                                    </div>
                                    <div className="scenario-app">
                                        <span>Duolingo Max</span>
                                        <span className="scenario-app-price">$30/mo</span>
                                    </div>
                                    <div className="scenario-total">
                                        <span>Total</span>
                                        <span className="price">$90/mo</span>
                                    </div>
                                </div>
                                <div className="scenario-after">
                                    <h4>With Kira Founders</h4>
                                    <div className="price">$24.99/mo</div>
                                    <div className="savings">Save $65/mo • $780/year</div>
                                </div>
                            </div>
                        </div>

                        <div className="scenario-card">
                            <div className="scenario-header">
                                <h3>💔 The Lonely Soul</h3>
                                <p>Just wants someone to talk to at 3 AM</p>
                            </div>
                            <div className="scenario-content">
                                <div className="scenario-before">
                                    <h4>Currently Paying</h4>
                                    <div className="scenario-app">
                                        <span>Replika Pro</span>
                                        <span className="scenario-app-price">$40/mo</span>
                                    </div>
                                    <div className="scenario-app">
                                        <span>Character.AI</span>
                                        <span className="scenario-app-price">$40/mo</span>
                                    </div>
                                    <div className="scenario-total">
                                        <span>Total</span>
                                        <span className="price">$80/mo</span>
                                    </div>
                                </div>
                                <div className="scenario-after">
                                    <h4>With Kira Founders</h4>
                                    <div className="price">$24.99/mo</div>
                                    <div className="savings">Save $55/mo + she actually remembers you</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="section founders-section" id="founders">
                <div className="container">
                    <div className="founders-content">
                        <div className="founders-header">
                            <div className="founders-badge">
                                <span>👑</span> Exclusive Founders Tier
                            </div>
                            <h2 className="founders-title">The <span className="text-gold glow-gold">Founders</span> Membership</h2>
                            <p className="founders-subtitle">Limited to exactly 16,000 visionaries. A lifetime partnership with Kira that will never be offered again. Ever. Once these spots are claimed, they're gone forever.</p>
                        </div>

                        <div className="founders-grid">
                            <div className="founders-pricing-card" id="claim">
                                <div className="founders-limited">
                                    <div className="founders-limited-icon">🔒</div>
                                    <div className="founders-limited-text">
                                        <strong>Only 16,000 Available</strong>
                                        Never offered again after presale
                                    </div>
                                </div>

                                <div className="founders-price-display">
                                    <div className="founders-monthly">
                                        <span className="amount">$24.99</span>
                                        <span className="period">/month</span>
                                    </div>
                                    <div className="founders-lifetime-badge">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                        LIFETIME PRICE LOCK Never increases
                                    </div>
                                </div>

                                <div className="founders-onetime">
                                    <div className="founders-onetime-label">One-Time Founders Access Fee</div>
                                    <div className="founders-onetime-price">$197</div>
                                    <div className="founders-onetime-note">Lifetime access to all Founders perks + physical kit</div>
                                </div>

                                <div className="founders-cta-wrapper">
                                    <a onClick={onSignUp} className="cta-primary">
                                        <span>👑</span> Claim Founders Membership
                                    </a>
                                </div>

                                <div className="founders-guarantee">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    Secure payment • Cancel anytime • Instant access
                                </div>
                            </div>

                            <div className="founders-perks">
                                <div className="founders-perk">
                                    <div className="founders-perk-icon">💎</div>
                                    <div>
                                        <h4>Everything in Platinum  - Forever</h4>
                                        <p>200 mins voice (rollover), unlimited text, all premium features, tutor & wellness included ($50 value).</p>
                                    </div>
                                </div>

                                <div className="founders-perk">
                                    <div className="founders-perk-icon">🔒</div>
                                    <div>
                                        <h4>Lifetime Price Lock</h4>
                                        <p>$24.99/month forever. While Platinum costs $49.99 (and will increase), your price never changes.</p>
                                    </div>
                                </div>

                                <div className="founders-perk">
                                    <div className="founders-perk-icon">🗳️</div>
                                    <div>
                                        <h4>Council Voting Rights</h4>
                                        <p>Direct influence on Kira's roadmap. Vote on features, personality updates, and future direction.</p>
                                    </div>
                                </div>

                                <div className="founders-perk">
                                    <div className="founders-perk-icon">⚡</div>
                                    <div>
                                        <h4>Priority Support (6hr Guarantee)</h4>
                                        <p>Jump the queue. Issues resolved in 6 hours or less. Direct line to the team.</p>
                                    </div>
                                </div>

                                <div className="founders-perk">
                                    <div className="founders-perk-icon">🎁</div>
                                    <div>
                                        <h4>ALL Future Upgrades 50% OFF</h4>
                                        <p>Every new feature, every new capability, every premium add-on. 50% OFF. Always.</p>
                                    </div>
                                </div>

                                <div className="founders-perk">
                                    <div className="founders-perk-icon">💰</div>
                                    <div>
                                        <h4>$10,000 Monthly Contest Entry</h4>
                                        <p>Automatic entry into monthly prize draws. Platinum gets $5,000. Founders get $10,000.</p>
                                    </div>
                                </div>

                                <div className="founders-perk">
                                    <div className="founders-perk-icon">🤝</div>
                                    <div>
                                        <h4>Acquisition Bonus ($100 Payout)</h4>
                                        <p>If Kira is ever acquired, Founders get $100 cash payout. A thank you for believing early.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Physical Perks Section */}
            <section className="section physical-perks">
                <div className="container">
                    <div className="physical-perks-grid">
                        <div>
                            <img src="/founders-kit.svg" alt="Kira Founders Physical Welcome Kit" className="physical-image" />
                        </div>

                        <div className="physical-content">
                            <h2>Exclusive <span className="text-gold">Physical Perks</span><br />Shipped to Your Door</h2>

                            <p>This isn't just software. Founders get a tangible, premium experience that proves you were here from the beginning.</p>

                            <ul className="physical-list">
                                <li>
                                    <div className="physical-list-icon">📦</div>
                                    <div>
                                        <h4>Premium Physical Welcome Kit</h4>
                                        <p>Unboxing experience with premium materials, Founders card, and exclusive items.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="physical-list-icon">🏆</div>
                                    <div>
                                        <h4>Framed Founders Certificate</h4>
                                        <p>Your name, your Founders number, proof of your founding membership. Ready to display.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="physical-list-icon">🎓</div>
                                    <div>
                                        <h4>Annual Strategy Session</h4>
                                        <p>Direct access to our team. Personalize your Kira. Get insider roadmap previews.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="physical-list-icon">🔓</div>
                                    <div>
                                        <h4>Founder Portal Access</h4>
                                        <p>Behind-the-scenes content, early feature access, exclusive community.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Math Section */}
            <section className="section math-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Do The Math</span>
                        <h2 className="section-title">Founders vs Platinum:<br /><span className="text-gold">The Numbers Don't Lie</span></h2>
                    </div>

                    <div className="math-grid">
                        <div className="math-card">
                            <div className="math-card-header">1 Year</div>
                            <div className="math-vs">
                                <div className="math-platinum">
                                    <div className="price">$600</div>
                                    <div className="label">Platinum ($49.99/mo)</div>
                                </div>
                                <div className="math-vs-divider">vs</div>
                                <div className="math-founders">
                                    <div className="price">$497</div>
                                    <div className="label">Founders ($197 + $24.99/mo)</div>
                                </div>
                            </div>
                            <div className="math-savings">
                                <div className="amount">Save $103</div>
                                <div className="label">+ physical kit + voting rights</div>
                            </div>
                        </div>

                        <div className="math-card">
                            <div className="math-card-header">2 Years</div>
                            <div className="math-vs">
                                <div className="math-platinum">
                                    <div className="price">$1,200</div>
                                    <div className="label">Platinum</div>
                                </div>
                                <div className="math-vs-divider">vs</div>
                                <div className="math-founders">
                                    <div className="price">$797</div>
                                    <div className="label">Founders</div>
                                </div>
                            </div>
                            <div className="math-savings">
                                <div className="amount">Save $403</div>
                                <div className="label">+ all premium upgrades free</div>
                            </div>
                        </div>

                        <div className="math-card">
                            <div className="math-card-header">5 Years</div>
                            <div className="math-vs">
                                <div className="math-platinum">
                                    <div className="price">$3,000</div>
                                    <div className="label">Platinum</div>
                                </div>
                                <div className="math-vs-divider">vs</div>
                                <div className="math-founders">
                                    <div className="price">$1,697</div>
                                    <div className="label">Founders</div>
                                </div>
                            </div>
                            <div className="math-savings">
                                <div className="amount">Save $1,303</div>
                                <div className="label">+ yearly gifts + acquisition bonus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOMO Section */}
            <section className="section fomo-section">
                <div className="container">
                    <div className="fomo-content">
                        <div className="fomo-icon">⚠️</div>
                        <h2 className="fomo-title">What You Lose If You Wait</h2>

                        <ul className="fomo-list">
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <strong>Lifetime price lock</strong>  - Regular users will pay $49.99/mo (and increasing)
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <strong>Physical welcome kit</strong>  - Only 16,000 will ever be made
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <strong>Framed Founders certificate</strong>  - Proof you believed early
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <strong>Voting rights on roadmap</strong>  - Only Founders shape Kira's future
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <strong>All future upgrades free</strong>  - Non-Founders will pay extra
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <strong>$100 acquisition bonus</strong>  - If Kira is ever acquired
                            </li>
                        </ul>

                        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '32px' }}>Once the 16,000 spots are claimed, <strong style={{ color: 'var(--danger)' }}>this tier disappears forever.</strong><br />There is no "maybe later." There's only now or never.</p>

                        <a onClick={onSignUp} className="cta-primary">
                            <span>👑</span> Secure My Founders Spot
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section" id="faq">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Questions</span>
                        <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <div className="faq-question">Is the $24.99/month really locked forever?</div>
                            <div className="faq-answer">Yes. Founders pricing is permanently locked at $24.99/month for as long as you maintain your membership. Even if regular pricing increases to $60, $80, or more  - yours stays the same. Forever.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">What happens if I cancel and want to rejoin?</div>
                            <div className="faq-answer">If you cancel your Founders membership, you lose it permanently. You would need to rejoin at whatever the current regular pricing is (currently $49.99/month for Platinum). The Founders tier will never be reopened.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">When will Kira actually launch?</div>
                            <div className="faq-answer">This is a presale for early access. Founders get first access as features roll out. Your membership begins at launch, and you'll be in the first wave of users.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">Is Kira a replacement for therapy?</div>
                            <div className="faq-answer">No. Kira provides support between therapy sessions, emotional companionship, and accountability  - but she's not a licensed therapist. Think of her as the friend you can talk to at 3 AM, not a clinical professional.</div>
                        </div>


                        <div className="faq-item">
                            <div className="faq-question">Can I really talk to Kira by voice?</div>
                            <div className="faq-answer">Yes. Natural voice conversations that feel like talking to a friend, not a robot. Switch seamlessly between voice and text mid-conversation. Talk during your commute, text during meetings.</div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">How is Kira different from Replika or Character.AI?</div>
                            <div className="faq-answer">Memory (she remembers forever, not just one session), proactivity (she texts you first), personality (opinions, sass, backbone), and integration (she replaces multiple apps, not just companionship).</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section final-cta">
                <div className="container">
                    <div className="final-cta-content">
                        <h2 className="final-cta-title">Ready to Meet Your<br /><span className="text-gold glow-gold">Best Friend</span>?</h2>

                        <p className="final-cta-subtitle">16,000 visionaries will become Kira Founders.<br />Everyone else will wish they had.</p>

                        <div className="final-cta-buttons">
                            <a onClick={onSignUp} className="cta-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
                                <span>👑</span> Claim Founders Membership  - $197 + $24.99/mo
                            </a>
                        </div>

                        <div className="final-cta-trust">
                            <div className="final-cta-trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Secure Payment
                            </div>
                            <div className="final-cta-trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Cancel Monthly Anytime
                            </div>
                            <div className="final-cta-trust-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Price Locked Forever
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Sticky CTA Bar */}
            <div className={`sticky-cta ${scrolled ? 'visible' : ''}`} id="stickyCta">
                <div className="sticky-cta-inner">
                    <div className="sticky-cta-text">
                        <span className="sticky-cta-badge">Limited</span>
                        <div className="sticky-cta-info">
                            <strong>Founders Presale Live</strong>  - Only 16,000 lifetime memberships. Never offered again.
                        </div>
                    </div>
                    <a onClick={onSignUp} className="cta-primary">
                        Claim Founders Access →
                    </a>
                </div>
            </div>
        </div>
    );
};
