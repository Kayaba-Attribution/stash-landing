import { ArrowRight } from 'lucide-react'

const BOT_URL = 'https://t.me/your_bot_here'

export default function FinalCTA() {
  return (
    <section className="bg-cream py-8 px-4 sm:px-6 pb-16">
      {/* Floating island card */}
      <div className="max-w-3xl mx-auto bg-slate rounded-3xl px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center relative overflow-hidden">
        {/* Subtle inner glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-3xl opacity-20"
          style={{ background: '#6B9E78' }}
        />

        <div className="text-6xl mb-6 leading-none select-none relative" aria-hidden="true">🐿️</div>

        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 relative">
          Ready to actually know<br />where your money goes?
        </h2>

        <p className="text-white/55 text-base sm:text-lg mb-10 leading-relaxed relative max-w-md">
          No bank link. No spreadsheet. No friction. Just Stash.
        </p>

        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 bg-terracotta text-white rounded-full px-9 py-3.5 text-base font-semibold hover:bg-terracotta-dark transition-all hover:shadow-xl hover:shadow-terracotta/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          Meet Stash — it's free
          <ArrowRight size={16} strokeWidth={2.5} />
        </a>

        <p className="text-white/30 text-xs mt-4 relative">
          Opens in Telegram · Free to start · No credit card
        </p>
      </div>
    </section>
  )
}
