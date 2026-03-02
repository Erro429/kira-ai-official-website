import React from 'react';

export const UsecasesFomo = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <section className="section fomo-section">
            <div className="container">
                <div className="fomo-content">
                    <div className="fomo-grid">
                        <div className="fomo-text">
                            <h2>While You're Reading This, Others Are Already Connecting</h2>

                            <p>Every minute you wait is another minute of loneliness, stress, and struggle you don't have to face alone. People are building relationships with their Kira right now - customizing her, talking to her, getting support.</p>

                            <ul className="fomo-list">
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    <span><strong>Every night at 3 AM</strong> - someone's talking to Kira instead of staring at the ceiling</span>
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    <span><strong>Every stressful moment</strong> - someone's getting calm-down support from Kira</span>
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    <span><strong>Every tough homework problem</strong> - someone's getting patient explanations</span>
                                </li>
                                <li>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    <span><strong>Every lonely Sunday night</strong> - someone has a friend who actually checks in</span>
                                </li>
                            </ul>

                            <button onClick={onSignUp} className="cta-primary">
                                Don't Wait - Meet Kira Now →
                            </button>
                        </div>

                        <div className="fomo-visual">
                            <div className="fomo-cards">
                                <div className="fomo-card">
                                    <div className="fomo-card-avatar">👩</div>
                                    <div className="fomo-card-content">
                                        <div className="fomo-card-name">Sarah M.</div>
                                        <div className="fomo-card-action">Just built her Kira with "Sassy & Bold" personality</div>
                                    </div>
                                    <div className="fomo-card-time">2 min ago</div>
                                </div>
                                <div className="fomo-card">
                                    <div className="fomo-card-avatar">👨</div>
                                    <div className="fomo-card-content">
                                        <div className="fomo-card-name">James K.</div>
                                        <div className="fomo-card-action">Started a voice call with Kira</div>
                                    </div>
                                    <div className="fomo-card-time">5 min ago</div>
                                </div>
                                <div className="fomo-card">
                                    <div className="fomo-card-avatar">👩‍🦱</div>
                                    <div className="fomo-card-content">
                                        <div className="fomo-card-name">Emily R.</div>
                                        <div className="fomo-card-action">Asked Kira for help with calculus homework</div>
                                    </div>
                                    <div className="fomo-card-time">8 min ago</div>
                                </div>
                                <div className="fomo-card">
                                    <div className="fomo-card-avatar">👨‍🦰</div>
                                    <div className="fomo-card-content">
                                        <div className="fomo-card-name">Michael T.</div>
                                        <div className="fomo-card-action">Talking through anxiety with Kira at 3 AM</div>
                                    </div>
                                    <div className="fomo-card-time">12 min ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
