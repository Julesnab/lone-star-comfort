'use client';

import { useState, useEffect, useRef } from 'react';

const COLORS = {
  sienna:   '#C1440E',
  cream:    '#FAF4EC',
  charcoal: '#232323',
  sand:     '#D4B483',
  white:    '#FFFFFF',
  lightGray:'#F0EBE3',
};

const CONTENT = {
  nav: {
    logo: 'Lone Star Comfort Systems',
    links: ['Services', 'About', 'Why Us', 'Contact'],
  },

  hero: {
    headline: "San Antonio summers don't forgive.",
    subheadline: "Your AC shouldn't either.",
    body: "Lone Star Comfort Systems has kept San Antonio families cool and comfortable since 2008. Honest diagnostics. Fair prices. Techs who show up when they say they will.",
    cta: 'Book a Free AC Inspection',
    badge: 'Veteran-Owned · TACLA Licensed · 4.9★ on Google',
  },

  services: {
    heading: 'What We Do',
    subheading: "Full-service HVAC for San Antonio's climate — not just your equipment, but your whole home's comfort.",
    items: [
      {
        title: 'AC Installation & Repair',
        description: 'New systems, emergency repairs, and tune-ups for every major brand. We size systems correctly for Texas heat.',
      },
      {
        title: 'Humidity Control',
        description: "It's not just the heat — it's the humidity. We design and install whole-home dehumidification systems.",
      },
      {
        title: 'Ductwork Services',
        description: 'Leaky ducts can cost you 20–30% in efficiency. We inspect, seal, and replace ductwork the right way.',
      },
      {
        title: 'Heating & Furnaces',
        description: 'When San Antonio winters turn cold fast, your heat needs to work. Repair, replacement, and annual tune-ups.',
      },
      {
        title: 'Indoor Air Quality',
        description: 'UV purifiers, air scrubbers, and filtration systems that remove allergens, mold spores, and pollutants.',
      },
      {
        title: 'Smart Thermostats',
        description: 'Nest, Ecobee, and Honeywell installations. Control your comfort and cut your energy bill from your phone.',
      },
    ],
  },

  about: {
    heading: 'Built on Honest Work',
    body1: "Derek Cantu started Lone Star in 2008 after a decade as a technician — watching too many San Antonio families get gouged by big franchises during August breakdowns. He built Lone Star around a simple idea: show up on time, tell the truth about what's wrong, and charge a fair price.",
    body2: "Every technician on our team is NATE-certified and background-checked. We don't pay commissions, so nobody has a reason to sell you something you don't need. Just honest diagnostics and work you can trust.",
    stats: [
      { value: '15+', label: 'Years in San Antonio' },
      { value: '520+', label: 'Five-Star Reviews' },
      { value: '4.9★', label: 'Google Rating' },
      { value: '24/7', label: 'Emergency Service' },
    ],
  },

  whyUs: {
    heading: 'Why San Antonio Chooses Lone Star',
    items: [
      {
        title: 'No Commission Sales',
        description: "Our techs aren't paid to upsell. They're paid to fix your problem correctly.",
      },
      {
        title: 'Humidity Specialists',
        description: "Most HVAC companies treat humidity as an afterthought. We've built our whole approach around it.",
      },
      {
        title: 'Trane & Rheem Authorized',
        description: 'Factory-trained on the brands built for extreme heat. Warranty-approved installations.',
      },
      {
        title: 'Financing Available',
        description: 'Flexible payment plans through Synchrony. Apply in minutes, get comfort today.',
      },
      {
        title: 'Veteran-Owned',
        description: "Derek served before he started swinging wrenches. That service mindset shows in how we run our business.",
      },
      {
        title: 'Same-Day Service',
        description: "When your AC goes out in July, you can't wait a week. We keep slots open for same-day calls.",
      },
    ],
  },

  testimonials: {
    heading: 'What Our Customers Say',
    items: [
      {
        name: 'Maria G.',
        location: 'Helotes, TX',
        stars: 5,
        text: "AC went out on a Saturday in July. Derek had a tech at my house by noon. Fixed it same day, didn't try to sell me a new unit I didn't need. Lone Star has a customer for life.",
      },
      {
        name: 'James R.',
        location: 'Boerne, TX',
        stars: 5,
        text: "Three other companies told me I needed a full replacement. Lone Star found a bad capacitor and fixed it for $180. Honest people are hard to find. These guys are the real deal.",
      },
      {
        name: 'Sandra T.',
        location: 'San Antonio, TX',
        stars: 5,
        text: "Had them install a whole-home dehumidifier last spring. The difference in our house is night and day. Our AC runs less and the air actually feels clean. Worth every penny.",
      },
    ],
  },

  contact: {
    heading: "Let's Get Your Home Comfortable",
    subheading: 'Free inspections. Same-day availability. No pressure quotes.',
    phone: '(210) 554-7820',
    email: 'service@lonestarcomfort.com',
    address: '3112 Fredericksburg Rd, San Antonio, TX 78201',
    hours: 'Mon–Fri 7am–7pm · Sat 8am–4pm · 24/7 Emergency',
    formCta: 'Send Message',
    web3formsKey: 'YOUR_WEB3FORMS_KEY_HERE',
  },

  footer: {
    tagline: "Keeping San Antonio comfortable since 2008.",
    license: 'TACLA Licensed & Insured · Veteran-Owned · EPA 608 Certified',
    copyright: '© 2025 Lone Star Comfort Systems LLC. All rights reserved.',
  },
};

// --- SVG Icons (replacing emoji) ---

function ServiceIcon({ idx, size = 32 }) {
  const c = COLORS.sienna;
  const shared = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: c, strokeWidth: '1.5',
    strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  if (idx === 0) return (
    // Snowflake — AC Installation & Repair
    <svg {...shared}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <line x1="12" y1="7" x2="9" y2="5" />
      <line x1="12" y1="7" x2="15" y2="5" />
      <line x1="12" y1="17" x2="9" y2="19" />
      <line x1="12" y1="17" x2="15" y2="19" />
      <line x1="7" y1="12" x2="5" y2="9" />
      <line x1="7" y1="12" x2="5" y2="15" />
      <line x1="17" y1="12" x2="19" y2="9" />
      <line x1="17" y1="12" x2="19" y2="15" />
    </svg>
  );

  if (idx === 1) return (
    // Water drop — Humidity Control
    <svg {...shared}>
      <path d="M12 2C8 7 4 12 4 16a8 8 0 0 0 16 0C20 12 16 7 12 2Z" />
    </svg>
  );

  if (idx === 2) return (
    // Wind lines — Ductwork Services
    <svg {...shared}>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );

  if (idx === 3) return (
    // Flame — Heating & Furnaces
    <svg {...shared}>
      <path d="M12 2C8 8 6 12 6 16a6 6 0 0 0 12 0C18 12 16 8 12 2Z" />
      <path d="M12 22c0 0 3-2.5 3-6-1 1.5-2 2-3 2s-2-.5-3-2c0 3.5 3 6 3 6Z" />
    </svg>
  );

  if (idx === 4) return (
    // Sparkles — Indoor Air Quality
    <svg {...shared}>
      <path d="M9 5L10.5 9.5L15 11L10.5 12.5L9 17L7.5 12.5L3 11L7.5 9.5Z" />
      <path d="M18 2L18.75 4.25L21 5L18.75 5.75L18 8L17.25 5.75L15 5L17.25 4.25Z" />
      <path d="M17 17L17.5 19L19.5 19.5L17.5 20L17 22L16.5 20L14.5 19.5L16.5 19Z" />
    </svg>
  );

  // Smartphone — Smart Thermostats
  return (
    <svg {...shared}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    </svg>
  );
}

// --- Animated stat counter (scroll-triggered) ---

function parseStatValue(val) {
  const match = val.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: null, suffix: val, hasDecimal: false };
  return { num: parseFloat(match[1]), suffix: match[2], hasDecimal: match[1].includes('.') };
}

function AnimatedStat({ stat }) {
  const ref = useRef(null);
  const { num, suffix, hasDecimal } = parseStatValue(stat.value);
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (num === null) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  useEffect(() => {
    if (!triggered || num === null) return;
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setCount(num); return; }
    const steps = 40;
    const intervalMs = 1200 / steps;
    let current = 0;
    const increment = num / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(current);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [triggered, num]);

  const displayValue = num !== null
    ? (hasDecimal ? count.toFixed(1) : String(Math.round(count))) + suffix
    : stat.value;

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '24px 16px' }}>
      <div style={{
        fontFamily: "'Rockwell Condensed', Rockwell, serif",
        fontSize: 48,
        fontWeight: 700,
        color: COLORS.white,
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {displayValue}
      </div>
      <div style={{
        fontFamily: 'Merriweather, serif',
        fontSize: 14,
        color: COLORS.cream,
        lineHeight: 1.4,
      }}>
        {stat.label}
      </div>
    </div>
  );
}

// --- Hooks ---

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// --- Components ---

function Nav() {
  const [bookHover, setBookHover] = useState(false);
  const [linkHovers, setLinkHovers] = useState({});
  const width = useWindowWidth();
  const isMobile = width < 700;

  const anchorIds = ['services', 'about', 'why-us', 'contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: COLORS.cream,
      borderBottom: `1px solid ${COLORS.sand}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '0 20px' : '0 48px',
      height: 64,
    }}>
      <div style={{
        fontFamily: "'Rockwell Condensed', Rockwell, serif",
        fontWeight: 700,
        fontSize: isMobile ? 18 : 22,
        color: COLORS.sienna,
        letterSpacing: '-0.01em',
        cursor: 'pointer',
        lineHeight: 1.1,
      }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {CONTENT.nav.logo}
      </div>
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {CONTENT.nav.links.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(anchorIds[i])}
              onMouseEnter={() => setLinkHovers(h => ({ ...h, [i]: true }))}
              onMouseLeave={() => setLinkHovers(h => ({ ...h, [i]: false }))}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                fontSize: 15,
                color: COLORS.charcoal,
                padding: 0,
                textDecoration: linkHovers[i] ? `underline ${COLORS.sienna}` : 'none',
                textUnderlineOffset: 3,
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => setBookHover(true)}
            onMouseLeave={() => setBookHover(false)}
            style={{
              backgroundColor: bookHover ? '#a33a0c' : COLORS.sienna,
              color: COLORS.white,
              border: 'none',
              borderRadius: 999,
              padding: '10px 24px',
              fontFamily: 'Merriweather, serif',
              fontSize: 14,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background-color 0.15s',
            }}
          >
            Book Now
          </button>
        </div>
      )}
      {isMobile && (
        <button
          onClick={() => scrollTo('contact')}
          style={{
            backgroundColor: COLORS.sienna,
            color: COLORS.white,
            border: 'none',
            borderRadius: 999,
            padding: '8px 18px',
            fontFamily: 'Merriweather, serif',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Book Now
        </button>
      )}
    </nav>
  );
}

function HeroParticles({ isMobile }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user motion preferences
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    const count = isMobile ? 35 : 80;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.35 + 0.08,
        opacity: Math.random() * 0.35 + 0.05,
        drift: (Math.random() - 0.5) * 0.25,
      }));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,180,131,${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

function Hero() {
  const [ctaHover, setCtaHover] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 700;
  const isDesktop = width >= 900;

  const trustSignals = [
    'Same-Day Service',
    'Free AC Inspection',
    '24/7 Emergency Line',
  ];

  return (
    <section style={{
      minHeight: '100vh',
      backgroundColor: COLORS.charcoal,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 64,
    }}>
      {/* dot-grid texture */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(212,180,131,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      {/* sienna glow */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 60% 40%, rgba(193,68,14,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <HeroParticles isMobile={isMobile} />

      <div style={{
        position: 'relative',
        maxWidth: 1100,
        margin: '0 auto',
        padding: isMobile ? '80px 24px' : '80px 48px',
        width: '100%',
        display: isDesktop ? 'grid' : 'block',
        gridTemplateColumns: isDesktop ? '1fr auto' : undefined,
        gap: isDesktop ? 56 : undefined,
        alignItems: isDesktop ? 'center' : undefined,
      }}>
        {/* left: headline + cta */}
        <div>
          <div style={{
            fontFamily: "'Rockwell Condensed', Rockwell, serif",
            fontSize: isMobile ? 38 : 56,
            fontWeight: 700,
            color: COLORS.white,
            lineHeight: 1.1,
            marginBottom: 8,
          }}>
            {CONTENT.hero.headline}
          </div>
          <div style={{
            fontFamily: "'Rockwell Condensed', Rockwell, serif",
            fontSize: isMobile ? 38 : 56,
            fontWeight: 700,
            color: COLORS.white,
            lineHeight: 1.1,
            marginBottom: 32,
          }}>
            {CONTENT.hero.subheadline}
          </div>
          <p style={{
            fontFamily: 'Merriweather, serif',
            fontSize: 17,
            lineHeight: 1.7,
            color: COLORS.sand,
            maxWidth: 520,
            marginBottom: 40,
          }}>
            {CONTENT.hero.body}
          </p>
          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              backgroundColor: ctaHover ? '#a33a0c' : COLORS.sienna,
              color: COLORS.white,
              border: 'none',
              borderRadius: 6,
              padding: isMobile ? '14px 28px' : '18px 40px',
              fontFamily: 'Merriweather, serif',
              fontSize: isMobile ? 16 : 18,
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background-color 0.15s',
              marginBottom: 24,
              display: 'block',
            }}
          >
            {CONTENT.hero.cta}
          </button>
          <div style={{
            fontFamily: 'Merriweather, serif',
            fontSize: 13,
            color: COLORS.sand,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            {CONTENT.hero.badge}
          </div>
        </div>

        {/* right: info card — desktop only */}
        {isDesktop && (
          <div style={{
            width: 260,
            flexShrink: 0,
            backgroundColor: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(8px)',
            border: `1px solid rgba(212,180,131,0.18)`,
            borderLeft: `3px solid ${COLORS.sienna}`,
            borderRadius: 8,
            padding: '28px 24px',
          }}>
            {/* temperature badge */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              marginBottom: 24,
              paddingBottom: 24,
              borderBottom: '1px solid rgba(212,180,131,0.15)',
            }}>
              {/* Sun icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={COLORS.sand} strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
              </svg>
              <div>
                <div style={{
                  fontFamily: "'Rockwell Condensed', Rockwell, serif",
                  fontSize: 15,
                  color: COLORS.white,
                  fontWeight: 700,
                  marginBottom: 2,
                }}>
                  San Antonio, TX
                </div>
                <div style={{
                  fontFamily: 'Merriweather, serif',
                  fontSize: 13,
                  color: COLORS.sand,
                }}>
                  July avg. high: <strong style={{ color: COLORS.sienna }}>97°F</strong>
                </div>
              </div>
            </div>

            {/* trust signals */}
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(212,180,131,0.15)' }}>
              {trustSignals.map(signal => (
                <div key={signal} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 12,
                }}>
                  <div style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: COLORS.sienna,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {/* Checkmark icon */}
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  <div style={{
                    fontFamily: 'Merriweather, serif',
                    fontSize: 14,
                    color: COLORS.cream,
                  }}>
                    {signal}
                  </div>
                </div>
              ))}
            </div>

            {/* phone */}
            <div>
              <a
                href={`tel:${CONTENT.contact.phone.replace(/\D/g, '')}`}
                style={{
                  display: 'block',
                  fontFamily: "'Rockwell Condensed', Rockwell, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: COLORS.sienna,
                  textDecoration: 'none',
                  marginBottom: 4,
                }}
              >
                {CONTENT.contact.phone}
              </a>
              <div style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 12,
                color: COLORS.sand,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                Call anytime
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Services() {
  const [hovered, setHovered] = useState(null);
  const width = useWindowWidth();
  const isMobile = width < 700;
  const cols = width < 600 ? 1 : width < 900 ? 2 : 3;

  return (
    <section id="services" style={{ backgroundColor: COLORS.cream, padding: isMobile ? '72px 20px' : '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Rockwell Condensed', Rockwell, serif",
          fontSize: 38,
          fontWeight: 700,
          color: COLORS.charcoal,
          marginBottom: 12,
          marginTop: 0,
        }}>
          {CONTENT.services.heading}
        </h2>
        <p style={{
          fontFamily: 'Merriweather, serif',
          fontSize: 17,
          lineHeight: 1.7,
          color: COLORS.charcoal,
          maxWidth: 640,
          marginBottom: 56,
        }}>
          {CONTENT.services.subheading}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 24,
        }}>
          {CONTENT.services.items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: COLORS.lightGray,
                borderLeft: `4px solid ${hovered === i ? '#a33a0c' : COLORS.sienna}`,
                borderRadius: 6,
                padding: '28px 24px',
                transition: 'transform 0.15s, border-color 0.15s',
                transform: hovered === i ? 'translateY(-3px)' : 'none',
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <ServiceIcon idx={i} size={32} />
              </div>
              <h3 style={{
                fontFamily: "'Rockwell Condensed', Rockwell, serif",
                fontSize: 22,
                fontWeight: 700,
                color: COLORS.charcoal,
                marginTop: 0,
                marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: COLORS.charcoal,
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LONE_STAR_PATH = 'M 50 5 L 61 35 L 95 35 L 67 57 L 79 90 L 50 70 L 21 90 L 33 57 L 5 35 L 39 35 Z';

function About() {
  const width = useWindowWidth();
  const isMobile = width < 800;

  return (
    <section id="about" style={{ backgroundColor: COLORS.sienna, padding: isMobile ? '72px 20px' : '96px 48px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: 64,
        alignItems: 'center',
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Rockwell Condensed', Rockwell, serif",
            fontSize: 38,
            fontWeight: 700,
            color: COLORS.white,
            marginTop: 0,
            marginBottom: 24,
          }}>
            {CONTENT.about.heading}
          </h2>
          <p style={{
            fontFamily: 'Merriweather, serif',
            fontSize: 17,
            lineHeight: 1.7,
            color: COLORS.cream,
            marginBottom: 20,
          }}>
            {CONTENT.about.body1}
          </p>
          <p style={{
            fontFamily: 'Merriweather, serif',
            fontSize: 17,
            lineHeight: 1.7,
            color: COLORS.cream,
            margin: 0,
          }}>
            {CONTENT.about.body2}
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          >
            <path d={LONE_STAR_PATH} fill={COLORS.white} />
          </svg>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            position: 'relative',
          }}>
            {CONTENT.about.stats.map((stat, i) => (
              <AnimatedStat key={i} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const width = useWindowWidth();
  const isMobile = width < 700;
  const cols = width < 600 ? 1 : width < 900 ? 2 : 3;

  return (
    <section id="why-us" style={{ backgroundColor: COLORS.cream, padding: isMobile ? '72px 20px' : '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Rockwell Condensed', Rockwell, serif",
          fontSize: 38,
          fontWeight: 700,
          color: COLORS.charcoal,
          marginTop: 0,
          marginBottom: 56,
        }}>
          {CONTENT.whyUs.heading}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 40,
        }}>
          {CONTENT.whyUs.items.map((item, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Rockwell Condensed', Rockwell, serif",
                fontSize: 13,
                fontWeight: 700,
                color: COLORS.sienna,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 10,
              }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontFamily: "'Rockwell Condensed', Rockwell, serif",
                fontSize: 22,
                fontWeight: 700,
                color: COLORS.charcoal,
                marginTop: 0,
                marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: COLORS.charcoal,
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const width = useWindowWidth();
  const isMobile = width < 700;
  const cols = width < 600 ? 1 : width < 900 ? 2 : 3;

  return (
    <section style={{ backgroundColor: COLORS.charcoal, padding: isMobile ? '72px 20px' : '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Rockwell Condensed', Rockwell, serif",
          fontSize: 38,
          fontWeight: 700,
          color: COLORS.white,
          marginTop: 0,
          marginBottom: 56,
        }}>
          {CONTENT.testimonials.heading}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 24,
        }}>
          {CONTENT.testimonials.items.map((item, i) => (
            <div key={i} style={{
              backgroundColor: COLORS.lightGray,
              borderRadius: 6,
              padding: '32px 28px',
            }}>
              <div style={{ marginBottom: 16 }} aria-label={`${item.stars} out of 5 stars`}>
                {Array.from({ length: item.stars }, (_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill={COLORS.sienna} aria-hidden="true" style={{ display: 'inline-block', marginRight: 2 }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                  </svg>
                ))}
              </div>
              <p style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 15,
                lineHeight: 1.7,
                color: COLORS.charcoal,
                fontStyle: 'italic',
                marginTop: 0,
                marginBottom: 24,
              }}>
                "{item.text}"
              </p>
              <div style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 14,
                fontWeight: 700,
                color: COLORS.sand,
              }}>
                {item.name}
              </div>
              <div style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 13,
                color: COLORS.sand,
                opacity: 0.8,
              }}>
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const srOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: 0,
};

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitHover, setSubmitHover] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 800;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const formData = new FormData(e.target);
    formData.append('access_key', CONTENT.contact.web3formsKey);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    fontFamily: 'Merriweather, serif',
    fontSize: 15,
    border: `1px solid ${COLORS.sand}`,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    color: COLORS.charcoal,
    boxSizing: 'border-box',
    outline: 'none',
    marginBottom: 16,
    display: 'block',
  };

  return (
    <section id="contact" style={{ backgroundColor: COLORS.cream, padding: isMobile ? '72px 20px' : '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Rockwell Condensed', Rockwell, serif",
          fontSize: 38,
          fontWeight: 700,
          color: COLORS.charcoal,
          marginTop: 0,
          marginBottom: 12,
        }}>
          {CONTENT.contact.heading}
        </h2>
        <p style={{
          fontFamily: 'Merriweather, serif',
          fontSize: 17,
          color: COLORS.charcoal,
          marginBottom: 56,
        }}>
          {CONTENT.contact.subheading}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 64,
        }}>
          <div>
            <a
              href={`tel:${CONTENT.contact.phone.replace(/\D/g, '')}`}
              style={{
                display: 'block',
                fontFamily: "'Rockwell Condensed', Rockwell, serif",
                fontSize: 36,
                fontWeight: 700,
                color: COLORS.sienna,
                textDecoration: 'none',
                marginBottom: 24,
              }}
            >
              {CONTENT.contact.phone}
            </a>
            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 13,
                color: COLORS.sand,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 4,
              }}>Email</div>
              <a href={`mailto:${CONTENT.contact.email}`} style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 16,
                color: COLORS.charcoal,
                textDecoration: 'none',
              }}>
                {CONTENT.contact.email}
              </a>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 13,
                color: COLORS.sand,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 4,
              }}>Address</div>
              <div style={{ fontFamily: 'Merriweather, serif', fontSize: 16, color: COLORS.charcoal }}>
                {CONTENT.contact.address}
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 13,
                color: COLORS.sand,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 4,
              }}>Hours</div>
              <div style={{ fontFamily: 'Merriweather, serif', fontSize: 16, color: COLORS.charcoal }}>
                {CONTENT.contact.hours}
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div style={{
                backgroundColor: COLORS.lightGray,
                borderRadius: 6,
                padding: '48px 32px',
                textAlign: 'center',
                borderLeft: `4px solid ${COLORS.sienna}`,
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLORS.sienna} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginBottom: 16 }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9,12 11,14 15,10" />
                </svg>
                <h3 style={{
                  fontFamily: "'Rockwell Condensed', Rockwell, serif",
                  fontSize: 26,
                  color: COLORS.charcoal,
                  marginTop: 0,
                  marginBottom: 12,
                }}>
                  Message Sent!
                </h3>
                <p style={{
                  fontFamily: 'Merriweather, serif',
                  fontSize: 15,
                  color: COLORS.charcoal,
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  We'll be in touch shortly. For urgent service, call us directly at {CONTENT.contact.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="contact-name" style={srOnly}>Your Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your Name" required style={inputStyle} />

                <label htmlFor="contact-phone" style={srOnly}>Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="Phone Number" style={inputStyle} />

                <label htmlFor="contact-email" style={srOnly}>Email Address</label>
                <input id="contact-email" name="email" type="email" placeholder="Email Address" required style={inputStyle} />

                <label htmlFor="contact-message" style={srOnly}>How can we help?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }}
                />
                {error && (
                  <div role="alert" style={{
                    fontFamily: 'Merriweather, serif',
                    fontSize: 14,
                    color: COLORS.sienna,
                    marginBottom: 12,
                  }}>
                    Something went wrong. Please call us directly at {CONTENT.contact.phone}.
                  </div>
                )}
                <button
                  type="submit"
                  onMouseEnter={() => setSubmitHover(true)}
                  onMouseLeave={() => setSubmitHover(false)}
                  style={{
                    backgroundColor: submitHover ? '#a33a0c' : COLORS.sienna,
                    color: COLORS.white,
                    border: 'none',
                    borderRadius: 6,
                    padding: '14px 32px',
                    fontFamily: 'Merriweather, serif',
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background-color 0.15s',
                    width: '100%',
                  }}
                >
                  {CONTENT.contact.formCta}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      backgroundColor: COLORS.charcoal,
      padding: '64px 48px',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: "'Rockwell Condensed', Rockwell, serif",
        fontSize: 22,
        fontWeight: 700,
        color: COLORS.sienna,
        marginBottom: 8,
      }}>
        {CONTENT.nav.logo}
      </div>
      <div style={{
        fontFamily: 'Merriweather, serif',
        fontSize: 16,
        color: COLORS.cream,
        marginBottom: 24,
      }}>
        {CONTENT.footer.tagline}
      </div>
      <div style={{
        fontFamily: 'Merriweather, serif',
        fontSize: 13,
        color: COLORS.sand,
        marginBottom: 16,
      }}>
        {CONTENT.footer.license}
      </div>
      <div style={{
        fontFamily: 'Merriweather, serif',
        fontSize: 12,
        color: '#666',
      }}>
        {CONTENT.footer.copyright}
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
