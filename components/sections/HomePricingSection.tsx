
import React from 'react';

export const HomePricingSection = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <div className="home-pricing-preview">
            <style>{`
                .home-pricing-preview {
                    --bg-primary: #0a0a0f;
                    --bg-secondary: #12121a;
                    --bg-card: #1a1a24;
                    --bg-card-hover: #222230;
                    --purple-glow: #a855f7;
                    --purple-light: #c084fc;
                    --purple-dark: #7c3aed;
                    --cyan-glow: #06b6d4;
                    --cyan-light: #22d3ee;
                    --gold: #d4a853;
                    --gold-light: #f5d99a;
                    --gold-dark: #b8943f;
                    --silver: #94a3b8;
                    --silver-light: #cbd5e1;
                    --platinum: #e2e8f0;
                    --text-primary: #ffffff;
                    --text-secondary: #a1a1aa;
                    --text-muted: #71717a;
                    --danger: #ef4444;
                    --success: #22c55e;
                    --gradient-purple-cyan: linear-gradient(135deg, var(--purple-glow), var(--cyan-glow));
                    --gradient-gold: linear-gradient(135deg, var(--gold-dark), var(--gold-light), var(--gold));
                    
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    color: var(--text-primary);
                    line-height: 1.7;
                }

                .home-pricing-preview .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .home-pricing-preview .section {
                    padding: 100px 0;
                    position: relative;
                }

                .home-pricing-preview .text-gradient {
                    background: var(--gradient-purple-cyan);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                 .home-pricing-preview .text-purple {
                    color: var(--purple-light);
                }
                .home-pricing-preview .text-gold {
                     background: var(--gradient-gold);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                 /* Section Headers */
                .home-pricing-preview .section-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 60px;
                }

                .home-pricing-preview .section-label {
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--purple-light);
                    margin-bottom: 16px;
                }

                .home-pricing-preview .section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 4vw, 48px);
                    font-weight: 600;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .home-pricing-preview .section-subtitle {
                    font-size: 18px;
                    color: var(--text-secondary);
                }


                /* Pricing Section */
                .home-pricing-preview .pricing-section {
                    background: var(--bg-primary);
                    position: relative;
                }

                .home-pricing-preview .pricing-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(ellipse at 30% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                                radial-gradient(ellipse at 70% 100%, rgba(212, 168, 83, 0.08) 0%, transparent 50%);
                }

                .home-pricing-preview .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    position: relative;
                    z-index: 1;
                    align-items: start;
                }

                .home-pricing-preview .pricing-card {
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 40px 32px;
                    position: relative;
                    transition: all 0.4s ease;
                }

                .home-pricing-preview .pricing-card:hover {
                    transform: translateY(-8px);
                }

                /* Silver Card */
                .home-pricing-preview .pricing-card.silver {
                    border-color: rgba(148, 163, 184, 0.2);
                }

                .home-pricing-preview .pricing-card.silver:hover {
                    border-color: rgba(148, 163, 184, 0.4);
                    box-shadow: 0 20px 60px rgba(148, 163, 184, 0.1);
                }

                .home-pricing-preview .pricing-card.silver .pricing-tier-name {
                    color: var(--silver-light);
                }

                .home-pricing-preview .pricing-card.silver .pricing-amount {
                    color: var(--silver-light);
                }

                /* Gold Card - Featured */
                .home-pricing-preview .pricing-card.gold {
                    border: 2px solid var(--gold);
                    background: linear-gradient(180deg, rgba(212, 168, 83, 0.1) 0%, var(--bg-card) 30%);
                    transform: scale(1.05);
                    z-index: 2;
                }

                .home-pricing-preview .pricing-card.gold:hover {
                    transform: scale(1.05) translateY(-8px);
                    box-shadow: 0 30px 80px rgba(212, 168, 83, 0.2);
                }

                .home-pricing-preview .pricing-card.gold::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: var(--gradient-gold);
                    border-radius: 24px 24px 0 0;
                }

                .home-pricing-preview .pricing-card.gold .pricing-tier-name {
                    color: var(--gold);
                }

                .home-pricing-preview .pricing-card.gold .pricing-amount {
                    color: var(--gold);
                }

                /* Platinum Card */
                .home-pricing-preview .pricing-card.platinum {
                    border-color: rgba(168, 85, 247, 0.3);
                    background: linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, var(--bg-card) 30%);
                }

                .home-pricing-preview .pricing-card.platinum:hover {
                    border-color: rgba(168, 85, 247, 0.5);
                    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.15);
                }

                .home-pricing-preview .pricing-card.platinum .pricing-tier-name {
                    color: var(--purple-light);
                }

                .home-pricing-preview .pricing-card.platinum .pricing-amount {
                    color: var(--purple-light);
                }

                .home-pricing-preview .pricing-popular {
                    position: absolute;
                    top: -14px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--gradient-gold);
                    color: #000;
                    font-size: 12px;
                    font-weight: 800;
                    padding: 6px 20px;
                    border-radius: 100px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .home-pricing-preview .pricing-header {
                    text-align: center;
                    margin-bottom: 32px;
                    padding-bottom: 32px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .home-pricing-preview .pricing-tier-name {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 4px;
                }

                .home-pricing-preview .pricing-tier-tagline {
                    font-size: 14px;
                    color: var(--text-muted);
                    margin-bottom: 20px;
                }

                .home-pricing-preview .pricing-price {
                    display: flex;
                    align-items: baseline;
                    justify-content: center;
                    gap: 4px;
                }

                .home-pricing-preview .pricing-amount {
                    font-family: 'Playfair Display', serif;
                    font-size: 52px;
                    font-weight: 700;
                }

                .home-pricing-preview .pricing-period {
                    font-size: 18px;
                    color: var(--text-muted);
                }

                .home-pricing-preview .pricing-features {
                    list-style: none;
                    margin-bottom: 32px;
                }

                .home-pricing-preview .pricing-feature {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 12px 0;
                    font-size: 15px;
                    color: var(--text-secondary);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .home-pricing-preview .pricing-feature:last-child {
                    border-bottom: none;
                }

                .home-pricing-preview .pricing-feature svg {
                    width: 20px;
                    height: 20px;
                    color: var(--success);
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .home-pricing-preview .pricing-feature.highlight {
                    color: var(--text-primary);
                    font-weight: 500;
                }

                .home-pricing-preview .pricing-feature .bonus {
                    font-size: 12px;
                    color: var(--gold);
                    font-weight: 600;
                }

                .home-pricing-preview .pricing-feature .contest {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .home-pricing-preview .pricing-feature .contest-icon {
                    font-size: 16px;
                }

                .home-pricing-preview .pricing-cta {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 24px;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    border: none;
                }

                .home-pricing-preview .pricing-card.silver .pricing-cta {
                    background: transparent;
                    border: 2px solid var(--silver);
                    color: var(--silver-light);
                }

                .home-pricing-preview .pricing-card.silver .pricing-cta:hover {
                    background: rgba(148, 163, 184, 0.1);
                }

                .home-pricing-preview .pricing-card.gold .pricing-cta {
                    background: var(--gradient-gold);
                    color: #000;
                    box-shadow: 0 4px 20px rgba(212, 168, 83, 0.4);
                }

                .home-pricing-preview .pricing-card.gold .pricing-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(212, 168, 83, 0.6);
                }

                .home-pricing-preview .pricing-card.platinum .pricing-cta {
                    background: linear-gradient(135deg, var(--purple-glow), var(--purple-dark));
                    color: #fff;
                    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
                }

                .home-pricing-preview .pricing-card.platinum .pricing-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.6);
                }

                /* Founders Upsell */
                .home-pricing-preview .founders-upsell {
                    margin-top: 60px;
                    background: linear-gradient(135deg, rgba(212, 168, 83, 0.15), rgba(168, 85, 247, 0.1));
                    border: 2px solid var(--gold);
                    border-radius: 24px;
                    padding: 48px;
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 40px;
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                .home-pricing-preview .founders-upsell-content h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 32px;
                    margin-bottom: 12px;
                }

                .home-pricing-preview .founders-upsell-content p {
                    font-size: 17px;
                    color: var(--text-secondary);
                    margin-bottom: 20px;
                    max-width: 600px;
                }

                .home-pricing-preview .founders-perks-mini {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .home-pricing-preview .founders-perk-mini {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    color: var(--text-secondary);
                }

                .home-pricing-preview .founders-perk-mini svg {
                    color: var(--gold);
                }

                .home-pricing-preview .founders-upsell-cta {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .home-pricing-preview .founders-upsell-cta a {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: var(--gradient-gold);
                    color: #000;
                    font-size: 16px;
                    font-weight: 700;
                    padding: 18px 36px;
                    border-radius: 12px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(212, 168, 83, 0.4);
                }

                .home-pricing-preview .founders-upsell-cta a:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(212, 168, 83, 0.6);
                }

                .home-pricing-preview .founders-upsell-cta span {
                    font-size: 13px;
                    color: var(--text-muted);
                }
                
                @media (max-width: 1024px) {
                    .home-pricing-preview .pricing-grid {
                        grid-template-columns: 1fr;
                        max-width: 450px;
                        margin: 0 auto;
                    }

                    .home-pricing-preview .pricing-card.gold {
                        transform: none;
                        order: -1;
                    }

                    .home-pricing-preview .pricing-card.gold:hover {
                        transform: translateY(-8px);
                    }
                    
                    .home-pricing-preview .founders-upsell {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }

                    .home-pricing-preview .founders-perks-mini {
                        justify-content: center;
                    }
                }
            `}</style>

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


                </div>
            </section>
        </div>
    );
};
