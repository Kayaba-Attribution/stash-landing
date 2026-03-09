import { useState, useEffect } from 'react'

const BOT_URL = 'https://t.me/your_bot_here'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-4 flex items-center justify-between">
        <span className="font-display font-black text-slate text-2xl tracking-tight">Stash</span>
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-terracotta text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-terracotta-dark transition-all hover:shadow-md hover:shadow-terracotta/20"
        >
          Open in Telegram →
        </a>
      </div>
    </nav>
  )
}
