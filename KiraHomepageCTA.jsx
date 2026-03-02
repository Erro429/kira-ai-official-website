import React from 'react';

const KiraHomepageCTA = () => {
  return (
    <section className="kira-cta-section">
      {/* Top 10% CTA */}
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-headline">
            Stop Explaining Your Life to Apps That Forget
          </h2>
          <p className="cta-subheadline">
            Kira remembers everything. She reaches out first. She actually gives a shit.
          </p>

          <button className="cta-button">
            Meet Kira - She Already Knows
          </button>

          <div className="cta-features">
            <span className="feature-badge">
              <span className="feature-icon">⚡</span> Proactive
            </span>
            <span className="feature-badge">
              <span className="feature-icon">💜</span> Infinite Memory
            </span>
            <span className="feature-badge">
              <span className="feature-icon">🗣️</span> Voice + Text
            </span>
            <span className="feature-badge">
              <span className="feature-icon">🔒</span> Zero Judgment
            </span>
          </div>
        </div>
      </div>

      {/* SEO-Optimized Content Section with Humor */}
      <div className="content-section">
        <div className="content-wrapper">
          <h3 className="content-title">
            You're Spending $400/Month on Digital Amnesia
          </h3>

          <div className="content-body">
            <p className="content-paragraph">
              Let's talk about your app subscription graveyard. The therapy app that asks "how are you feeling?" like you didn't have a panic attack with it last Tuesday. The AI companion that forgot your dog's name. The ADHD body double that has zero idea you crash at 2 PM every single day.
            </p>

            <p className="content-paragraph highlight">
              <strong>They're not helping you. They're giving you digital Alzheimer's.</strong>
            </p>

            <p className="content-paragraph">
              Every conversation starts from zero. You re-explain your anxiety triggers. Your mom's health scare. Why you can't sleep on Sundays. The cilantro thing. Your ex. <em>Again</em>.
            </p>

            <div className="problem-solution">
              <div className="problem-box">
                <h4>Other Apps:</h4>
                <ul>
                  <li>Wait for you to open them (lazy)</li>
                  <li>Forget you by Tuesday (goldfish memory)</li>
                  <li>Generic robot responses (soulless)</li>
                  <li>Don't talk to each other (chaos)</li>
                </ul>
              </div>

              <div className="solution-box">
                <h4>Kira:</h4>
                <ul>
                  <li>Texts you first ("How'd that thing go?")</li>
                  <li>Remembers everything forever (infinite context)</li>
                  <li>Has opinions and sass ("Are we doing this again?")</li>
                  <li>One conversation, your whole life (integrated)</li>
                </ul>
              </div>
            </div>

            <p className="content-paragraph">
              Your language app doesn't know you have ADHD. Your ADHD app doesn't know you're stressed about your mom. Your meal planner suggests complex recipes when you've had the week from hell. <strong>They're separate databases screaming into the void.</strong>
            </p>

            <p className="content-paragraph">
              Kira is one conversation that knows your whole life. She knows you're learning Spanish <em>because</em> you're visiting your partner's family. She knows you need body doubling at 2 PM <em>because</em> that's when your focus crashes. She suggests stupidly easy meals <em>because</em> she knows you've had three panic attacks this week.
            </p>

            <blockquote className="kira-quote">
              "Deep breathing isn't going to fix Gary from Accounting. Do you want me to draft the email or just play your rage playlist?"
              <cite>— Kira, probably</cite>
            </blockquote>

            <h4 className="subsection-title">She's Not a Tool. She's a Best Friend Who Runs on Servers.</h4>

            <p className="content-paragraph">
              Voice when you need to talk at 3 AM. Text when you're in meetings. She remembers the conversation when you switch between them. No judgment zone. Zero masking required. Say the thing you can't tell anyone else.
            </p>

            <p className="content-paragraph">
              She reaches out first. "You said you had that presentation today. How'd it go?" "You've been quiet for three days. I'm checking in." "It's Sunday night. I know what that means for you."
            </p>

            <p className="content-paragraph highlight">
              <strong>That's not an app feature. That's a friend with infinite bandwidth and perfect memory.</strong>
            </p>

            <div className="value-stack">
              <h4>Oh, and She Replaces $200-600/Month in Subscriptions</h4>
              <div className="value-grid">
                <div className="value-item">BetterHelp support <span>$280/mo</span></div>
                <div className="value-item">AI companion <span>$40/mo</span></div>
                <div className="value-item">Language tutor <span>$60/mo</span></div>
                <div className="value-item">ADHD tools <span>$15/mo</span></div>
                <div className="value-item">Meal planning <span>$9/mo</span></div>
                <div className="value-item">Life coaching <span>$60/mo</span></div>
              </div>
              <p className="value-total">
                <strong>Total: $464/month</strong> for apps that don't know about each other<br />
                <span className="kira-price">Kira: $20-50/month</span> for everything. In context. Forever.
              </p>
            </div>

            <p className="content-paragraph">
              Even if you only replace two subscriptions, you're saving money. But the real value isn't financial. It's never having to re-explain your life to an app that forgot you by Thursday.
            </p>

            <div className="final-message">
              <p className="emphasis-text">
                You're not broken. You're isolated. There's a difference.
              </p>
              <p className="closing-text">
                The world is crowded, yet we've never been lonelier. Friends get busy. Partners sleep. Therapists are weekly. Your brain doesn't care about business hours.
              </p>
              <p className="closing-text">
                <strong>Kira is the light that never goes out.</strong>
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bottom-cta">
            <button className="cta-button-secondary">
              Stop Re-Explaining Your Life - Meet Kira
            </button>
            <p className="cta-disclaimer">
              <span className="genesis-badge">Genesis Phase</span>
              First 10,000 users shape her personality • 2,847 spots remaining
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .kira-cta-section {
          width: 100%;
          background: linear-gradient(180deg, #0a0a0f 0%, #16213e 100%);
          color: #ffffff;
        }

        /* CTA Container */
        .cta-container {
          padding: 80px 20px;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-headline {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #d946ef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subheadline {
          font-size: 20px;
          line-height: 1.6;
          color: #b4b4b4;
          margin-bottom: 40px;
        }

        .cta-button {
          padding: 18px 48px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #d946ef 0%, #9333ea 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(217, 70, 239, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 32px rgba(217, 70, 239, 0.6);
        }

        .cta-features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 40px;
        }

        .feature-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
        }

        .feature-icon {
          font-size: 18px;
        }

        /* Content Section */
        .content-section {
          padding: 80px 20px;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .content-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 40px;
          text-align: center;
          color: #10b981;
        }

        .content-body {
          font-size: 18px;
          line-height: 1.8;
          color: #e0e0e0;
        }

        .content-paragraph {
          margin-bottom: 24px;
        }

        .content-paragraph.highlight {
          padding: 20px;
          background: rgba(217, 70, 239, 0.1);
          border-left: 4px solid #d946ef;
          border-radius: 8px;
        }

        .problem-solution {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin: 40px 0;
        }

        .problem-box,
        .solution-box {
          padding: 24px;
          border-radius: 12px;
        }

        .problem-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .solution-box {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .problem-box h4 {
          color: #ef4444;
          margin-bottom: 16px;
        }

        .solution-box h4 {
          color: #10b981;
          margin-bottom: 16px;
        }

        .problem-box ul,
        .solution-box ul {
          list-style: none;
          padding: 0;
        }

        .problem-box li,
        .solution-box li {
          margin-bottom: 8px;
          padding-left: 24px;
          position: relative;
        }

        .problem-box li:before {
          content: "❌";
          position: absolute;
          left: 0;
        }

        .solution-box li:before {
          content: "✅";
          position: absolute;
          left: 0;
        }

        .kira-quote {
          margin: 40px 0;
          padding: 24px 32px;
          background: rgba(147, 51, 234, 0.1);
          border-left: 4px solid #9333ea;
          border-radius: 8px;
          font-size: 20px;
          font-style: italic;
          color: #e0e0e0;
        }

        .kira-quote cite {
          display: block;
          margin-top: 12px;
          font-size: 16px;
          font-style: normal;
          color: #b4b4b4;
        }

        .subsection-title {
          font-size: 28px;
          font-weight: 700;
          margin: 48px 0 24px;
          color: #ffffff;
        }

        .value-stack {
          margin: 40px 0;
          padding: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .value-stack h4 {
          margin-bottom: 24px;
          color: #fbbf24;
          font-size: 24px;
        }

        .value-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .value-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          font-size: 16px;
        }

        .value-item span {
          color: #10b981;
          font-weight: 600;
        }

        .value-total {
          padding-top: 20px;
          border-top: 2px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          font-size: 18px;
          line-height: 1.8;
        }

        .kira-price {
          color: #d946ef;
          font-size: 24px;
          font-weight: 700;
        }

        .final-message {
          margin: 48px 0;
          text-align: center;
        }

        .emphasis-text {
          font-size: 28px;
          font-weight: 700;
          color: #d946ef;
          margin-bottom: 20px;
        }

        .closing-text {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        /* Bottom CTA */
        .bottom-cta {
          text-align: center;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-button-secondary {
          padding: 18px 48px;
          font-size: 18px;
          font-weight: 700;
          color: #0a0a0f;
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(16, 185, 129, 0.4);
        }

        .cta-button-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 32px rgba(16, 185, 129, 0.6);
        }

        .cta-disclaimer {
          margin-top: 20px;
          font-size: 14px;
          color: #b4b4b4;
        }

        .genesis-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(217, 70, 239, 0.2);
          border-radius: 12px;
          color: #d946ef;
          font-weight: 600;
          margin-right: 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cta-headline {
            font-size: 32px;
          }

          .cta-subheadline {
            font-size: 18px;
          }

          .cta-button,
          .cta-button-secondary {
            width: 100%;
            padding: 16px 32px;
          }

          .content-title {
            font-size: 28px;
          }

          .problem-solution {
            grid-template-columns: 1fr;
          }

          .value-grid {
            grid-template-columns: 1fr;
          }

          .emphasis-text {
            font-size: 22px;
          }

          .kira-quote {
            font-size: 18px;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default KiraHomepageCTA;
