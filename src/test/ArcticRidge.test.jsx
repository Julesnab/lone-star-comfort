import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ArcticRidge from '../ArcticRidge'

// Suppress CSS injection noise in tests
vi.stubGlobal('CSS', { supports: () => false })

function renderApp() {
  return render(<ArcticRidge />)
}

describe('Nav', () => {
  it('renders brand name', () => {
    renderApp()
    // Brand appears in both nav and footer
    expect(screen.getAllByText('ARCTIC').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('RIDGE').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all nav links', () => {
    renderApp()
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Reviews' })).toHaveAttribute('href', '#reviews')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders call CTA with correct phone href', () => {
    renderApp()
    const callLinks = screen.getAllByRole('link', { name: /call now/i })
    expect(callLinks[0]).toHaveAttribute('href', 'tel:+17205550182')
  })
})

describe('Hero', () => {
  it('renders headline lines', () => {
    renderApp()
    expect(screen.getByText('KEEP YOUR')).toBeInTheDocument()
    expect(screen.getByText('COOL.')).toBeInTheDocument()
    expect(screen.getByText('ALL YEAR.')).toBeInTheDocument()
  })

  it('renders primary and secondary CTAs', () => {
    renderApp()
    expect(screen.getByRole('link', { name: 'Get a Free Quote' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'See Our Services' })).toHaveAttribute('href', '#services')
  })


})

describe('Emergency bar', () => {
  it('shows 24/7 emergency badge', () => {
    renderApp()
    expect(screen.getByText('24/7 EMERGENCY')).toBeInTheDocument()
  })

  it('links to phone number', () => {
    renderApp()
    const phoneLinks = screen.getAllByRole('link', { name: '(720) 555-0182' })
    expect(phoneLinks.length).toBeGreaterThan(0)
    expect(phoneLinks[0]).toHaveAttribute('href', 'tel:+17205550182')
  })
})

describe('Services', () => {
  it('renders all 6 service cards', () => {
    renderApp()
    // Use headings to target service card titles specifically
    expect(screen.getByRole('heading', { name: 'AC Installation & Repair' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Furnace & Heating' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Duct Cleaning & IAQ' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Maintenance Plans' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Water Heaters' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'New Construction' })).toBeInTheDocument()
  })

  it('service cards link to #contact', () => {
    renderApp()
    const serviceLinks = screen.getAllByText('Request service')
    expect(serviceLinks.length).toBeGreaterThan(0)
    serviceLinks.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '#contact')
    })
  })
})

describe('About / Why section', () => {
  it('renders stats', () => {
    renderApp()
    expect(screen.getByText('Years serving Denver')).toBeInTheDocument()
    expect(screen.getByText('Average Google rating')).toBeInTheDocument()
  })

  it('renders all trust points', () => {
    renderApp()
    expect(screen.getByText('Upfront pricing, no surprises')).toBeInTheDocument()
    expect(screen.getByText('NATE-certified technicians')).toBeInTheDocument()
    expect(screen.getByText('All work guaranteed in writing')).toBeInTheDocument()
    expect(screen.getByText('Clean, respectful of your home')).toBeInTheDocument()
  })
})

const MOCK_LIVE_REVIEWS = [
  { text: 'Fast and professional', author: 'Marcus T.', rating: 5, relativeTime: 'a week ago', source: 'Google Review' },
  { text: 'Great furnace install', author: 'Jennifer K.', rating: 5, relativeTime: '2 weeks ago', source: 'Google Review' },
  { text: 'Honest pricing', author: 'David R.', rating: 5, relativeTime: 'a month ago', source: 'Google Review' },
]

describe('Reviews', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows skeleton loading state initially', () => {
    fetch.mockReturnValue(new Promise(() => {}))
    renderApp()
    expect(screen.getByTestId('reviews-loading')).toBeInTheDocument()
  })

  it('renders live reviews after fetch resolves', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => MOCK_LIVE_REVIEWS })
    renderApp()
    await waitFor(() => expect(screen.getByText('Marcus T.')).toBeInTheDocument())
    expect(screen.getByText('Jennifer K.')).toBeInTheDocument()
    expect(screen.getByText('David R.')).toBeInTheDocument()
  })

  it('falls back to hardcoded reviews when fetch fails', async () => {
    fetch.mockRejectedValue(new Error('network'))
    renderApp()
    await waitFor(() => expect(screen.getByText('Marcus T.')).toBeInTheDocument())
  })

  it('renders star ratings for each live review', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => MOCK_LIVE_REVIEWS })
    renderApp()
    await waitFor(() => {
      expect(screen.getAllByText('★★★★★')).toHaveLength(3)
    })
  })

  it('always renders the "See all reviews" link', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => MOCK_LIVE_REVIEWS })
    renderApp()
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /see all reviews on google/i })).toBeInTheDocument()
    })
  })
})

describe('Contact form', () => {
  beforeEach(() => {
    // Default returns a non-ok response so the Reviews component falls back gracefully.
    // Individual tests override this with their own mockResolvedValue/mockRejectedValue.
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) }))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders all form fields', () => {
    renderApp()
    expect(screen.getByPlaceholderText('John Smith')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('(720) 000-0000')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('you@email.com')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('updates field values on input', async () => {
    const user = userEvent.setup()
    renderApp()
    const nameInput = screen.getByPlaceholderText('John Smith')
    await user.type(nameInput, 'Jane Doe')
    expect(nameInput).toHaveValue('Jane Doe')
  })

  it('shows sending state while submitting', async () => {
    fetch.mockResolvedValue({ json: () => new Promise(() => {}) }) // never resolves
    const user = userEvent.setup()
    renderApp()
    await user.type(screen.getByPlaceholderText('John Smith'), 'Test')
    await user.type(screen.getByPlaceholderText('(720) 000-0000'), '7201234567')
    await user.click(screen.getByRole('button', { name: /send request/i }))
    expect(await screen.findByRole('button', { name: /sending/i })).toBeDisabled()
  })

  it('shows success message after successful submission', async () => {
    fetch.mockResolvedValue({ json: async () => ({ success: true }) })
    const user = userEvent.setup()
    renderApp()
    await user.type(screen.getByPlaceholderText('John Smith'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('(720) 000-0000'), '7201234567')
    await user.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/request received/i)).toBeInTheDocument()
    })
  })

  it('shows error message on failed submission', async () => {
    fetch.mockResolvedValue({ json: async () => ({ success: false }) })
    const user = userEvent.setup()
    renderApp()
    await user.type(screen.getByPlaceholderText('John Smith'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('(720) 000-0000'), '7201234567')
    await user.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('shows error message when fetch throws', async () => {
    fetch.mockRejectedValue(new Error('network error'))
    const user = userEvent.setup()
    renderApp()
    await user.type(screen.getByPlaceholderText('John Smith'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('(720) 000-0000'), '7201234567')
    await user.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('clears form fields after successful submission', async () => {
    fetch.mockResolvedValue({ json: async () => ({ success: true }) })
    const user = userEvent.setup()
    renderApp()
    const nameInput = screen.getByPlaceholderText('John Smith')
    await user.type(nameInput, 'Jane Doe')
    await user.type(screen.getByPlaceholderText('(720) 000-0000'), '7201234567')
    await user.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => expect(nameInput).toHaveValue(''))
  })
})

describe('Footer', () => {
  it('renders copyright and license', () => {
    renderApp()
    expect(screen.getByText(/© 2026 Arctic Ridge HVAC/)).toBeInTheDocument()
    expect(screen.getByText(/CO-HVAC-2840/)).toBeInTheDocument()
  })

  it('renders NATE certified badge', () => {
    renderApp()
    expect(screen.getByText('NATE CERTIFIED')).toBeInTheDocument()
  })

  it('renders footer service links', () => {
    renderApp()
    expect(screen.getByText('AC Repair & Install')).toBeInTheDocument()
    // "Furnace & Heating" also appears in the footer column (not just services section)
    expect(screen.getAllByText('Furnace & Heating').length).toBeGreaterThanOrEqual(1)
  })
})
