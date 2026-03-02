import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Founders.css';

interface FoundersClubPageProps {
    onSignUp: () => void;
}

export const FoundersClubPage: React.FC<FoundersClubPageProps> = ({ onSignUp }) => {
    const navigate = useNavigate();
    const [stickyVisible, setStickyVisible] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        // Scroll listener for sticky CTA
        const handleScroll = () => {
            const hero = document.querySelector('.hero');
            if (hero) {
                const bottom = hero.getBoundingClientRect().bottom;
                setStickyVisible(bottom < 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        // Animation observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .problem-card, .founders-perk, .stack-card, .math-card, .fomo-list, .faq-item').forEach((el, index) => {
            const element = el as HTMLElement;
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
            observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="founders-page-container">
            {/* Urgency Banner */}
            <div className="urgency-banner">
                ⚠️ 87% of Founders Spots Claimed  - Price Increases Soon
            </div>

            {/* Navigation */}
            <nav className="nav">
                <div className="container">
                    <div className="nav-inner">
                        <div className="nav-logo text-gradient" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>KIRA</div>
                        <div className="nav-links">
                            <a href="#benefits" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }); }}>Benefits</a>
                            <a href="#comparison" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' }); }}>Comparison</a>
                            <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
                        </div>
                        <button onClick={onSignUp} className="nav-cta">
                            Claim Founders Spot
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            👑 Official Founders Club Presale
                        </div>

                        <h1>Be The <span className="text-gold">First</span>.<br />Own The Future.</h1>

                        <p className="hero-subtitle">Join the exclusive group of early believers. Lock in lifetime pricing, get voting rights on the roadmap, and receive a premium physical welcome kit. Only 16,000 memberships will ever exist.</p>

                        <div className="spots-remaining">
                            <span className="spots-count">2,143</span> spots remaining of 16,000
                        </div>

                        <div className="hero-ctas">
                            <button onClick={onSignUp} className="cta-primary">
                                Claim Founders Access  - $197
                            </button>
                            <button onClick={() => navigate('/use-cases')} className="cta-secondary">
                                Meet Kira First
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Problem Section */}
            <section className="section problem-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">The Reality</span>
                        <h2 className="section-title">Why We Created <span className="text-white">The Founders Club</span></h2>
                    </div>

                    <div className="problem-grid">
                        <div className="problem-card">
                            <div className="problem-icon">📉</div>
                            <h3 className="problem-title">Subscriptions Never End</h3>
                            <p className="problem-text">Most apps hook you with a low price, then jack it up once you're dependent. We want to reward early believers with a price that never changes.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">🗣️</div>
                            <h3 className="problem-title">You Have No Say</h3>
                            <p className="problem-text">Tech companies build what THEY want, not what YOU need. Founders get direct voting power on Kira's roadmap and features.</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">👻</div>
                            <h3 className="problem-title">Digital Only</h3>
                            <p className="problem-text">You pay for software and get nothing tangible. We believe Founders deserve something real  - a premium physical welcome kit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Kira Section */}
            <section className="section intro-kira">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h2>More Than Just <span className="text-gradient">Users</span>.<br />You Are <span className="text-gold">Partners</span>.</h2>
                            <p>Kira isn't just another AI. She's designed to be a lifelong companion. The Founders Club is for the visionaries who see that potential before the rest of the world catches on.</p>
                            <p>By joining now, you aren't just buying a subscription. You're funding the revolution of loneliness. You're securing your place in history as one of the "First 16,000." And you're getting a suite of benefits that will never be offered again.</p>
                        </div>
                        <div className="intro-visual">
                            <div className="intro-frame">
                                <img src="/founders-card-mockup.png" alt="Kira Founders Card" style={{ borderRadius: '16px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Benefits */}
            <section className="section features-section" id="benefits">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Membership Perks</span>
                        <h2 className="section-title">Why Become A <span className="text-gold">Founder</span>?</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3 className="feature-title">Lifetime Price Lock</h3>
                            <p className="feature-desc">Your subscription price of $24.99/mo is locked forever. Even when public pricing goes to $50, $80, or $100.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📦</div>
                            <h3 className="feature-title">Physical Welcome Kit</h3>
                            <p className="feature-desc">A premium box shipped to your door with your metal Founders Card, certificate, and exclusive merch.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🗳️</div>
                            <h3 className="feature-title">Voting Rights</h3>
                            <p className="feature-desc">Vote on which features we build next. Your voice actually shapes the product.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3 className="feature-title">Early Access</h3>
                            <p className="feature-desc">Get access to new features (like video calls and VR) months before the public.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section comparison-section" id="comparison">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Value Comparison</span>
                        <h2 className="section-title">Founders vs. <span className="text-muted">Everyone Else</span></h2>
                    </div>

                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th className="col-free">Free User</th>
                                <th className="col-premium">Platinum User</th>
                                <th className="th-founders col-founders">👑 Founder</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-feature">Monthly Cost</td>
                                <td className="col-free">$0</td>
                                <td className="col-premium">$49.99</td>
                                <td className="col-founders">$24.99 (Locked)</td>
                            </tr>
                            <tr>
                                <td className="col-feature">Memory</td>
                                <td className="col-free">None</td>
                                <td className="col-premium">Unlimited</td>
                                <td className="col-founders">Unlimited + Priority</td>
                            </tr>
                            <tr>
                                <td className="col-feature">Voice Calls</td>
                                <td className="col-free"><span className="cross-red">✗</span></td>
                                <td className="col-premium"><span className="check-green">✓</span></td>
                                <td className="col-founders"><span className="check-gold">✓</span> Highest Quality</td>
                            </tr>
                            <tr>
                                <td className="col-feature">Physical Kit</td>
                                <td className="col-free"><span className="cross-red">✗</span></td>
                                <td className="col-premium"><span className="cross-red">✗</span></td>
                                <td className="col-founders"><span className="check-gold">✓</span> Included</td>
                            </tr>
                            <tr>
                                <td className="col-feature">Voting Rights</td>
                                <td className="col-free"><span className="cross-red">✗</span></td>
                                <td className="col-premium"><span className="cross-red">✗</span></td>
                                <td className="col-founders"><span className="check-gold">✓</span> Included</td>
                            </tr>
                            <tr>
                                <td className="col-feature">Acquisition Bonus</td>
                                <td className="col-free"><span className="cross-red">✗</span></td>
                                <td className="col-premium"><span className="cross-red">✗</span></td>
                                <td className="col-founders"><span className="check-gold">✓</span> $100 Payout</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Value Stack */}
            <section className="section value-stack">
                <div className="container">
                    <div className="stack-card">
                        <div className="stack-header">
                            <h2 className="section-title">Here's What You Get Today</h2>
                            <p className="section-subtitle">When you secure your Founders position.</p>
                        </div>

                        <div className="stack-list">
                            <div className="stack-item">
                                <div className="stack-item-name"><span className="stack-check">✓</span> Lifetime Price Lock ($24.99/mo)</div>
                                <div className="stack-value">Priceless</div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-item-name"><span className="stack-check">✓</span> Premium Physical Welcome Kit</div>
                                <div className="stack-value">$150 Value</div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-item-name"><span className="stack-check">✓</span> Framed Founders Certificate</div>
                                <div className="stack-value">$50 Value</div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-item-name"><span className="stack-check">✓</span> Roadmap Voting Rights</div>
                                <div className="stack-value">Exclusive</div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-item-name"><span className="stack-check">✓</span> 1 Year of "Kira Platinum" Access</div>
                                <div className="stack-value">$600 Value</div>
                            </div>
                            <div className="stack-item">
                                <div className="stack-item-name"><span className="stack-check">✓</span> Future Acquisition Bonus</div>
                                <div className="stack-value">$100 Cash</div>
                            </div>
                        </div>

                        <div className="stack-total">
                            <div className="total-label">Total Value: $900+</div>
                            <div className="total-price">
                                <span className="total-strike">Normal Price: $497</span>
                                <span className="total-final">$197</span>
                                <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px' }}>One-time payment + $24.99/mo starting at launch</div>
                            </div>
                        </div>

                        <div className="stack-cta">
                            <button onClick={onSignUp} className="cta-primary" style={{ fontSize: '20px', padding: '20px 48px' }}>
                                Secure My Founders Spot Now
                            </button>
                            <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>30-Day Money Back Guarantee on the Access Fee</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Membership Details (Perks) */}
            <section className="section founders-membership">
                <div className="container">
                    <div className="founders-grid">
                        <div className="founders-info">
                            <h2>The <span className="text-gold">Perks</span> of Belief</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '18px' }}>We treat our Founders like investors. You believed in us first, so you get the royal treatment forever.</p>

                            <div className="founders-perk">
                                <div className="founders-perk-icon">💎</div>
                                <div>
                                    <h4>Priority Support (Human & AI)</h4>
                                    <p>Your tickets go to the front of the line. Your Kira responds faster.</p>
                                </div>
                            </div>

                            <div className="founders-perk">
                                <div className="founders-perk-icon">🎁</div>
                                <div>
                                    <h4>ALL Future Upgrades  - Free Forever</h4>
                                    <p>Every new feature, every new capability, every premium add-on. Included. Always.</p>
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

                        <div className="founders-card-visual">
                            <div className="founders-card">
                                <h3 style={{ color: 'white', marginBottom: '8px' }}>FOUNDERS CLUB</h3>
                                <div style={{ color: 'var(--gold)', fontSize: '24px', fontWeight: '700', marginBottom: '32px' }}>XXXXXXXX</div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                                    <div>
                                        <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>MEMBER SINCE</div>
                                        <div style={{ color: 'white' }}>2026</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>STATUS</div>
                                        <div style={{ color: 'var(--gold)' }}>LIFETIME</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Physical Perks */}
            <section className="section physical-perks">
                <div className="container">
                    <div className="physical-perks-grid">
                        <div>
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'var(--bg-card)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)'
                            }}>
                                [Physical Kit Image Placeholder]
                            </div>
                        </div>

                        <div className="physical-content">
                            <h2>Exclusive <span className="text-gold">Physical Perks</span><br />Shipped to Your Door</h2>

                            <p style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>This isn't just software. Founders get a tangible, premium experience that proves you were here from the beginning.</p>

                            <ul className="physical-list">
                                <li>
                                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>Premium Physical Welcome Kit</div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Unboxing experience with premium materials, Founders card, and exclusive items.</div>
                                </li>
                                <li>
                                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>Framed Founders Certificate</div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Your name, your Founders number, proof of your founding membership. Ready to display.</div>
                                </li>
                                <li>
                                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>Yearly Appreciation Gift</div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Every year, a new exclusive gift shipped to Founders only. Our way of saying thank you.</div>
                                </li>
                                <li>
                                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>Annual Strategy Session</div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Direct access to our team. Personalize your Kira. Get insider roadmap previews.</div>
                                </li>
                                <li>
                                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>Founder Portal Access</div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Behind-the-scenes content, early feature access, exclusive community.</div>
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
                                    <div className="label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Platinum ($49.99/mo)</div>
                                </div>
                                <div className="math-vs-divider" style={{ color: 'var(--text-muted)' }}>vs</div>
                                <div className="math-founders">
                                    <div className="price">$497</div>
                                    <div className="label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Founders ($197 + $24.99/mo)</div>
                                </div>
                            </div>
                            <div className="math-savings">
                                <div className="amount">Save $103</div>
                                <div className="label" style={{ fontSize: '11px', opacity: 0.8 }}>+ physical kit + voting rights</div>
                            </div>
                        </div>

                        <div className="math-card">
                            <div className="math-card-header">2 Years</div>
                            <div className="math-vs">
                                <div className="math-platinum">
                                    <div className="price">$1,200</div>
                                    <div className="label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Platinum</div>
                                </div>
                                <div className="math-vs-divider" style={{ color: 'var(--text-muted)' }}>vs</div>
                                <div className="math-founders">
                                    <div className="price">$797</div>
                                    <div className="label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Founders</div>
                                </div>
                            </div>
                            <div className="math-savings">
                                <div className="amount">Save $403</div>
                                <div className="label" style={{ fontSize: '11px', opacity: 0.8 }}>+ all premium upgrades free</div>
                            </div>
                        </div>

                        <div className="math-card">
                            <div className="math-card-header">5 Years</div>
                            <div className="math-vs">
                                <div className="math-platinum">
                                    <div className="price">$3,000</div>
                                    <div className="label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Platinum</div>
                                </div>
                                <div className="math-vs-divider" style={{ color: 'var(--text-muted)' }}>vs</div>
                                <div className="math-founders">
                                    <div className="price">$1,697</div>
                                    <div className="label" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Founders</div>
                                </div>
                            </div>
                            <div className="math-savings">
                                <div className="amount">Save $1,303</div>
                                <div className="label" style={{ fontSize: '11px', opacity: 0.8 }}>+ yearly gifts + acquisition bonus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOMO Section */}
            <section className="section fomo-section">
                <div className="container">
                    <div className="fomo-content">
                        <div className="fomo-icon" style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
                        <h2 className="fomo-title">What You Lose If You Wait</h2>

                        <ul className="fomo-list">
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <span><strong>Lifetime price lock</strong>  - Regular users will pay $49.99/mo (and increasing)</span>
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <span><strong>Physical welcome kit</strong>  - Only 16,000 will ever be made</span>
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <span><strong>Framed Founders certificate</strong>  - Proof you believed early</span>
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <span><strong>Voting rights on roadmap</strong>  - Only Founders shape Kira's future</span>
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <span><strong>All future upgrades free</strong>  - Non-Founders will pay extra</span>
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                                <span><strong>$100 acquisition bonus</strong>  - If Kira is ever acquired</span>
                            </li>
                        </ul>

                        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                            Once the 16,000 spots are claimed, <strong style={{ color: 'var(--danger)' }}>this tier disappears forever.</strong><br />
                            There is no "maybe later." There's only now or never.
                        </p>

                        <button onClick={onSignUp} className="cta-primary">
                            <span>👑</span> Secure My Founders Spot
                        </button>
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
                        {[
                            { q: "Is the $24.99/month really locked forever?", a: "Yes. Founders pricing is permanently locked at $24.99/month for as long as you maintain your membership. Even if regular pricing increases to $60, $80, or more  - yours stays the same. Forever." },
                            { q: "What happens if I cancel and want to rejoin?", a: "If you cancel your Founders membership, you lose it permanently. You would need to rejoin at whatever the current regular pricing is (currently $49.99/month for Platinum). The Founders tier will never be reopened." },
                            { q: "When will Kira actually launch?", a: "This is a presale for early access. Founders get first access as features roll out. Your membership begins at launch, and you'll be in the first wave of users." },
                            { q: "Is Kira a replacement for therapy?", a: "No. Kira provides support between therapy sessions, emotional companionship, and accountability  - but she's not a licensed therapist. Think of her as the friend you can talk to at 3 AM, not a clinical professional." },
                            { q: "What's the $197 one-time fee for?", a: "The one-time Founders Access Fee unlocks lifetime access to all Founders perks: physical welcome kit, framed certificate, voting rights, priority support, all future upgrades free, yearly gifts, and the acquisition bonus." },
                            { q: "Can I really talk to Kira by voice?", a: "Yes. Natural voice conversations that feel like talking to a friend, not a robot. Switch seamlessly between voice and text mid-conversation. Talk during your commute, text during meetings." },
                            { q: "How is Kira different from Replika or Character.AI?", a: "Memory (she remembers forever, not just one session), proactivity (she texts you first), personality (opinions, sass, backbone), and integration (she replaces multiple apps, not just companionship)." },
                            { q: "What if Kira doesn't work for me?", a: "You can cancel your monthly subscription anytime. The $197 Founders fee is non-refundable but gives you lifetime access to physical perks and Founders status if you ever resubscribe (at current rates)." }
                        ].map((item, index) => (
                            <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
                                <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {item.q}
                                    <span>{openFaq === index ? '−' : '+'}</span>
                                </div>
                                {openFaq === index && <div className="faq-answer" style={{ marginTop: '10px' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section final-cta" id="claim">
                <div className="container">
                    <div className="final-cta-content">
                        <h2 className="final-cta-title">Ready to Meet Your<br /><span className="text-gold glow-gold">Best Friend</span>?</h2>

                        <p className="final-cta-subtitle">16,000 visionaries will become Kira Founders.<br />Everyone else will wish they had.</p>

                        <div className="final-cta-buttons">
                            <button onClick={onSignUp} className="cta-primary" style={{ fontSize: '18px', padding: '20px 40px' }}>
                                <span>👑</span> Claim Founders Membership  - $197 + $24.99/mo
                            </button>
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
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <span className="text-gradient">KIRA</span>
                        </div>
                        <p className="footer-text">© 2026 Kira AI. She's not a tool. She's your best friend.</p>
                    </div>
                </div>
            </footer>

            {/* Sticky CTA Bar */}
            <div className={`sticky-cta ${stickyVisible ? 'visible' : ''}`} id="stickyCta">
                <div className="sticky-cta-inner" style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'space-between' }}>
                    <div className="sticky-cta-text">
                        <span className="sticky-cta-badge">Limited</span>
                        <div className="sticky-cta-info">
                            <strong>Founders Presale Live</strong> - Only 16,000 lifetime memberships. Never offered again.
                        </div>
                    </div>
                    <button onClick={onSignUp} className="cta-primary" style={{ padding: '8px 24px', fontSize: '14px' }}>
                        Claim Founders Access →
                    </button>
                </div>
            </div>
        </div>
    );
};
