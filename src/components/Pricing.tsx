import { useState } from 'react';
import { PricingNoiseFilter } from './primitives';

type Plan = {
  name: string;
  monthly: string;
  yearly: string;
  desc: string;
  features: string[];
  pro?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Free',
    monthly: 'Free',
    yearly: 'Free',
    desc: 'For creators taking their first steps with Aimguard.',
    features: [
      'Up to 3 profiles in the cloud',
      'Export up to 1080p logs',
      'Basic provisioning tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
  },
  {
    name: 'Standard',
    monthly: '$9,99/m',
    yearly: '$99,99/y',
    desc: 'For freelancers and small teams who need more freedom and flexibility.',
    features: [
      'Up to 50 profiles in the cloud',
      'Export up to 4K logs',
      'Advanced provisioning toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
  },
  {
    name: 'Pro',
    monthly: '$19,99/m',
    yearly: '$199,99/y',
    desc: 'For studios, agencies, and professional creators working with brands.',
    features: [
      'Unlimited profiles',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
    pro: true,
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="c3-pricing-section">
      <PricingNoiseFilter />
      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your Windows setup.</span>
          <span className="c3-watermark-line-2">Reinvented</span>
        </div>
      </div>

      <div className="c3-grid">
        {plans.map((plan) => (
          <div key={plan.name} className={`c3-card ${plan.pro ? 'c3-card-pro' : ''}`}>
            <div className="c3-tier-small">{plan.name}</div>
            <div className="c3-tier-large">{yearly ? plan.yearly : plan.monthly}</div>
            <div className="c3-desc">{plan.desc}</div>
            <ul className="c3-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="c3-check">
                    <CheckIcon />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="c3-btn">Choose Plan</button>
          </div>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span className="text-sm text-white/60">Yearly</span>
        <button
          className={`c3-toggle ${yearly ? 'active' : ''}`}
          onClick={() => setYearly((v) => !v)}
          aria-label="Toggle yearly billing"
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  );
}
