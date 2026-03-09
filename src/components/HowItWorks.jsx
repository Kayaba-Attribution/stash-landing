import { Send, Sparkles, BellRing } from 'lucide-react'

const BOT_URL = 'https://t.me/your_bot_here'

const STEPS = [
  {
    num: 1,
    Icon: Send,
    title: 'Text what you spent',
    copy: 'Any format. Any amount. Just send it.',
    bubbles: [{ from: 'user', text: 'coffee 5.50' }],
  },
  {
    num: 2,
    Icon: Sparkles,
    title: 'Stash logs it instantly',
    copy: 'Category, total, budget left. Every time.',
    bubbles: [{ from: 'stash', lines: ['Logged $5.50 · Food', 'March: $312 · $188 left', 'Day 4 🔥'] }],
  },
  {
    num: 3,
    Icon: BellRing,
    title: 'Stash checks in if you go quiet',
    copy: 'Miss a day and he notices. He has thoughts.',
    bubbles: [{ from: 'stash', lines: ['Two days quiet.', "Fasting or avoiding me?", 'Anything to log?'] }],
  },
]

function ChatBubble({ bubble }) {
  const isUser = bubble.from === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <img src="/stash.png" alt="Stash" className="w-5 h-5 rounded-full object-contain flex-shrink-0 mr-1.5 mt-0.5 bg-white" />
      )}
      <div
        className="rounded-2xl px-3 py-2 max-w-[180px] text-xs leading-relaxed"
        style={{
          background: isUser ? '#6B9E78' : '#1E2A2A',
          color: 'white',
          borderBottomRightRadius: isUser ? '4px' : undefined,
          borderBottomLeftRadius: !isUser ? '4px' : undefined,
        }}
      >
        {isUser ? (
          <span>{bubble.text}</span>
        ) : (
          <div className="space-y-0.5">
            {bubble.lines.map((line, i) => (
              <div key={i} className={i === 0 ? 'font-medium' : 'opacity-65'}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="bg-cream grain py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-slate text-2xl sm:text-3xl lg:text-4xl text-center mb-2">
          As easy as texting a friend.
        </h2>
        <p className="text-slate-muted text-sm text-center mb-12">Three steps. Really.</p>

        <div className="flex flex-col lg:flex-row gap-5">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="flex-1 relative">
              {/* Connector arrow between steps (desktop) */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-8 -right-3 z-10 items-center justify-center w-6 h-6">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#6B9E78" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              <div className="bg-white rounded-3xl p-6 h-full flex flex-col gap-4 shadow-sm border border-slate/5">
                {/* Step badge */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                    <step.Icon size={17} strokeWidth={1.75} className="text-sage-dark" />
                  </div>
                  <span className="text-xs font-bold text-sage-dark/60 tracking-widest uppercase">
                    Step {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-slate text-base mb-1">{step.title}</h3>
                  <p className="text-slate-muted text-sm leading-relaxed">{step.copy}</p>
                </div>

                <div className="flex flex-col gap-1.5 mt-auto pt-1">
                  {step.bubbles.map((bubble, i) => (
                    <ChatBubble key={i} bubble={bubble} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-slate-muted text-sm">
          Already convinced?{' '}
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="text-terracotta font-semibold hover:underline">
            Try Stash in Telegram →
          </a>
        </p>
      </div>
    </section>
  )
}
