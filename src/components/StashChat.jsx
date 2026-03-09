import { useState, useEffect, useRef } from 'react'

const MESSAGES = [
  {
    id: 0,
    from: 'user',
    text: 'coffee 5.50',
    time: '8:47 AM',
  },
  {
    id: 1,
    from: 'stash',
    lines: ['Logged $5.50 · Food', 'March: $312.40 spent', 'Budget remaining: $187.60', 'Day 4 🔥'],
    time: '8:47 AM',
  },
  {
    id: 2,
    from: 'stash',
    lines: ["Hey — nothing logged today.", "Spend anything? I won't judge. (Much.)"],
    time: '9:02 PM',
  },
  {
    id: 3,
    from: 'user',
    text: 'dinner 45, gas 60',
    time: '9:04 PM',
  },
  {
    id: 4,
    from: 'stash',
    lines: ['Logged both. March total now $418.40.', 'Still under budget. Good.'],
    time: '9:04 PM',
  },
]

// When each message appears (ms from cycle start)
const TIMINGS = [700, 2000, 4000, 5600, 6800]
const CYCLE_MS = 11000

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 animate-slide-up">
      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: '#2B5278' }}>S</div>
      <div
        className="rounded-2xl rounded-bl-sm px-3 py-2.5 flex gap-1 items-center"
        style={{ background: '#182533' }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/60 animate-typing-dot"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  )
}

function Message({ msg, cycleKey }) {
  const isUser = msg.from === 'user'
  return (
    <div
      key={`${cycleKey}-${msg.id}`}
      className={`flex items-end gap-2 animate-slide-up ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 mb-0.5" style={{ background: '#2B5278' }}>S</div>
      )}
      <div
        className="rounded-2xl px-3 py-2 max-w-[195px] text-xs leading-relaxed"
        style={{
          background: isUser ? '#2A5F42' : '#182533',
          borderBottomRightRadius: isUser ? '4px' : undefined,
          borderBottomLeftRadius: !isUser ? '4px' : undefined,
        }}
      >
        {isUser ? (
          <span className="text-white">{msg.text}</span>
        ) : (
          <div className="space-y-0.5">
            {msg.lines.map((line, i) => (
              <div key={i} className={i === 0 ? 'text-white font-medium' : 'text-white/65'}>
                {line}
              </div>
            ))}
          </div>
        )}
        <div className={`text-[10px] mt-1 ${isUser ? 'text-white/45 text-right' : 'text-white/30'}`}>
          {msg.time}
        </div>
      </div>
    </div>
  )
}

export default function StashChat() {
  const [visibleMessages, setVisibleMessages] = useState([])
  const [showTyping, setShowTyping] = useState(false)
  const [cycle, setCycle] = useState(0)
  const messagesContainerRef = useRef(null)

  useEffect(() => {
    setVisibleMessages([])
    setShowTyping(false)

    const timers = []

    MESSAGES.forEach((msg, i) => {
      // Show typing indicator 700ms before Stash messages
      if (msg.from === 'stash') {
        timers.push(setTimeout(() => setShowTyping(true), TIMINGS[i] - 700))
      }
      timers.push(
        setTimeout(() => {
          setShowTyping(false)
          setVisibleMessages((prev) => [...prev, msg])
        }, TIMINGS[i])
      )
    })

    // Loop
    timers.push(setTimeout(() => setCycle((c) => c + 1), CYCLE_MS))

    return () => timers.forEach(clearTimeout)
  }, [cycle])

  useEffect(() => {
    const el = messagesContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [visibleMessages, showTyping])

  return (
    <div className="relative w-[280px] mx-auto" style={{ paddingBottom: '2.5rem' }}>
      {/* Phone frame — float lives here so it doesn't affect layout bounds */}
      <div
        className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl animate-float"
        style={{
          background: '#0E1621',
          border: '1.5px solid rgba(255,255,255,0.12)',
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-6 pt-3 pb-1.5 text-white/50 text-[11px]"
          style={{ background: '#17212B' }}
        >
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <rect x="0.5" y="0.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeOpacity="0.5"/>
              <rect x="2" y="2" width="7" height="6" rx="0.5" fill="currentColor" fillOpacity="0.6"/>
              <path d="M13.5 3.5V7.5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Chat header */}
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{ background: '#17212B' }}
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #2B5278, #1a3a5c)' }}>S</div>
          <div>
            <div className="text-white text-sm font-semibold font-display leading-tight">Stash</div>
            <div className="text-white/40 text-[11px]">expense tracker · online</div>
          </div>
        </div>

        {/* Messages area */}
        <div
          ref={messagesContainerRef}
          className="px-3 py-3 h-64 overflow-y-auto flex flex-col gap-2 scrollbar-none"
          style={{ background: '#0E1621' }}
        >
          {visibleMessages.map((msg) => (
            <Message key={`${cycle}-${msg.id}`} msg={msg} cycleKey={cycle} />
          ))}

          {showTyping && <TypingIndicator />}
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-2 px-3 py-2.5"
          style={{ background: '#17212B' }}
        >
          <div
            className="flex-1 rounded-full px-4 py-1.5 text-white/25 text-xs"
            style={{ background: '#0E1621' }}
          >
            Message
          </div>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0"
            style={{ background: '#2B5278' }}
          >
            🎤
          </div>
        </div>
      </div>

      {/* Glow — sits inside the padded wrapper, won't overflow page */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-2xl pointer-events-none"
        style={{ background: '#6B9E78', opacity: 0.3 }}
      />
    </div>
  )
}
