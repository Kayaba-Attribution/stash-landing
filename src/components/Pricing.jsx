import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

const BOT_URL = 'https://t.me/your_bot_here'

const FREE_FEATURES = [
  '30 expenses/month',
  'Monthly spending summary',
  '1 total budget',
  'Daily check-ins from Stash',
]

const PRO_FEATURES = [
  'Unlimited expenses',
  'Per-category budgets',
  'Savings goals',
  'Top merchants report',
  'Custom categories',
  'CSV export',
  'All query types',
  'Daily check-ins from Stash',
]

const FAMILY_FEATURES = [
  'Everything in Pro',
  'Up to 5 users',
  'Shared household view',
]

const FAQS = [
  {
    q: 'Do I need to connect my bank?',
    a: 'Never. You tell Stash what you spent. That\'s it.',
  },
  {
    q: 'What if I have multiple accounts?',
    a: "Doesn't matter. Cash, card, or credit — just text what you spent.",
  },
  {
    q: 'What if I forget to log?',
    a: "Stash notices. He'll check in at the end of the day.",
  },
  {
    q: 'Can I use my own categories?',
    a: 'Yes. Add anything. Stash will match your spending to it automatically.',
  },
  {
    q: 'Is my data safe?',
    a: 'Stored privately, tied only to your Telegram ID. No bank access, ever.',
  },
  {
    q: 'Can I cancel?',
    a: 'Anytime. No lock-in.',
  },
]

function FeatureItem({ text, color }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <Check size={15} strokeWidth={2.5} className={`mt-0.5 flex-shrink-0 ${color}`} />
      <span>{text}</span>
    </li>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate/10 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-slate text-sm group-hover:text-terracotta transition-colors">{q}</span>
        <ChevronDown
          size={16}
          className={`text-slate-muted flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-slate-muted text-sm pb-4 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="bg-cream grain py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-slate text-3xl lg:text-4xl text-center mb-2">
          Simple pricing.
        </h2>
        <p className="text-slate-muted text-center mb-14">
          Less than a coffee a month. Stash approves.
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Free */}
          <div className="bg-white rounded-2xl p-8 border border-slate/10">
            <p className="font-display font-semibold text-slate text-lg mb-1">Free</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="font-display font-bold text-slate text-4xl">$0</span>
            </div>
            <p className="text-slate-muted text-sm mb-6">to get started</p>
            <ul className="space-y-2.5 mb-8">
              {FREE_FEATURES.map(f => <FeatureItem key={f} text={f} color="text-sage" />)}
            </ul>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-slate/20 text-slate rounded-full px-6 py-2.5 text-sm font-semibold hover:border-slate/40 transition-colors"
            >
              Meet Stash
            </a>
          </div>

          {/* Pro — elevated */}
          <div className="bg-slate rounded-2xl p-8 ring-2 ring-terracotta md:-mt-4 md:-mb-4 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta text-white text-xs rounded-full px-3 py-1 font-medium">
              Most popular
            </span>
            <p className="font-display font-semibold text-white text-lg mb-1">Pro</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="font-display font-bold text-white text-4xl">$4.99</span>
              <span className="text-white/50 text-sm mb-1.5">/mo</span>
            </div>
            <p className="text-white/50 text-sm mb-6">billed monthly</p>
            <ul className="space-y-2.5 mb-8">
              {PRO_FEATURES.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check size={15} strokeWidth={2.5} className="mt-0.5 flex-shrink-0 text-terracotta" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-terracotta text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-terracotta-dark transition-colors"
            >
              Go Pro
            </a>
          </div>

          {/* Family */}
          <div className="bg-white rounded-2xl p-8 border border-slate/10">
            <p className="font-display font-semibold text-slate text-lg mb-1">Family</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="font-display font-bold text-slate text-4xl">$9.99</span>
              <span className="text-slate-muted text-sm mb-1.5">/mo</span>
            </div>
            <p className="text-slate-muted text-sm mb-6">up to 5 users</p>
            <ul className="space-y-2.5 mb-8">
              {FAMILY_FEATURES.map(f => <FeatureItem key={f} text={f} color="text-sage" />)}
            </ul>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-slate/20 text-slate rounded-full px-6 py-2.5 text-sm font-semibold hover:border-slate/40 transition-colors"
            >
              Get Family
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h3 className="font-display font-semibold text-slate text-2xl text-center mb-10">
            Questions? Stash has answers.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
