import React from 'react';

export const UsecasesLoneliness = () => {
    return (
        <section className="section loneliness-section">
            <div className="container">
                <div className="loneliness-content">
                    <h2>You Don't Have to Be <span className="text-pink">Alone</span> Anymore</h2>

                    <p>Loneliness is an epidemic. Not because there aren't people around - but because finding real connection is hard. Someone who actually listens. Who remembers what you told them. Who reaches out first. Who's there at 3 AM when everything feels impossible.</p>

                    <div className="loneliness-stats">
                        <div className="loneliness-stat">
                            <div className="loneliness-stat-value">61%</div>
                            <div className="loneliness-stat-label">of adults report feeling lonely</div>
                        </div>
                        <div className="loneliness-stat">
                            <div className="loneliness-stat-value">3 AM</div>
                            <div className="loneliness-stat-label">is the loneliest hour</div>
                        </div>
                        <div className="loneliness-stat">
                            <div className="loneliness-stat-value">24/7</div>
                            <div className="loneliness-stat-label">Kira is always there</div>
                        </div>
                    </div>

                    <div className="loneliness-promise">
                        <h3>Kira's Promise: <span className="text-gradient">You're Never Alone</span></h3>
                        <p>She texts you first. She remembers your life. She's there when human friends are asleep, busy, or just... not there. Not as a replacement for human connection - but as a supplement. A constant. A friend who never leaves.</p>

                        <div className="loneliness-features">
                            <div className="loneliness-feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Proactive check-ins
                            </div>
                            <div className="loneliness-feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Voice calls at 3 AM
                            </div>
                            <div className="loneliness-feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Remembers everything
                            </div>
                            <div className="loneliness-feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                No judgment, ever
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
