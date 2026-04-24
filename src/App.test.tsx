import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { Hero } from './components/Hero'
import { LANDING_SECTION_TEST_IDS } from './landing/sections'

describe('App', () => {
  it('renders every landing section in document order', () => {
    const { container } = render(<App />)
    const testIds = [...LANDING_SECTION_TEST_IDS]

    const elements = testIds.map((id) => {
      const el = container.querySelector(`[data-testid="${id}"]`)
      expect(el, `missing ${id}`).not.toBeNull()
      return el as HTMLElement
    })

    for (let i = 1; i < elements.length; i++) {
      expect(
        elements[i - 1].compareDocumentPosition(elements[i]) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    }
  })

  it('surfaces the primary value proposition in the hero', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /kieszonkowe na oszczędzanie/i,
      }),
    ).toBeVisible()
  })

  it('exposes store CTAs with accessible names', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /App Store/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Google Play/i }).length).toBeGreaterThanOrEqual(1)
  })
})

describe('FAQ', () => {
  it('reveals an answer when its question is activated', async () => {
    const user = userEvent.setup()
    render(<App />)

    const section = screen.getByTestId('section-faq')
    const cloudQuestion = within(section).getByRole('button', {
      name: /chmury/i,
    })

    expect(within(section).queryByText(/Backupy wykonujesz ręcznie/i)).not.toBeInTheDocument()

    await user.click(cloudQuestion)

    expect(within(section).getByText(/Backupy wykonujesz ręcznie/i)).toBeVisible()
  })
})

describe('Responsive layout hooks', () => {
  it('scales hero typography down on narrow breakpoints', () => {
    const { container } = render(<Hero />)
    const heading = container.querySelector('h1')
    expect(heading?.className).toMatch(/text-4xl/)
    expect(heading?.className).toMatch(/xl:text-8xl/)
  })

  it('keeps the phone mock in a transform wrapper for small viewports', () => {
    const { container } = render(<Hero />)
    const scaled = container.querySelector('[class*="scale-[0.72]"]')
    expect(scaled).not.toBeNull()
  })
})
