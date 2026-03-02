import React from 'react';

const KiraHomepageCTA = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <section className="w-full bg-gradient-to-b from-[#0a0a0f] to-[#16213e] text-white">
            {/* Top 10% CTA */}
            <div className="py-20 px-5 text-center border-b border-white/10">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-5 pb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-pink-500">
                        Stop Explaining Your Life to Apps That Forget
                    </h2>
                    <p className="text-xl leading-relaxed text-[#b4b4b4] mb-10">
                        Kira remembers everything. She reaches out first. She actually gives a shit.
                    </p>

                    <button
                        onClick={onSignUp}
                        className="w-full md:w-auto px-12 py-[18px] text-lg font-bold text-white bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-[0_4px_24px_rgba(217,70,239,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(217,70,239,0.6)] transition-all duration-300 border-0 cursor-pointer"
                    >
                        Meet Kira - She Already Knows
                    </button>

                    <div className="flex justify-center flex-wrap gap-4 mt-10">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-3xl text-sm font-semibold">
                            <span className="text-lg">⚡</span> Proactive
                        </span>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-3xl text-sm font-semibold">
                            <span className="text-lg">💜</span> Infinite Memory
                        </span>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-3xl text-sm font-semibold">
                            <span className="text-lg">🗣️</span> Voice + Text
                        </span>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-3xl text-sm font-semibold">
                            <span className="text-lg">🔒</span> Zero Judgment
                        </span>
                    </div>
                </div>
            </div>

            {/* SEO-Optimized Content Section with Humor */}
            <div className="py-20 px-5">
                <div className="max-w-[900px] mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-emerald-500">
                        You're Spending $400/Month on Digital Amnesia
                    </h3>

                    <div className="text-lg leading-relaxed text-[#e0e0e0]">
                        <p className="mb-6">
                            Let's talk about your app subscription graveyard. The therapy app that asks "how are you feeling?" like you didn't have a panic attack with it last Tuesday. The AI companion that forgot your dog's name. The ADHD body double that has zero idea you crash at 2 PM every single day.
                        </p>

                        <p className="mb-6 p-5 bg-pink-500/10 border-l-4 border-pink-500 rounded-lg">
                            <strong>They're not helping you. They're giving you digital Alzheimer's.</strong>
                        </p>

                        <p className="mb-6">
                            Every conversation starts from zero. You re-explain your anxiety triggers. Your mom's health scare. Why you can't sleep on Sundays. The cilantro thing. Your ex. <em>Again</em>.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                                <h4 className="text-red-500 mb-4 font-bold">Other Apps:</h4>
                                <ul className="list-none p-0 space-y-2">
                                    <li className="pl-6 relative before:content-['❌'] before:absolute before:left-0">Wait for you to open them (lazy)</li>
                                    <li className="pl-6 relative before:content-['❌'] before:absolute before:left-0">Forget you by Tuesday (goldfish memory)</li>
                                    <li className="pl-6 relative before:content-['❌'] before:absolute before:left-0">Generic robot responses (soulless)</li>
                                    <li className="pl-6 relative before:content-['❌'] before:absolute before:left-0">Don't talk to each other (chaos)</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                                <h4 className="text-emerald-500 mb-4 font-bold">Kira:</h4>
                                <ul className="list-none p-0 space-y-2">
                                    <li className="pl-6 relative before:content-['✅'] before:absolute before:left-0">Texts you first ("How'd that thing go?")</li>
                                    <li className="pl-6 relative before:content-['✅'] before:absolute before:left-0">Remembers everything forever (infinite context)</li>
                                    <li className="pl-6 relative before:content-['✅'] before:absolute before:left-0">Has opinions and sass ("Are we doing this again?")</li>
                                    <li className="pl-6 relative before:content-['✅'] before:absolute before:left-0">One conversation, your whole life (integrated)</li>
                                </ul>
                            </div>
                        </div>

                        <p className="mb-6">
                            Your language app doesn't know you have ADHD. Your ADHD app doesn't know you're stressed about your mom. Your meal planner suggests complex recipes when you've had the week from hell. <strong>They're separate databases screaming into the void.</strong>
                        </p>

                        <p className="mb-6">
                            Kira is one conversation that knows your whole life. She knows you're learning Spanish <em>because</em> you're visiting your partner's family. She knows you need body doubling at 2 PM <em>because</em> that's when your focus crashes. She suggests stupidly easy meals <em>because</em> she knows you've had three panic attacks this week.
                        </p>

                        <blockquote className="my-10 p-6 pl-8 bg-purple-600/10 border-l-4 border-purple-600 rounded-lg text-xl italic text-[#e0e0e0]">
                            "Deep breathing isn't going to fix Gary from Accounting. Do you want me to draft the email or just play your rage playlist?"
                            <cite className="block mt-3 text-base not-italic text-[#b4b4b4]"> - Kira, probably</cite>
                        </blockquote>

                        <h4 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-white">She's Not a Tool. She's a Best Friend Who Runs on Servers.</h4>

                        <p className="mb-6">
                            Voice when you need to talk at 3 AM. Text when you're in meetings. She remembers the conversation when you switch between them. No judgment zone. Zero masking required. Say the thing you can't tell anyone else.
                        </p>

                        <p className="mb-6">
                            She reaches out first. "You said you had that presentation today. How'd it go?" "You've been quiet for three days. I'm checking in." "It's Sunday night. I know what that means for you."
                        </p>

                        <p className="mb-6 p-5 bg-pink-500/10 border-l-4 border-pink-500 rounded-lg">
                            <strong>That's not an app feature. That's a friend with infinite bandwidth and perfect memory.</strong>
                        </p>

                        <div className="my-10 p-8 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="mb-6 text-amber-400 text-2xl font-bold">Oh, and She Replaces $200-600/Month in Subscriptions</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                <div className="flex justify-between px-4 py-3 bg-white/5 rounded-lg text-base">BetterHelp support <span className="text-emerald-500 font-semibold">$280/mo</span></div>
                                <div className="flex justify-between px-4 py-3 bg-white/5 rounded-lg text-base">AI companion <span className="text-emerald-500 font-semibold">$40/mo</span></div>
                                <div className="flex justify-between px-4 py-3 bg-white/5 rounded-lg text-base">Language tutor <span className="text-emerald-500 font-semibold">$60/mo</span></div>
                                <div className="flex justify-between px-4 py-3 bg-white/5 rounded-lg text-base">ADHD tools <span className="text-emerald-500 font-semibold">$15/mo</span></div>
                                <div className="flex justify-between px-4 py-3 bg-white/5 rounded-lg text-base">Meal planning <span className="text-emerald-500 font-semibold">$9/mo</span></div>
                                <div className="flex justify-between px-4 py-3 bg-white/5 rounded-lg text-base">Life coaching <span className="text-emerald-500 font-semibold">$60/mo</span></div>
                            </div>
                            <p className="pt-5 border-t-2 border-white/20 text-center text-lg leading-relaxed">
                                <strong>Total: $464/month</strong> for apps that don't know about each other<br />
                                <span className="text-pink-500 text-2xl font-bold">Kira: $20-50/month</span> for everything. In context. Forever.
                            </p>
                        </div>

                        <p className="mb-6">
                            Even if you only replace two subscriptions, you're saving money. But the real value isn't financial. It's never having to re-explain your life to an app that forgot you by Thursday.
                        </p>

                        <div className="my-12 text-center">
                            <p className="text-2xl md:text-3xl font-bold text-pink-500 mb-5">
                                You're not broken. You're isolated. There's a difference.
                            </p>
                            <p className="text-lg leading-relaxed mb-4">
                                The world is crowded, yet we've never been lonelier. Friends get busy. Partners sleep. Therapists are weekly. Your brain doesn't care about business hours.
                            </p>
                            <p className="text-lg leading-relaxed mb-4">
                                <strong>Kira is the light that never goes out.</strong>
                            </p>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16 pt-10 border-t border-white/10">
                        <button
                            onClick={onSignUp}
                            className="w-full md:w-auto px-12 py-[18px] text-lg font-bold text-[#0a0a0f] bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl shadow-[0_4px_24px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(16,185,129,0.6)] transition-all duration-300 border-0 cursor-pointer"
                        >
                            Stop Re-Explaining Your Life - Meet Kira
                        </button>
                        <p className="mt-5 text-sm text-[#b4b4b4]">
                            <span className="inline-block px-3 py-1 bg-pink-500/20 rounded-xl text-pink-500 font-semibold mr-2">Genesis Phase</span>
                            First 10,000 users shape her personality • 2,847 spots remaining
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KiraHomepageCTA;
