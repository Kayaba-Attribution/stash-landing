import { ShieldCheck, BellRing, Sliders } from 'lucide-react'

const FEATURES = [
  {
    Icon: ShieldCheck,
    iconBg: 'bg-sage-light',
    iconColor: 'text-sage-dark',
    tag: 'Privacy first',
    tagStyle: 'bg-sage-light text-sage-dark',
    headline: 'No bank login. No Plaid. No OAuth.',
    body: "You tell Stash what you spent. He tracks it. Your bank credentials stay with your bank. Always.",
    wide: true,
  },
  {
    Icon: BellRing,
    iconBg: 'bg-terracotta-light',
    iconColor: 'text-terracotta',
    tag: 'Built-in accountability',
    tagStyle: 'bg-terracotta-light text-terracotta',
    headline: 'He notices when you go quiet.',
    body: "Miss a day and Stash sends a nudge at end of day. Reply right in Telegram.",
    wide: false,
  },
  {
    Icon: Sliders,
    iconBg: 'bg-sage-light',
    iconColor: 'text-sage-dark',
    tag: 'Fully custom',
    tagStyle: 'bg-sage-light text-sage-dark',
    headline: 'Your categories, not ours.',
    body: "\"Boba Tea\", \"Date Nights\", \"Side Project\" — anything. Stash auto-matches.",
    wide: false,
  },
]

export default function Features() {
  const [wide, ...narrow] = FEATURES

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-slate text-2xl sm:text-3xl lg:text-4xl text-center mb-2">
          What makes Stash different.
        </h2>
        <p className="text-slate-muted text-sm text-center mb-12">
          Designed around how people actually behave.
        </p>

        {/* Wide card on top */}
        <div className="rounded-3xl border border-sage/15 bg-gradient-to-br from-sage-light/60 to-cream p-8 md:p-10 mb-5 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
          <div className={`w-12 h-12 rounded-2xl ${wide.iconBg} flex items-center justify-center flex-shrink-0`}>
            <wide.Icon size={22} strokeWidth={1.75} className={wide.iconColor} />
          </div>
          <div className="flex-1">
            <span className={`inline-block text-xs rounded-full px-2.5 py-1 font-semibold mb-3 ${wide.tagStyle}`}>
              {wide.tag}
            </span>
            <h3 className="font-display font-bold text-slate text-xl sm:text-2xl leading-snug mb-2">
              {wide.headline}
            </h3>
            <p className="text-slate-muted leading-relaxed">{wide.body}</p>
          </div>
        </div>

        {/* Two narrower cards below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {narrow.map((f) => (
            <div
              key={f.headline}
              className="rounded-3xl border border-slate/8 bg-cream/60 p-7 flex flex-col gap-4 hover:shadow-sm transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl ${f.iconBg} flex items-center justify-center`}>
                <f.Icon size={18} strokeWidth={1.75} className={f.iconColor} />
              </div>
              <div>
                <span className={`inline-block text-xs rounded-full px-2.5 py-1 font-semibold mb-2 ${f.tagStyle}`}>
                  {f.tag}
                </span>
                <h3 className="font-display font-semibold text-slate text-lg leading-snug mb-1.5">
                  {f.headline}
                </h3>
                <p className="text-slate-muted text-sm leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
