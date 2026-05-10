import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../app/page.jsx';

// Silence jsdom scroll errors
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.scrollTo = jest.fn();

describe('Nav', () => {
  it('renders the logo', () => {
    render(<App />);
    expect(screen.getAllByText('Lone Star Comfort Systems').length).toBeGreaterThan(0);
  });

  it('renders all nav links', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Why Us' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders Book Now buttons', () => {
    render(<App />);
    expect(screen.getAllByRole('button', { name: 'Book Now' }).length).toBeGreaterThan(0);
  });
});

describe('Hero', () => {
  it('renders the headline', () => {
    render(<App />);
    expect(screen.getByText("San Antonio summers don't forgive.")).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<App />);
    expect(screen.getByText("Your AC shouldn't either.")).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Book a Free AC Inspection' })).toBeInTheDocument();
  });

  it('renders the trust badge', () => {
    render(<App />);
    expect(screen.getByText(/Veteran-Owned · TACLA Licensed/)).toBeInTheDocument();
  });
});

describe('Services', () => {
  it('renders the section heading', () => {
    render(<App />);
    expect(screen.getByText('What We Do')).toBeInTheDocument();
  });

  it('renders all 6 service cards', () => {
    render(<App />);
    expect(screen.getByText('AC Installation & Repair')).toBeInTheDocument();
    expect(screen.getByText('Humidity Control')).toBeInTheDocument();
    expect(screen.getByText('Ductwork Services')).toBeInTheDocument();
    expect(screen.getByText('Heating & Furnaces')).toBeInTheDocument();
    expect(screen.getByText('Indoor Air Quality')).toBeInTheDocument();
    expect(screen.getByText('Smart Thermostats')).toBeInTheDocument();
  });
});

describe('About', () => {
  it('renders the heading', () => {
    render(<App />);
    expect(screen.getByText('Built on Honest Work')).toBeInTheDocument();
  });

  it('renders all stats', () => {
    render(<App />);
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('520+')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('Years in San Antonio')).toBeInTheDocument();
    expect(screen.getByText('Five-Star Reviews')).toBeInTheDocument();
    expect(screen.getByText('Emergency Service')).toBeInTheDocument();
  });
});

describe('WhyUs', () => {
  it('renders the section heading', () => {
    render(<App />);
    expect(screen.getByText('Why San Antonio Chooses Lone Star')).toBeInTheDocument();
  });

  it('renders all six reasons', () => {
    render(<App />);
    expect(screen.getByText('No Commission Sales')).toBeInTheDocument();
    expect(screen.getByText('Humidity Specialists')).toBeInTheDocument();
    expect(screen.getByText('Trane & Rheem Authorized')).toBeInTheDocument();
    expect(screen.getByText('Financing Available')).toBeInTheDocument();
    expect(screen.getByText('Veteran-Owned')).toBeInTheDocument();
    expect(screen.getByText('Same-Day Service')).toBeInTheDocument();
  });
});

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<App />);
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
  });

  it('renders all three reviewers', () => {
    render(<App />);
    expect(screen.getByText('Maria G.')).toBeInTheDocument();
    expect(screen.getByText('James R.')).toBeInTheDocument();
    expect(screen.getByText('Sandra T.')).toBeInTheDocument();
  });
});

describe('Contact', () => {
  it('renders the phone number as a link', () => {
    render(<App />);
    const phoneLink = screen.getByRole('link', { name: '(210) 554-7820' });
    expect(phoneLink).toHaveAttribute('href', 'tel:2105547820');
  });

  it('renders the email link', () => {
    render(<App />);
    const emailLink = screen.getByRole('link', { name: 'service@lonestarcomfort.com' });
    expect(emailLink).toHaveAttribute('href', 'mailto:service@lonestarcomfort.com');
  });

  it('renders the contact form fields', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('How can we help?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  it('shows success message after successful form submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('Email Address'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('How can we help?'), { target: { value: 'Need AC repair' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });
  });

  it('shows error message on failed form submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    render(<App />);

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });

  it('shows error message when fetch throws', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
    render(<App />);

    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });
});

describe('Footer', () => {
  it('renders the tagline', () => {
    render(<App />);
    expect(screen.getByText('Keeping San Antonio comfortable since 2008.')).toBeInTheDocument();
  });

  it('renders the license line', () => {
    render(<App />);
    expect(screen.getByText(/TACLA Licensed & Insured · Veteran-Owned/)).toBeInTheDocument();
  });

  it('renders the copyright', () => {
    render(<App />);
    expect(screen.getByText(/© 2025 Lone Star Comfort Systems LLC/)).toBeInTheDocument();
  });
});
