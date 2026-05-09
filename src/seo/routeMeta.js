import { SITE_NAME } from './site'

const pipe = (pageTitle) =>
  pageTitle.includes(SITE_NAME) ? pageTitle : `${pageTitle} | ${SITE_NAME}`

/** Title ≤ ~60 chars where possible; description 140–160 chars */
export const ROUTE_META = {
  '/': {
    title: pipe('AI Motivation Reels & Sports Short Videos App'),
    description:
      'UBIRT.AI is an AI video app for motivation, health, and sports: curated short reels on Android. Download free and start your daily spark.',
  },
  '/motivation': {
    title: pipe('AI Motivation Reels & Daily Mindset Videos'),
    description:
      'Fuel discipline with AI-curated motivation reels and mindset shorts. UBIRT.AI delivers daily sparks built for focus and mental toughness.',
  },
  '/health': {
    title: pipe('AI Health & Wellness Short Videos'),
    description:
      'Science-minded wellness and longevity reels in snackable video form. UBIRT.AI helps you build healthy habits with AI-curated health shorts.',
  },
  '/sports': {
    title: pipe('AI Sports Performance & Training Reels'),
    description:
      'Elite sports psychology and performance cues in short videos. UBIRT.AI uses AI curation to serve athletic motivation and training-minded reels.',
  },
  '/about': {
    title: pipe('About Us — Mission & AI Reels'),
    description:
      'Learn how UBIRT.AI blends AI with motivation, health, and sports reels to help people stay consistent. Mission, technology, and community.',
  },
  '/blog': {
    title: pipe('Blog — AI, Mindset & Performance'),
    description:
      'Articles on AI-powered motivation, resilience, and high performance from UBIRT.AI. Ideas and tactics for a stronger daily routine.',
  },
  '/contact': {
    title: pipe('Contact & Support'),
    description:
      'Contact UBIRT.AI for feedback, partnerships, or support. Reach our team by email or the on-site form—we reply on business days.',
  },
  '/privacy-policy': {
    title: pipe('Privacy Policy'),
    description:
      'How UBIRT.AI collects, uses, and protects your information when you use our website and app. Read our privacy practices.',
  },
  '/terms-of-service': {
    title: pipe('Terms of Service'),
    description:
      'Terms governing use of UBIRT.AI services, website content, and app. Read the rules, disclaimers, and user responsibilities.',
  },
}

export function getRouteMeta(pathname) {
  return ROUTE_META[pathname] ?? ROUTE_META['/']
}
