import React from 'react'
import { Link } from 'react-router-dom'

const FAQ_ITEMS = [
  {
    question: 'What is UBIRT.AI?',
    answer:
      'UBIRT.AI is an Android app that delivers AI-curated short videos focused on motivation, health, and sports so users can build consistency with daily reels.',
  },
  {
    question: 'How does UBIRT.AI use AI for reels?',
    answer:
      'The product curates and shapes short-form video experiences using proprietary workflows so each feed emphasizes mindset, wellness, or athletic performance themes.',
  },
  {
    question: 'Where can I download UBIRT.AI?',
    answer: (
      <>
        UBIRT.AI is available on{' '}
        <a
          href="https://play.google.com/store/apps/details?id=ubirtai.app"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play for Android
        </a>
        . An iOS release is planned; use the website waitlist form for updates.
      </>
    ),
  },
  {
    question: 'What topics do UBIRT.AI reels cover?',
    answer: (
      <>
        Core pillars are motivation, holistic health, and sports performance. Start from the{' '}
        <Link to="/" className="text-primary hover:underline">
          homepage
        </Link>
        , or browse{' '}
        <Link to="/motivation" className="text-primary hover:underline">
          motivation
        </Link>
        ,{' '}
        <Link to="/health" className="text-primary hover:underline">
          health
        </Link>
        , or{' '}
        <Link to="/sports" className="text-primary hover:underline">
          sports
        </Link>{' '}
        hubs.
      </>
    ),
  },
]

export default function HomeFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-display font-bold text-textMain text-center mb-4"
        >
          Frequently asked questions
        </h2>
        <p className="text-textMuted text-center mb-12 text-lg">
          Quick answers about the UBIRT.AI app, AI-curated reels, and where to get started.
        </p>
        <dl className="space-y-8">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <div
              key={question}
              className="glass-card p-6 md:p-8 border border-white/5"
            >
              <dt className="text-lg font-display font-semibold text-white mb-3">
                {question}
              </dt>
              <dd className="text-textMuted leading-relaxed">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
