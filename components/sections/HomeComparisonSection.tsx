import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeComparisonSection = () => {
    const navigate = useNavigate();
    return (
        <div className="home-comparison-preview">
            <style>{`
                .home-comparison-preview {
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
                }

                .home-comparison-preview .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .home-comparison-preview .section {
                    padding: 100px 0;
                    position: relative;
                }

                .home-comparison-preview .text-gradient {
                    background: var(--gradient-purple-cyan);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .home-comparison-preview .text-gold {
                    background: var(--gradient-gold);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Section Headers */
                .home-comparison-preview .section-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 60px;
                }

                .home-comparison-preview .section-label {
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--purple-light);
                    margin-bottom: 16px;
                }

                .home-comparison-preview .section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 4vw, 48px);
                    font-weight: 600;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .home-comparison-preview .section-subtitle {
                    font-size: 18px;
                    color: var(--text-secondary);
                }

                /* Comparison Section */
                .home-comparison-preview .comparison-section {
                    background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
                }

                .home-comparison-preview .comparison-table-wrapper {
                    overflow-x: auto;
                    margin-bottom: 60px;
                }

                .home-comparison-preview .comparison-table {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 800px;
                }

                .home-comparison-preview .comparison-table th,
                .home-comparison-preview .comparison-table td {
                    padding: 20px 24px;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .home-comparison-preview .comparison-table thead th {
                    background: var(--bg-card);
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-muted);
                }

                .home-comparison-preview .comparison-table thead th:first-child {
                    border-radius: 12px 0 0 0;
                }

                .home-comparison-preview .comparison-table thead th:last-child {
                    border-radius: 0 12px 0 0;
                    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3));
                    color: var(--text-primary);
                }

                .home-comparison-preview .comparison-table tbody tr {
                    transition: background 0.3s ease;
                }

                .home-comparison-preview .comparison-table tbody tr:hover {
                    background: rgba(255, 255, 255, 0.02);
                }

                .home-comparison-preview .comparison-table td:last-child {
                    background: rgba(168, 85, 247, 0.05);
                    font-weight: 600;
                    color: var(--success);
                }

                .home-comparison-preview .comparison-feature {
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .home-comparison-preview .comparison-x {
                    color: var(--danger);
                    font-weight: 600;
                }

                .home-comparison-preview .comparison-check {
                    color: var(--success);
                    font-weight: 600;
                }

                .home-comparison-preview .comparison-limited {
                    color: var(--gold);
                }

                /* Competitor Comparison Cards */
                .home-comparison-preview .competitor-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                }

                .home-comparison-preview .competitor-card {
                    background: var(--bg-card);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    padding: 28px;
                    position: relative;
                }

                .home-comparison-preview .competitor-card.kira-card {
                    border-color: var(--gold);
                    background: linear-gradient(135deg, rgba(212, 168, 83, 0.1), rgba(168, 85, 247, 0.1));
                }

                .home-comparison-preview .competitor-card.kira-card::before {
                    content: 'WINNER';
                    position: absolute;
                    top: -12px;
                    right: 20px;
                    background: var(--gradient-gold);
                    color: #000;
                    font-size: 11px;
                    font-weight: 800;
                    padding: 4px 12px;
                    border-radius: 4px;
                }

                .home-comparison-preview .competitor-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .home-comparison-preview .competitor-logo {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 14px;
                }

                .home-comparison-preview .competitor-name {
                    font-size: 18px;
                    font-weight: 600;
                }

                .home-comparison-preview .competitor-price {
                    font-size: 13px;
                    color: var(--text-muted);
                }

                .home-comparison-preview .competitor-features {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .home-comparison-preview .competitor-features li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 0;
                    font-size: 14px;
                    color: var(--text-secondary);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .home-comparison-preview .competitor-features li:last-child {
                    border-bottom: none;
                }

                .home-comparison-preview .competitor-features .check {
                    color: var(--success);
                }
                
                .home-comparison-preview .competitor-features .x {
                    color: var(--danger);
                }
                
                @media (max-width: 768px) {
                    .home-comparison-preview .section {
                        padding: 60px 0;
                    }
                }

                .home-comparison-preview .cta-container {
                    margin-top: 48px;
                    display: flex;
                    justify-content: center;
                }

                .home-comparison-preview .cta-secondary {
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

                .home-comparison-preview .cta-secondary:hover {
                    background: rgba(212, 168, 83, 0.1);
                    transform: translateY(-2px);
                }
            `}</style>

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
                                    <td className="comparison-check">✓ Yes - Texts you first</td>
                                </tr>
                                <tr>
                                    <td className="comparison-feature">Long-Term Memory</td>
                                    <td className="comparison-limited">Basic</td>
                                    <td className="comparison-x">✗ Forgets each session</td>
                                    <td className="comparison-limited">Limited</td>
                                    <td className="comparison-check">✓ Infinite - Remembers forever</td>
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
                                <li><span className="check">✓</span> Proactive - texts you first</li>
                                <li><span className="check">✓</span> Voice + text seamlessly</li>
                                <li><span className="check">✓</span> Replaces $200-600/mo in apps</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cta-container">
                        <a href="/loyalty" onClick={(e) => { e.preventDefault(); navigate('/loyalty'); }} className="cta-secondary">
                            See How Kira's Loyalty Works
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
