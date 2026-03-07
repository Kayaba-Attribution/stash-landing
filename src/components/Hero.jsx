import { MessageCircle, ShieldOff, Zap } from 'lucide-react'
import StashChat from './StashChat'

const BOT_URL = 'https://t.me/your_bot_here'

const PILLS = [
  { Icon: MessageCircle, label: 'Works in Telegram' },
  { Icon: ShieldOff,    label: 'No bank login ever' },
  { Icon: Zap,          label: '30-second setup' },
]

export default function Hero() {
  return (
    <section className="relative bg-cream grain overflow-hidden pt-20 pb-14 px-6">
      {/* Decorative background orbs — inline position:absolute to prevent .grain > * override */}
      <div
        className="pointer-events-none rounded-full opacity-40 blur-3xl"
        style={{ position: 'absolute', top: '-8rem', right: '-8rem', width: '480px', height: '480px', background: 'radial-gradient(circle, #EBF3ED 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none rounded-full opacity-30 blur-3xl"
        style={{ position: 'absolute', bottom: 0, left: '-6rem', width: '360px', height: '360px', background: 'radial-gradient(circle, #FAF0EC 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

          {/* Copy */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta rounded-full px-3.5 py-1.5 text-sm font-semibold mb-6 border border-terracotta/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
              </span>
              Meet Stash, your expense pal
            </span>

            <h1 className="font-display font-extrabold text-slate text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight mb-5">
              Track expenses<br />by texting.
            </h1>

            <p className="text-slate-muted text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
              No bank connection. No spreadsheet. Just text Stash in Telegram what you spent — he logs it, tracks it, and nudges you when you go quiet.
            </p>

            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-terracotta text-white rounded-full px-8 py-3.5 font-semibold text-base hover:bg-terracotta-dark transition-all hover:shadow-lg hover:shadow-terracotta/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Meet Stash — it's free →
            </a>

            {/* Social proof pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mt-7">
              {PILLS.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/80 border border-slate/10 text-slate-muted text-xs rounded-full px-3 py-1.5 shadow-sm"
                >
                  <Icon size={12} strokeWidth={2} className="text-sage flex-shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Chat mockup */}
          <div className="flex-shrink-0 flex justify-center lg:mt-4">
            <StashChat />
          </div>

        </div>
      </div>
    </section>
  )
}
