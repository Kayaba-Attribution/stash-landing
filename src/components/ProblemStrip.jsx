import { WifiOff, FileX, Sheet, FolderX } from 'lucide-react'

const PAINS = [
  {
    Icon: WifiOff,
    headline: '"Connect your bank, they said."',
    copy: "You don't trust it. Your bank blocks it. The sync breaks. Again.",
  },
  {
    Icon: FileX,
    headline: '"Just check your PDF statement."',
    copy: '60 lines of "POS DEBIT 4821". $340 you can\'t account for.',
  },
  {
    Icon: Sheet,
    headline: '"Build a spreadsheet."',
    copy: 'Beautiful for two weeks. A monument to good intentions after that.',
  },
  {
    Icon: FolderX,
    headline: '"Pick a category."',
    copy: 'Their 12 categories. Not yours. "Boba Tea" doesn\'t exist apparently.',
  },
]

export default function ProblemStrip() {
  return (
    <section className="bg-cream py-6 px-4 sm:px-6">
      {/* Island card — doesn't bleed to page edges */}
      <div className="max-w-5xl mx-auto bg-slate rounded-3xl px-8 py-14 md:px-14 md:py-16">
        <h2 className="font-display font-bold text-white text-2xl sm:text-3xl text-center mb-2">
          Sound familiar?
        </h2>
        <p className="text-white/45 text-center text-sm mb-10">
          You're not undisciplined. The tools are just badly designed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PAINS.map(({ Icon, headline, copy }) => (
            <div
              key={headline}
              className="flex gap-4 bg-white/5 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-terracotta/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={17} strokeWidth={1.75} className="text-terracotta" />
              </div>
              <div>
                <p className="text-white font-medium text-sm mb-1.5">{headline}</p>
                <p className="text-white/50 text-sm leading-relaxed">{copy}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10">
          <span className="inline-flex items-center gap-2 text-terracotta font-semibold text-base">
            There's a better way.
          </span>
        </p>
      </div>
    </section>
  )
}
