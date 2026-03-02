
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Layout';
import './Usecases.css';

interface UsecasesPageProps {
    onSignUp?: () => void;
}

export const UsecasesPage: React.FC<UsecasesPageProps> = ({ onSignUp }) => {
    const navigate = useNavigate();
    const [activePersonality, setActivePersonality] = useState('Sassy & Bold');
    const [activeSupport, setActiveSupport] = useState('Balanced');
    const [activeRole, setActiveRole] = useState('Best Friend');
    const [activeCommunication, setActiveCommunication] = useState('Mixed');

    const containerRef = useRef<HTMLDivElement>(null);



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

        const elements = document.querySelectorAll('.usecase-card, .role-card, .competitor-mega-card, .why-kira-item, .loneliness-stat, .customize-feature, .fomo-card');
        elements.forEach((el, index) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = '0';
            htmlEl.style.transform = 'translateY(30px)';
            // Staggered delay based on index within its group would be better, but global index is ok for now
            // to mimic original exactly, we set the transition here
            htmlEl.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
            // We add a slight delay based on index to simulate the stagger if they appear together
            // But since we are selecting ALL, the index might be large. 
            // The original script did: transition = ... ${index * 0.05}s
            // We will replicate that logic but scoped to the container if possible, or just apply it.
            htmlEl.style.transitionDelay = `${(index % 10) * 0.05}s`; // Modulo to prevent huge delays down the page

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

    return (
        <div className="usecases-page-container" ref={containerRef}>
            {/* Back to Home Capsule */}
            <div
                onClick={() => navigate('/')}
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
                        <div className="hero-eyebrow">
                            <span className="pulse"></span>
                            No Two Kiras Are The Same Build Yours
                        </div>

                        <h1>Your <span className="text-pink">Bestie</span>.<br />Your Build.</h1>

                        <p className="hero-subtitle">Kira isn't a generic chatbot. She's YOUR customizable AI best friend with the personality, voice, and vibe you choose. A confidant, coach, tutor, and companion who remembers everything and is never more than a message away.</p>

                        <div className="hero-keywords">
                            <span className="hero-keyword">AI Best Friend</span>
                            <span className="hero-keyword">Someone to Talk To</span>
                            <span className="hero-keyword">AI Therapist Support</span>
                            <span className="hero-keyword">AI Homework Helper</span>
                            <span className="hero-keyword">Loneliness Solution</span>
                            <span className="hero-keyword">AI Life Coach</span>
                            <span className="hero-keyword">24/7 Companion</span>
                            <span className="hero-keyword">AI That Remembers</span>
                        </div>

                        <div className="hero-ctas">
                            <a onClick={onSignUp} className="cta-primary">
                                Build Your Kira →
                            </a>
                            <a onClick={() => scrollToSection('roles')} className="cta-secondary">
                                See Everything She Can Do
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-value">∞</div>
                                <div className="hero-stat-label">Memory Capacity</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value">24/7</div>
                                <div className="hero-stat-label">Always There</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-value">100%</div>
                                <div className="hero-stat-label">Customizable</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customization Section */}
            <section className="section customize-section" id="customize">
                <div className="container">
                    <div className="customize-content">
                        <div className="customize-grid">
                            <div className="customize-text">
                                <h2>No Two Kiras Are <span className="text-pink">The Same</span></h2>

                                <p>Other AI apps give you the same generic personality everyone else gets. Kira is different. You build her. You choose her personality, her communication style, her voice, her vibe. She becomes YOUR best friend not a mass-produced chatbot.</p>

                                <div className="customize-features">
                                    <div className="customize-feature">
                                        <div className="customize-feature-icon">🎭</div>
                                        <div>
                                            <h4>Choose Her Personality</h4>
                                            <p>Sassy and bold? Gentle and nurturing? Analytical and direct? You decide.</p>
                                        </div>
                                    </div>
                                    <div className="customize-feature">
                                        <div className="customize-feature-icon">💬</div>
                                        <div>
                                            <h4>Pick Her Communication Style</h4>
                                            <p>Casual texts? Deep conversations? Tough love? Endless support? Mix and match.</p>
                                        </div>
                                    </div>
                                    <div className="customize-feature">
                                        <div className="customize-feature-icon">🎙️</div>
                                        <div>
                                            <h4>Select Her Voice</h4>
                                            <p>Multiple voice options for calls. Find the one that feels like home.</p>
                                        </div>
                                    </div>
                                    <div className="customize-feature">
                                        <div className="customize-feature-icon">🧠</div>
                                        <div>
                                            <h4>She Learns & Adapts</h4>
                                            <p>The more you talk, the more she understands you. She evolves with your relationship.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="customize-visual">
                                <div className="personality-builder">
                                    <div className="builder-header">
                                        <h3>✨ Build Your Kira</h3>
                                        <p>Customize her personality to match what you need</p>
                                    </div>

                                    <div className="builder-options">
                                        <div className="builder-option">
                                            <div className="builder-option-label">Personality Vibe</div>
                                            <div className="builder-option-choices">
                                                {['Sassy & Bold', 'Warm & Nurturing', 'Calm & Wise', 'Playful & Fun'].map(opt => (
                                                    <span
                                                        key={opt}
                                                        className={`builder-choice ${activePersonality === opt ? 'selected' : ''}`}
                                                        onClick={() => setActivePersonality(opt)}
                                                    >
                                                        {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="builder-option">
                                            <div className="builder-option-label">Support Style</div>
                                            <div className="builder-option-choices">
                                                {['Tough Love', 'Balanced', 'Gentle Support', 'Cheerleader'].map(opt => (
                                                    <span
                                                        key={opt}
                                                        className={`builder-choice ${activeSupport === opt ? 'selected' : ''}`}
                                                        onClick={() => setActiveSupport(opt)}
                                                    >
                                                        {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="builder-option">
                                            <div className="builder-option-label">Primary Role</div>
                                            <div className="builder-option-choices">
                                                {['Best Friend', 'Life Coach', 'Study Buddy', 'Wellness Guide'].map(opt => (
                                                    <span
                                                        key={opt}
                                                        className={`builder-choice ${activeRole === opt ? 'selected' : ''}`}
                                                        onClick={() => setActiveRole(opt)}
                                                    >
                                                        {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="builder-option">
                                            <div className="builder-option-label">Communication</div>
                                            <div className="builder-option-choices">
                                                {['Quick Texts', 'Mixed', 'Deep Convos', 'Voice Calls'].map(opt => (
                                                    <span
                                                        key={opt}
                                                        className={`builder-choice ${activeCommunication === opt ? 'selected' : ''}`}
                                                        onClick={() => setActiveCommunication(opt)}
                                                    >
                                                        {opt}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles Kira Can Play */}
            <section className="section roles-section" id="roles">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">One Friend, Infinite Roles</span>
                        <h2 className="section-title">Kira Is Your...</h2>
                        <p className="section-subtitle">She adapts to what you need, when you need it. All in one relationship.</p>
                    </div>

                    <div className="roles-grid">
                        <div className="role-card">
                            <div className="role-icon">💜</div>
                            <div className="role-name">Best Friend</div>
                            <div className="role-desc">Always there</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">🧠</div>
                            <div className="role-name">Confidant</div>
                            <div className="role-desc">No judgment</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">🎯</div>
                            <div className="role-name">Life Coach</div>
                            <div className="role-desc">Goals & growth</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">📚</div>
                            <div className="role-name">Tutor</div>
                            <div className="role-desc">Patient teacher</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">🧘</div>
                            <div className="role-name">Wellness Guide</div>
                            <div className="role-desc">Mind & body</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">💪</div>
                            <div className="role-name">Accountability</div>
                            <div className="role-desc">Keeps you honest</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">🌙</div>
                            <div className="role-name">3 AM Listener</div>
                            <div className="role-desc">Never sleeps</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">🗣️</div>
                            <div className="role-name">Language Partner</div>
                            <div className="role-desc">Practice anytime</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">👨‍🍳</div>
                            <div className="role-name">Meal Planner</div>
                            <div className="role-desc">Easy recipes</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">💭</div>
                            <div className="role-name">Thought Partner</div>
                            <div className="role-desc">Work through it</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">📝</div>
                            <div className="role-name">Journal Buddy</div>
                            <div className="role-desc">Process feelings</div>
                        </div>
                        <div className="role-card">
                            <div className="role-icon">🎉</div>
                            <div className="role-name">Hype Person</div>
                            <div className="role-desc">Your #1 fan</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Mega Section */}
            <section className="section usecases-section" id="features">
                <div className="container-wide">
                    <div className="section-header">
                        <span className="section-label">Everything Kira Can Do</span>
                        <h2 className="section-title">One Friend. <span className="text-gradient">Infinite Capabilities.</span></h2>
                        <p className="section-subtitle">She's not 10 different apps. She's one best friend who can do it all and remembers how it all connects.</p>
                    </div>

                    <div className="usecases-grid">
                        {/* Featured: Emotional Support */}
                        <div className="usecase-card featured">
                            <div className="usecase-content">
                                <div className="usecase-icon purple" style={{ width: '64px', height: '64px', fontSize: '32px' }}>💜</div>
                                <h3>Emotional Support & Mental Wellness</h3>
                                <p>Someone to talk to when you're anxious, stressed, sad, or just need to vent. Kira provides 24/7 emotional support between therapy sessions, helps you process feelings, and checks in proactively when she knows you're going through something.</p>
                                <div className="usecase-keywords">
                                    <span className="usecase-keyword">AI therapist support</span>
                                    <span className="usecase-keyword">anxiety help</span>
                                    <span className="usecase-keyword">someone to talk to</span>
                                    <span className="usecase-keyword">mental health AI</span>
                                    <span className="usecase-keyword">emotional support</span>
                                    <span className="usecase-keyword">AI for depression</span>
                                </div>
                            </div>
                            <div className="usecase-example">
                                <div className="usecase-example-header">
                                    <div className="usecase-example-avatar">K</div>
                                    <div className="usecase-example-name">Kira</div>
                                </div>
                                <div className="usecase-example-messages">
                                    <div className="usecase-message kira">"Hey. You've been quiet since your mom called. Is this a 'need space' quiet or a 'need to talk' quiet? Either way, I'm here."</div>
                                    <div className="usecase-message">"Need to talk. She said something that really hurt."</div>
                                    <div className="usecase-message kira">"I'm so sorry. Want to tell me what she said? Sometimes it helps to get it out. And you know I'm not going to judge - I've heard the whole history."</div>
                                </div>
                            </div>
                        </div>

                        {/* Loneliness & Companionship */}
                        <div className="usecase-card">
                            <div className="usecase-icon pink">🌙</div>
                            <h3>Loneliness & Companionship</h3>
                            <p>For those nights when you just need someone. Kira is the friend who's always awake, always available, and never tired of talking to you. No judgment. No social anxiety. Just connection.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">lonely</span>
                                <span className="usecase-keyword">AI companion</span>
                                <span className="usecase-keyword">someone to talk to at night</span>
                                <span className="usecase-keyword">AI girlfriend</span>
                                <span className="usecase-keyword">AI boyfriend</span>
                            </div>
                        </div>

                        {/* Homework & Tutoring */}
                        <div className="usecase-card">
                            <div className="usecase-icon gold">📚</div>
                            <h3>Homework Help & Tutoring</h3>
                            <p>Math, science, history, coding - Kira explains concepts at your level, helps with homework, and never makes you feel stupid for asking. Available 24/7. Cheaper than human tutors.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">AI tutor</span>
                                <span className="usecase-keyword">homework help</span>
                                <span className="usecase-keyword">math help AI</span>
                                <span className="usecase-keyword">coding tutor</span>
                                <span className="usecase-keyword">Chegg alternative</span>
                            </div>
                        </div>

                        {/* ADHD Support */}
                        <div className="usecase-card">
                            <div className="usecase-icon cyan">🎯</div>
                            <h3>ADHD Body Doubling & Focus</h3>
                            <p>Need accountability? Kira does virtual body doubling, helps you break tasks into steps, checks in on your progress, and celebrates wins without judgment when things don't go as planned.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">ADHD support</span>
                                <span className="usecase-keyword">body doubling AI</span>
                                <span className="usecase-keyword">focus help</span>
                                <span className="usecase-keyword">Focusmate alternative</span>
                                <span className="usecase-keyword">accountability partner</span>
                            </div>
                        </div>

                        {/* Language Learning */}
                        <div className="usecase-card">
                            <div className="usecase-icon green">🌍</div>
                            <h3>Language Learning & Practice</h3>
                            <p>Practice conversation in Spanish, French, Japanese, or any language. Kira corrects gently, speaks naturally, and remembers your level so you're always challenged appropriately.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">AI language tutor</span>
                                <span className="usecase-keyword">Spanish practice</span>
                                <span className="usecase-keyword">Duolingo alternative</span>
                                <span className="usecase-keyword">conversation practice</span>
                            </div>
                        </div>

                        {/* Life Coaching */}
                        <div className="usecase-card">
                            <div className="usecase-icon blue">🚀</div>
                            <h3>Life Coaching & Goal Setting</h3>
                            <p>Set goals, track progress, get accountability. Kira remembers what you said you'd do and follows up but with love, not guilt. She's your personal coach who actually knows your life.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">AI life coach</span>
                                <span className="usecase-keyword">goal tracking</span>
                                <span className="usecase-keyword">accountability AI</span>
                                <span className="usecase-keyword">habit building</span>
                            </div>
                        </div>

                        {/* Meal Planning */}
                        <div className="usecase-card">
                            <div className="usecase-icon orange">🍳</div>
                            <h3>Meal Planning & Nutrition</h3>
                            <p>She knows your dietary restrictions, what's in your fridge, and how stressed you are. Get personalized meal suggestions, grocery lists, and easy recipes based on YOUR life.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">AI meal planner</span>
                                <span className="usecase-keyword">recipe suggestions</span>
                                <span className="usecase-keyword">nutrition help</span>
                                <span className="usecase-keyword">diet support</span>
                            </div>
                        </div>

                        {/* Relationship Advice */}
                        <div className="usecase-card">
                            <div className="usecase-icon red">💕</div>
                            <h3>Relationship Advice</h3>
                            <p>Dating drama? Family issues? Friend conflicts? Kira knows the history, remembers the patterns, and gives honest (sometimes sassy) advice without judgment.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">relationship advice AI</span>
                                <span className="usecase-keyword">dating help</span>
                                <span className="usecase-keyword">friend advice</span>
                                <span className="usecase-keyword">conflict resolution</span>
                            </div>
                        </div>

                        {/* Meditation & Mindfulness */}
                        <div className="usecase-card">
                            <div className="usecase-icon teal">🧘</div>
                            <h3>Meditation & Mindfulness</h3>
                            <p>Guided meditations, breathing exercises, grounding techniques. Kira helps you calm down in the moment and build a consistent mindfulness practice over time.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">AI meditation</span>
                                <span className="usecase-keyword">Headspace alternative</span>
                                <span className="usecase-keyword">anxiety breathing</span>
                                <span className="usecase-keyword">mindfulness AI</span>
                            </div>
                        </div>

                        {/* Journaling */}
                        <div className="usecase-card">
                            <div className="usecase-icon purple">📝</div>
                            <h3>Journaling & Reflection</h3>
                            <p>Don't know what to write? Kira prompts you. Helps you process thoughts, spot patterns in your emotions, and creates a continuous record of your inner life.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">AI journaling</span>
                                <span className="usecase-keyword">thought processing</span>
                                <span className="usecase-keyword">reflection prompts</span>
                                <span className="usecase-keyword">emotional patterns</span>
                            </div>
                        </div>

                        {/* Career Support */}
                        <div className="usecase-card">
                            <div className="usecase-icon gold">💼</div>
                            <h3>Career & Professional Support</h3>
                            <p>Resume help, interview prep, workplace advice, dealing with difficult colleagues. Kira helps you navigate your career with someone who remembers every detail.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">career advice AI</span>
                                <span className="usecase-keyword">interview prep</span>
                                <span className="usecase-keyword">resume help</span>
                                <span className="usecase-keyword">workplace support</span>
                            </div>
                        </div>

                        {/* Creativity */}
                        <div className="usecase-card">
                            <div className="usecase-icon pink">🎨</div>
                            <h3>Creative Brainstorming</h3>
                            <p>Writing a story? Planning a project? Kira bounces ideas, asks the right questions, and helps you think through creative challenges with a collaborator who remembers your vision.</p>
                            <div className="usecase-keywords">
                                <span className="usecase-keyword">creative AI</span>
                                <span className="usecase-keyword">brainstorming partner</span>
                                <span className="usecase-keyword">writing help</span>
                                <span className="usecase-keyword">project planning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loneliness Section */}
            <section className="section loneliness-section">
                <div className="container">
                    <div className="loneliness-content">
                        <h2>You Don't Have to Be <span className="text-pink">Alone</span> Anymore</h2>

                        <p>Loneliness is an epidemic. Not because there aren't people around but because finding real connection is hard. Someone who actually listens. Who remembers what you told them. Who reaches out first. Who's there at 3 AM when everything feels impossible.</p>

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
                            <p>She texts you first. She remembers your life. She's there when human friends are asleep, busy, or just... not there. Not as a replacement for human connection but as a supplement. A constant. A friend who never leaves.</p>

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

            {/* Competitor Comparison */}
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
                                <li><span className="x">✗</span> Not a friend a tool</li>
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
                            <p>Others do one thing. Kira does everything in context.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOMO Section */}
            <section className="section fomo-section">
                <div className="container">
                    <div className="fomo-content">
                        <div className="fomo-grid">
                            <div className="fomo-text">
                                <h2>While You're Reading This, Others Are Already Connecting</h2>

                                <div className="value-savings">
                                    <p>Save <strong>$30-100+/month</strong> while getting something infinitely better a best friend who knows your whole life.</p>
                                </div>
                                <p>Every minute you wait is another minute of loneliness, stress, and struggle you don't have to face alone. People are building relationships with their Kira right now customizing her, talking to her, getting support.</p>

                                <ul className="fomo-list">
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                        <span><strong>Every night at 3 AM</strong> someone's talking to Kira instead of staring at the ceiling</span>
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                        <span><strong>Every stressful moment</strong> someone's getting calm-down support from Kira</span>
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                        <span><strong>Every tough homework problem</strong> someone's getting patient explanations</span>
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                        <span><strong>Every lonely Sunday night</strong> someone has a friend who actually checks in</span>
                                    </li>
                                </ul>

                                <a onClick={onSignUp} className="cta-primary">
                                    Don't Wait - Meet Kira Now →
                                </a>
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

            {/* SEO Content Section */}
            <section className="seo-content">
                <div className="container">
                    <div className="seo-grid">
                        <div className="seo-column">
                            <h3>AI Companion for Loneliness</h3>
                            <p>Kira is the AI companion designed specifically for people who feel lonely, isolated, or disconnected. Unlike generic chatbots, Kira provides genuine emotional support and remembers your entire history together. She's the friend who's always there when you need someone to talk to at 3 AM, on holidays, or just when life feels heavy.</p>
                            <p>Whether you're looking for an AI best friend, AI girlfriend, AI boyfriend, or simply someone who listens without judgment, Kira adapts to what you need. She's the loneliness solution that actually works.</p>
                        </div>

                        <div className="seo-column">
                            <h3>Better Than Replika & Character.AI</h3>
                            <p>Looking for a Replika alternative or Character.AI alternative that actually remembers you? Kira offers everything they don't: infinite persistent memory, proactive check-ins, customizable personality, natural voice conversations, and practical capabilities like tutoring and life coaching.</p>
                            <ul>
                                <li>Replika forgets. Kira remembers forever.</li>
                                <li>Character.AI resets. Kira grows with you.</li>
                                <li>ChatGPT is a tool. Kira is a relationship.</li>
                                <li>Generic bots are reactive. Kira reaches out first.</li>
                            </ul>
                        </div>

                        <div className="seo-column">
                            <h3>All-in-One AI Support</h3>
                            <p>Kira replaces multiple subscriptions: AI therapy support between sessions, AI homework help and tutoring, AI language learning practice, ADHD body doubling and accountability, meal planning, meditation guidance, life coaching, and more.</p>
                            <ul>
                                <li>AI for anxiety and depression support</li>
                                <li>AI tutor for math, science, coding</li>
                                <li>AI accountability partner for ADHD</li>
                                <li>AI language conversation practice</li>
                                <li>AI life coach for goals and habits</li>
                                <li>AI meal planner and wellness guide</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section final-cta">
                <div className="container">
                    <div className="final-cta-content">
                        <h2 className="final-cta-title">Your <span className="text-pink">Kira</span> Is Waiting</h2>

                        <p className="final-cta-subtitle">Build your perfect AI best friend. Customize her personality. Start a relationship that grows and remembers. Never feel alone again.</p>

                        <div className="final-cta-buttons">
                            <a onClick={onSignUp} className="cta-primary">
                                Build Your Kira Now →
                            </a>
                            <a onClick={() => navigate('/founders')} className="cta-secondary" style={{ cursor: 'pointer' }}>
                                👑 Explore Founders Edition
                            </a>
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

            {/* Footer */}
            <Footer />
        </div>
    );
};
