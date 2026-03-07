# Landing Page UI Plan

## Stack

- React + Vite
- Tailwind CSS + shadcn/ui
- Deploy: Cloudflare Pages via git push

---

## Section Count: 6

Your original 5 sections are right but missing one that does critical work — the **problem strip**. Without it, the hero lands in a vacuum. People need the "that's me" moment before they care about the solution.

Social proof at this stage = FAQ, not testimonials. Swap it for an objection-handling strip between Pricing and Final CTA. Leaning into sparse testimonials hurts trust more than it helps.

| # | Section | Job |
|---|---------|-----|
| 1 | Hero | Hook + introduce Stash + primary CTA |
| 2 | Problem Strip | "Sound familiar?" — 4 pain points, fast |
| 3 | How It Works | 3 steps with real chat UI — this IS the demo |
| 4 | Feature Callouts | 3 differentiators in Stash's voice |
| 5 | Pricing + FAQ | Convert the convinced, handle objections |
| 6 | Final CTA | Last chance, Stash front and center |

---

## Palette + Typography

```js
// tailwind.config.js
colors: {
  sage: '#6B9E78',
  'sage-light': '#EBF3ED',
  terracotta: '#D4745A',
  'terracotta-light': '#FAF0EC',
  cream: '#F5F2EC',
  slate: '#1E2A2A',
  'slate-muted': '#4A5A5A',
}
```

**Font:** Plus Jakarta Sans — rounder, friendlier than Inter, still clean.

---

## Section 1 — Hero

**Layout:** Two-column on desktop (60/40 split), stacked on mobile. Full viewport height. Background: `cream`.

### Left Column

- Pill badge: `bg-terracotta-light text-terracotta rounded-full px-3 py-1 text-sm`
  → "Meet Stash, your expense pal"
- `h1` bold, dark slate: **"Track expenses by texting."**
- Subheadline `text-slate-muted text-lg leading-relaxed`:
  > "No bank connection. No spreadsheet. No new app. Just open Telegram, text Stash what you spent, and he handles the rest."
- Primary CTA: `bg-terracotta text-white rounded-full px-6 py-3 font-semibold hover:bg-terracotta/90`
  → **"Meet Stash — it's free"**
- Trust line below button: `text-sm text-slate-muted`
  → "Free to start · 30 expenses/month · No credit card"

### Right Column — Chat Mockup (primary conversion asset)

Custom component `<StashChat />`. Must look exactly like Telegram dark UI — not a screenshot, not an icon. This sells the product before anyone reads a word.

```
┌──────────────────────────────┐
│  🐿 Stash          ●●●       │  ← header bar, dark slate bg
├──────────────────────────────┤
│                              │
│  [you]  coffee 5.50    →     │  ← user bubble, sage bg
│                              │
│ ← [Stash avatar]             │
│   Logged $5.50 · Food        │  ← Stash bubble, white/10 bg
│   March: $312.40 spent       │
│   Budget remaining: $187.60  │
│   Day 4 🔥                   │
│                              │
│ ← [Stash avatar]  9:02 PM    │
│   Hey — nothing logged today │
│   Spend anything? I won't    │
│   judge. (Much.)             │
│                              │
│  [text input bar]            │
└──────────────────────────────┘
```

- Phone frame: `rounded-3xl shadow-2xl border border-white/10`
- Chat background: `#1E2A2A` (slate)
- User bubbles: `bg-sage text-white` rounded right
- Stash bubbles: `bg-white/10 text-white` rounded left + small squirrel avatar
- Animation: messages appear sequentially with CSS `animation-delay` or Framer Motion. Loops.

**Mobile:** Chat mockup goes first above the fold, copy below.

---

## Section 2 — Problem Strip

**Layout:** `bg-slate` full width — strong visual contrast after the warm hero. Fast and scannable.

**Header:** `text-white text-2xl font-semibold text-center`
→ "Sound familiar?"

**Subheader:** `text-white/50 text-center text-sm mb-10`
→ "You're not undisciplined. The tools are just badly designed."

**4 pain point cards** — 2×2 grid desktop, stacked mobile.
Each: `bg-white/5 rounded-xl p-6 border border-white/10`

| Icon | Headline | Copy |
|------|----------|------|
| Link | "Connect your bank, they said." | You don't trust it. Your bank blocks it. The sync breaks. |
| FileText | "Just check your PDF statement." | 60 lines of "POS DEBIT 4821". $340 you can't account for. |
| Table | "Build a spreadsheet." | Beautiful for two weeks. A monument to good intentions after that. |
| Tag | "Pick a category." | Their 12 categories. Not yours. "Boba Tea" doesn't exist apparently. |

Icon color: `text-terracotta`. Headline: `text-white font-medium`. Copy: `text-white/60 text-sm`.

**Pivot line** bottom center: `text-terracotta font-medium text-lg mt-10`
→ "There's a better way."

---

## Section 3 — How It Works

**Layout:** `bg-cream`. Header centered. 3 steps horizontal (desktop), vertical (mobile).

**Header:** `text-slate text-3xl font-bold text-center`
→ "As easy as texting a friend."

### 3 Steps

Each step: step number + title + one line of copy + real chat bubble.
Container: `bg-white rounded-xl shadow-sm p-6`

**Step 01 — "Text what you spent"**
Copy: "Any format. Any amount. Stash figures out the rest."
```
You: coffee 5.50
```

**Step 02 — "Stash logs it instantly"**
Copy: "Category, month total, budget remaining. Every time."
```
Stash: Logged $5.50 · Food
       March: $312.40 · $187.60 left
       Day 4 🔥
```

**Step 03 — "Stash checks in if you go quiet"**
Copy: "Miss a day and Stash notices. He has thoughts about it."
```
Stash: Two days quiet. Either you're
       fasting or avoiding me.
       Anything to catch up on?
```

- Step number: `text-terracotta font-bold text-sm` → "01", "02", "03"
- Connector line between steps (desktop): dashed horizontal line in `sage-light`
- Chat bubbles: styled consistently with hero mockup. User bubbles `bg-sage`, Stash bubbles `bg-slate/5`.

---

## Section 4 — Feature Callouts

**Layout:** `bg-white`. 3 cards in a row.

**Header:** `text-slate text-3xl font-bold text-center`
→ "What makes Stash different."

### 3 Cards

shadcn `Card` — `rounded-2xl p-8 border border-sage/20 hover:shadow-md transition`

**Card 1 — No bank connection**
- Icon: Lock, `text-sage`
- Headline: "No bank login. No Plaid. No OAuth."
- Body: "You tell Stash what you spent. He tracks it. Your bank credentials stay with your bank. Always."
- Tag: `bg-sage-light text-sage text-xs rounded-full px-2 py-1` → "Privacy first"

**Card 2 — Stash checks in daily**
- Icon: Stash avatar (small squirrel), `text-terracotta`
- Headline: "Stash notices when you've gone quiet."
- Body: "If you haven't logged by evening, Stash sends a nudge in Telegram. Reply right there. No broken streaks."
- Tag: `bg-terracotta-light text-terracotta text-xs rounded-full px-2 py-1` → "Built-in accountability"

**Card 3 — Your categories**
- Icon: Tag, `text-sage`
- Headline: "Your categories, not ours."
- Body: "Add 'Date Nights', 'Boba Tea', 'Side Project' — anything. Stash matches your spending to it automatically."
- Tag: `bg-sage-light text-sage text-xs rounded-full px-2 py-1` → "Fully custom"

---

## Section 5 — Pricing + FAQ

**Layout:** `bg-cream`. 3-column card layout.

**Header:** `text-slate text-3xl font-bold text-center` → "Simple pricing."
**Subheader:** `text-slate-muted text-center` → "Less than a coffee a month. Stash approves."

### Pricing Cards

**Free** — `bg-white rounded-2xl p-8 border border-slate/10`
- Price: `text-4xl font-bold text-slate` → "$0"
- Subtext: "to get started"
- Features: checkmarks in `text-sage`
  - 30 expenses/month
  - Monthly spending summary
  - 1 total budget
  - Daily check-ins from Stash
- CTA: shadcn `Button variant="outline"` → "Meet Stash"

**Pro** — `bg-slate rounded-2xl p-8 ring-2 ring-terracotta` (elevated, slightly larger via `scale-105`)
- Label badge: `bg-terracotta text-white text-xs rounded-full px-2 py-1` → "Most popular"
- Price: `text-4xl font-bold text-white` → "$4.99/mo"
- Features: checkmarks in `text-terracotta`
  - Unlimited expenses
  - Per-category budgets
  - Savings goals
  - Top merchants report
  - Custom categories
  - CSV export
  - All query types
  - Daily check-ins from Stash
- CTA: `bg-terracotta text-white rounded-full` → "Go Pro"

**Family** — `bg-white rounded-2xl p-8 border border-slate/10`
- Price: `text-4xl font-bold text-slate` → "$9.99/mo"
- Subtext: "up to 5 users"
- Features: checkmarks in `text-sage`
  - Everything in Pro
  - Up to 5 users
  - Shared household view
- CTA: shadcn `Button variant="outline"` → "Get Family"

### FAQ Strip (below pricing)

shadcn `Accordion` — 2-column grid desktop, single column mobile.

| Question | Answer |
|----------|--------|
| "Do I need to connect my bank?" | Never. You tell Stash what you spent. That's it. |
| "What if I have multiple accounts?" | Doesn't matter. Cash, card, or credit — just text what you spent. |
| "What if I forget to log?" | Stash notices. He'll check in at the end of the day. |
| "Can I use my own categories?" | Yes. Add anything. Stash will match your spending to it automatically. |
| "Is my data safe?" | Stored privately, tied only to your Telegram ID. No bank access, ever. |
| "Can I cancel?" | Anytime. No lock-in. |

---

## Section 6 — Final CTA

**Layout:** `bg-slate` full width. Centered. High contrast close.

- Stash illustration centered, large (200–250px) — only place on the page Stash appears full size
- Headline: `text-white text-4xl font-bold text-center` → "Ready to actually track your spending?"
- Body: `text-white/60 text-center text-lg` → "No bank link. No spreadsheet. Just Stash."
- CTA: `bg-terracotta text-white rounded-full px-8 py-4 text-lg font-semibold` → "Meet Stash — it's free"
- Below button: `text-white/40 text-sm text-center` → "Opens in Telegram · Free to start · No credit card"

---

## Component Inventory

| Component | Source | Notes |
|-----------|--------|-------|
| `Button` | shadcn | Primary = terracotta, Outline = slate border |
| `Card` | shadcn | Feature cards, pricing cards |
| `Accordion` | shadcn | FAQ section |
| `Badge` | shadcn | Tier labels, feature tags |
| `<StashChat />` | Custom | Animated Telegram-style chat mockup |
| `<ChatBubble />` | Custom | Reused in hero + How It Works steps |
| `<HowItWorksStep />` | Custom | Step number + title + copy + chat bubble |
| `<PainCard />` | Custom | Dark card with icon, headline, copy |
| `<PricingCard />` | Custom | Wraps shadcn Card with tier-specific styling |

---

## Conversion Decisions

- **CTA appears 4 times:** hero, after How It Works (subtle text link), pricing (×3), final CTA
- **"No credit card"** near every primary CTA — removes the last objection before the click
- **Chat UI is custom-built, not a screenshot** — looks real, stays on-brand, is update-able
- **Stash's voice in section headers** — not "Features", not "How It Works" — his personality bleeds into the page copy
- **Dark problem strip** creates a pattern interrupt — stops scroll, forces reading
- **Pricing before final CTA** — people are convinced by features, then hit pricing, then the emotional close gives them a push
- **FAQ lives inside the pricing section** — objections answered at the exact moment someone is deciding whether to pay

---

## Build Order

1. Tailwind config with brand tokens
2. `<StashChat />` animated component — get this right first, it's the hero
3. Hero section — validate the full layout
4. Problem strip — fast to build, high conversion value
5. How It Works — reuses `<ChatBubble />`
6. Feature cards
7. Pricing + FAQ
8. Final CTA
