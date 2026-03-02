import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UsecasesFinalCta = ({ onSignUp }: { onSignUp?: () => void }) => {
    const navigate = useNavigate();
    return (
        <section className="section final-cta">
            <div className="container">
                <div className="final-cta-content">
                    <h2 className="final-cta-title">Your <span className="text-pink">Kira</span> Is Waiting</h2>

                    <p className="final-cta-subtitle">Build your perfect AI best friend. Customize her personality. Start a relationship that grows and remembers. Never feel alone again.</p>

                    <div className="final-cta-buttons">
                        <button onClick={onSignUp} className="cta-primary">
                            Build Your Kira Now →
                        </button>
                        <button onClick={() => navigate('/founders')} className="cta-secondary">
                            👑 Explore Founders Edition
                        </button>
                    </div>

                    <div className="final-cta-trust">
                        <div className="final-cta-trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                            24/7 Support
                        </div>
                        <div className="final-cta-trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                            Cancel Anytime
                        </div>
                        <div className="final-cta-trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                            100% Customizable
                        </div>
                        <div className="final-cta-trust-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                            Infinite Memory
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
