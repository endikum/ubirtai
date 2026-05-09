/** FAQPage mainEntity — synced with visible FAQ in HomeFaq.jsx */
export const HOME_FAQ_MAIN_ENTITY = [
  {
    '@type': 'Question',
    name: 'What is UBIRT.AI?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'UBIRT.AI is an Android app that delivers AI-curated short videos focused on motivation, health, and sports so users can build consistency with daily reels.',
    },
  },
  {
    '@type': 'Question',
    name: 'How does UBIRT.AI use AI for reels?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'The product curates and shapes short-form video experiences using proprietary workflows so each feed emphasizes mindset, wellness, or athletic performance themes.',
    },
  },
  {
    '@type': 'Question',
    name: 'Where can I download UBIRT.AI?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'UBIRT.AI is available on Google Play for Android. An iOS release is planned; use the website waitlist form for updates.',
    },
  },
  {
    '@type': 'Question',
    name: 'What topics do UBIRT.AI reels cover?',
    acceptedAnswer: {
      '@type': 'Answer',
      text:
        'Core pillars are motivation, holistic health, and sports performance. Visitors can start from the homepage or dedicated paths for motivation, health, or sports.',
    },
  },
]

export function isHomeRoute(pathname) {
  return ['/', '/motivation', '/health', '/sports'].includes(pathname)
}
