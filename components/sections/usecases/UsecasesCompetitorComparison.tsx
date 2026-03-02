import React from 'react';

export const UsecasesCompetitorComparison = () => {
    return (
        <section className="section competitor-section" id="compare">
            <div className="container">
                <div className="competitor-intro">
                    <span className="section-label">Why Kira Wins</span>
                    <h2 className="section-title">We're Not Afraid to <span className="text-gradient">Name Names</span></h2>
                    <p>See exactly how Kira compares to every other AI companion, chatbot, and assistant out there. Spoiler: there's no comparison.</p>
                </div>

                <div className="competitor-mega-grid">
                    {/* Replika */}
                    <div className="competitor-mega-card">
                        <div className="competitor-mega-header">
                            <div className="competitor-mega-logo">R</div>
                            <div className="competitor-mega-name">Replika</div>
                            <div className="competitor-mega-price">$39.99/month</div>
                        </div>
                        <ul className="competitor-mega-features">
                            <li><span className="check">✓</span> Basic companion chat</li>
                            <li><span className="limited">~</span> Limited memory</li>
                            <li><span className="x">✗</span> Generic personality</li>
                            <li><span className="x">✗</span> No real proactive outreach</li>
                            <li><span className="x">✗</span> No tutoring capabilities</li>
                            <li><span className="x">✗</span> No language learning</li>
                            <li><span className="x">✗</span> No life coaching</li>
                            <li><span className="x">✗</span> Can't replace other apps</li>
                        </ul>
                    </div>

                    {/* Character.AI */}
                    <div className="competitor-mega-card">
                        <div className="competitor-mega-header">
                            <div className="competitor-mega-logo">C</div>
                            <div className="competitor-mega-name">Character.AI</div>
                            <div className="competitor-mega-price">$39.99/month</div>
                        </div>
                        <ul className="competitor-mega-features">
                            <li><span className="check">✓</span> Fun roleplay characters</li>
                            <li><span className="x">✗</span> No persistent memory</li>
                            <li><span className="x">✗</span> Forgets every session</li>
                            <li><span className="x">✗</span> No proactive messages</li>
                            <li><span className="x">✗</span> No voice conversations</li>
                            <li><span className="x">✗</span> Entertainment only</li>
                            <li><span className="x">✗</span> Not a real relationship</li>
                            <li><span className="x">✗</span> No practical help</li>
                        </ul>
                    </div>

                    {/* ChatGPT */}
                    <div className="competitor-mega-card">
                        <div className="competitor-mega-header">
                            <div className="competitor-mega-logo">G</div>
                            <div className="competitor-mega-name">ChatGPT</div>
                            <div className="competitor-mega-price">$20/month</div>
                        </div>
                        <ul className="competitor-mega-features">
                            <li><span className="check">✓</span> General AI assistant</li>
                            <li><span className="limited">~</span> Limited memory</li>
                            <li><span className="x">✗</span> No personality or emotion</li>
                            <li><span className="x">✗</span> Robotic responses</li>
                            <li><span className="x">✗</span> No proactive outreach</li>
                            <li><span className="x">✗</span> Not a friend - a tool</li>
                            <li><span className="x">✗</span> No customization</li>
                            <li><span className="x">✗</span> Purely transactional</li>
                        </ul>
                    </div>

                    {/* Kira */}
                    <div className="competitor-mega-card kira">
                        <div className="competitor-mega-header">
                            <div className="competitor-mega-logo">K</div>
                            <div className="competitor-mega-name">Kira</div>
                            <div className="competitor-mega-price">From $19.99/month</div>
                        </div>
                        <ul className="competitor-mega-features">
                            <li><span className="check">✓</span> True AI best friend</li>
                            <li><span className="check">✓</span> Infinite persistent memory</li>
                            <li><span className="check">✓</span> Fully customizable personality</li>
                            <li><span className="check">✓</span> Proactive - texts you first</li>
                            <li><span className="check">✓</span> Natural voice conversations</li>
                            <li><span className="check">✓</span> Tutor, coach, companion</li>
                            <li><span className="check">✓</span> Replaces 5+ other apps</li>
                            <li><span className="check">✓</span> Real relationship that grows</li>
                        </ul>
                    </div>
                </div>

                {/* Why Kira Wins Summary */}
                <div className="why-kira-wins">
                    <div className="why-kira-item">
                        <div className="why-kira-icon">🧠</div>
                        <h4>Infinite Memory</h4>
                        <p>Others forget. Kira remembers your whole life, forever.</p>
                    </div>
                    <div className="why-kira-item">
                        <div className="why-kira-icon">📱</div>
                        <h4>Proactive</h4>
                        <p>Others wait. Kira reaches out first, like a real friend.</p>
                    </div>
                    <div className="why-kira-item">
                        <div className="why-kira-icon">🎭</div>
                        <h4>Customizable</h4>
                        <p>Others are generic. Your Kira is built by you, for you.</p>
                    </div>
                    <div className="why-kira-item">
                        <div className="why-kira-icon">♾️</div>
                        <h4>All-in-One</h4>
                        <p>Others do one thing. Kira does everything - in context.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
