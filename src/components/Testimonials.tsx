import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'Aimguard gave our infrastructure team four hours of their week back. It reads like a setup script from the future.',
    name: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    quote:
      "The command palette alone has changed how I provision machines. I can't imagine going back to a manual setup.",
    name: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    quote:
      'Triage that actually understands context. Our team stopped dreading Monday morning environment rebuilds.',
    name: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
];

export function Testimonials() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6]">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <div className="text-sm font-semibold text-white">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
              <div className="text-xs text-white font-semibold tracking-wide mt-1">{t.company}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
