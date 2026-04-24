/** Stable ids for tests and analytics; keep in sync with `App` section wrappers. */
export const LANDING_SECTION_TEST_IDS = [
  'section-hero',
  'section-problem',
  'section-how-it-works',
  'section-features',
  'section-pricing',
  'section-testimonials',
  'section-faq',
  'section-cta',
  'section-footer',
] as const

export type LandingSectionTestId = (typeof LANDING_SECTION_TEST_IDS)[number]
