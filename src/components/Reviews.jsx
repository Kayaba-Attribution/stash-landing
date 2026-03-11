const REVIEWS = [
  {
    initials: 'SL',
    name: 'Sarah L.',
    location: 'Toronto',
    stars: 5,
    text: "ok so i've been using this for like 6 weeks and i actually know where my money goes now?? which is wild bc i've tried so many apps lol",
    color: 'bg-sage text-white',
  },
  {
    initials: 'MK',
    name: 'Marcus K.',
    location: 'Vancouver',
    stars: 5,
    text: "honestly the only reason i stuck with it is bc its just telegram. i dont wanna download another app. this just works",
    color: 'bg-terracotta text-white',
  },
  {
    initials: 'AP',
    name: 'Anya P.',
    location: 'Montreal',
    stars: 5,
    text: "it messaged me saying i hadnt logged in 3 days and i felt so called out lmao. logged right away",
    color: 'bg-slate text-white',
  },
  {
    initials: 'JR',
    name: 'James R.',
    location: 'Calgary',
    stars: 5,
    text: "saw how much i spent on uber eats last month and had to sit with that for a minute. not proud but at least i know now",
    color: 'bg-sage text-white',
  },
  {
    initials: 'TN',
    name: 'Tanya N.',
    location: 'Ottawa',
    stars: 5,
    text: "me and my bf both use it and we compare at the end of the month. its embarrassing but also we've actually saved money so",
    color: 'bg-terracotta text-white',
  },
  {
    initials: 'DW',
    name: 'Dev W.',
    location: 'Edmonton',
    stars: 5,
    text: "blew my coffee budget by thursday of week 1. stash said \"noted\" and i felt that personally",
    color: 'bg-slate text-white',
  },
  {
    initials: 'CL',
    name: 'Clara L.',
    location: 'Winnipeg',
    stars: 5,
    text: "no bank connection stuff which was my whole thing w other apps. u just tell it what u spent. thats literally it",
    color: 'bg-terracotta text-white',
  },
  {
    initials: 'RB',
    name: 'Ryan B.',
    location: 'Halifax',
    stars: 5,
    text: "im on a 14 day streak and i genuinely will not let it break. idk how they made me care about this but here we are",
    color: 'bg-sage text-white',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#D4745A">
          <path d="M6 0.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L6 8.355 2.91 9.009l.59-3.44L1 3.132l3.455-.502z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ initials, name, location, stars, text, color }) {
  return (
    <div className="w-72 flex-shrink-0 bg-white border border-slate/8 rounded-2xl p-6 shadow-sm mx-3">
      <StarRating count={stars} />
      <p className="text-slate text-sm leading-relaxed mb-5">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${color}`}>
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate leading-none">{name}</p>
          <p className="text-xs text-slate-muted mt-0.5">{location}</p>
        </div>
      </div>
    </div>
  )
}

const ROW1 = [...REVIEWS, ...REVIEWS]
const ROW2 = [...REVIEWS.slice(4), ...REVIEWS.slice(0, 4), ...REVIEWS.slice(4), ...REVIEWS.slice(0, 4)]

export default function Reviews() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .marquee-left  { animation: marquee-left  40s linear infinite; }
        .marquee-right { animation: marquee-right 40s linear infinite; }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
        <p className="text-slate-muted text-sm font-medium uppercase tracking-widest mb-3">What users say</p>
        <h2 className="font-display font-bold text-slate text-3xl lg:text-4xl">
          People are logging.
        </h2>
      </div>

      <div className="space-y-4">
        {/* Row 1 — scrolls left */}
        <div className="flex">
          <div className="flex marquee-left will-change-transform">
            {ROW1.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex">
          <div className="flex marquee-right will-change-transform">
            {ROW2.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
