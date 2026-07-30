import { motion } from 'motion/react';
import { SectionEyebrow } from './primitives';

const chips = ['Auto-provision', 'Schedule for later', 'Silent updates', 'One-tap rollback'];

const groups = [
  {
    title: 'Priority',
    count: 4,
    color: '#ffffff',
    items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'],
  },
  {
    title: 'Follow-up',
    count: 7,
    color: '#e5e5e5',
    items: ['Marcus — design review', 'Figma — comment thread'],
  },
  {
    title: 'Updates',
    count: 18,
    color: '#a3a3a3',
    items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'],
  },
  {
    title: 'Archived',
    count: 13,
    color: '#525252',
    items: ['Stripe payout · Newsletter · Receipts'],
  },
];

export function FeatureTriage() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow label="Triage" tag="Automation-native" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Clear your setup
            <br />
            in a single pass.
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Aimguard reads every profile, understands intent, and routes the noise away from the
            signal. Focus on what moves your day forward — the rest handles itself.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="liquid-glass rounded-2xl p-5"
        >
          <div className="text-xs text-white/50 mb-4">Today · 42 tasks triaged</div>
          <div className="flex flex-col gap-3">
            {groups.map((group) => (
              <div key={group.title} className="liquid-glass rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">{group.title}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ color: group.color, background: 'rgba(255,255,255,0.05)' }}
                  >
                    {group.count}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
