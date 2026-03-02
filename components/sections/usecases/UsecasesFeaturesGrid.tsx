import React from 'react';

export const UsecasesFeaturesGrid = () => {
    return (
        <section className="section usecases-section" id="features">
            <div className="container-wide">
                <div className="section-header">
                    <span className="section-label">Everything Kira Can Do</span>
                    <h2 className="section-title">One Friend. <span className="text-gradient">Infinite Capabilities.</span></h2>
                    <p className="section-subtitle">She's not 10 different apps. She's one best friend who can do it all - and remembers how it all connects.</p>
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
                        <p>Set goals, track progress, get accountability. Kira remembers what you said you'd do and follows up - but with love, not guilt. She's your personal coach who actually knows your life.</p>
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
    );
};
