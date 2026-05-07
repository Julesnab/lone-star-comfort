import { useState, useEffect, useRef } from "react";

// ============================================================
// ✏️  EDIT ALL YOUR CONTENT HERE — one place, nothing buried
// ============================================================
const CONTENT = {
  brand: {
    name: "ARCTIC",
    nameAccent: "RIDGE",
    tagline: "Heating & Cooling Specialists",
    phone: "(720) 555-0182",
    phoneHref: "tel:+17205550182",
    email: "service@arcticridgehvac.com",
    license: "CO-HVAC-2840",
    since: "2006",
    certification: "NATE CERTIFIED",
    copyright: "© 2026 Arctic Ridge HVAC",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Denver's Most Trusted HVAC",
    headline: ["KEEP YOUR", "COOL.", "ALL YEAR."],
    headlineAccentLine: 1, // 0-indexed line that gets the ice color
    sub: "From emergency breakdowns to full system installs — Arctic Ridge has served Denver homeowners for 18 years. We pick up the phone. We show up on time. We do it right.",
    ctaPrimary: { label: "Get a Free Quote", href: "#contact" },
    ctaSecondary: { label: "See Our Services", href: "#services" },
    dial: {
      temp: "72°",
      unit: "Indoor Comfort",
      status: "● System Optimal",
      badgeTopLeft: { label: "Response time", value: "2 HRS" },
      badgeBottomRight: { label: "Jobs completed", value: "4,200+" },
    },
  },

  emergency: {
    badge: "24/7 EMERGENCY",
    message:
      "AC or furnace breakdown? We have same-day emergency service available across the Denver metro.",
  },

  trust: [
    { icon: "✓", text: "Licensed & Insured in Colorado" },
    { icon: "★", text: "4.9/5 on Google (312 reviews)" },
    { icon: "⚡", text: "Same-Day Service Available" },
    { icon: "🛡", text: "100% Satisfaction Guarantee" },
    { icon: "🏠", text: "Serving Denver Since 2006" },
  ],

  services: {
    eyebrow: "What We Do",
    headline: ["EVERY SERVICE", "YOUR HOME NEEDS"],
    headlineAccentLine: 1,
    items: [
      {
        num: "01",
        icon: "❄️",
        title: "AC Installation & Repair",
        desc: "Central air, ductless mini-splits, window units. We install all major brands and handle emergency repairs fast — usually same or next day.",
        cta: "Request service",
      },
      {
        num: "02",
        icon: "🔥",
        title: "Furnace & Heating",
        desc: "Gas furnaces, heat pumps, boilers — installation, tune-ups, and urgent repairs. Don't go a night without heat when Denver temps drop below zero.",
        cta: "Request service",
      },
      {
        num: "03",
        icon: "🌬️",
        title: "Duct Cleaning & IAQ",
        desc: "Improve your indoor air quality with professional duct cleaning, HEPA filtration, humidifiers, and UV sanitizer installs.",
        cta: "Request service",
      },
      {
        num: "04",
        icon: "🔧",
        title: "Maintenance Plans",
        desc: "Annual or bi-annual tune-ups keep your system running efficiently, prevent breakdowns, and extend equipment life by years.",
        cta: "View plans",
      },
      {
        num: "05",
        icon: "💧",
        title: "Water Heaters",
        desc: "Traditional tank and tankless water heater installation and repair. Same-day service for unexpected failures.",
        cta: "Request service",
      },
      {
        num: "06",
        icon: "🏗️",
        title: "New Construction",
        desc: "Full HVAC system design and install for new builds and major renovations. We work directly with contractors and homeowners.",
        cta: "Get a quote",
      },
    ],
  },

  about: {
    eyebrow: "Why Arctic Ridge",
    headline: ["WE SHOW", "UP."],
    headlineAccentLine: 1,
    stats: [
      { num: "18", suffix: "+", label: "Years serving Denver" },
      { num: "4.9", suffix: "★", label: "Average Google rating" },
      { num: "4.2", suffix: "K", label: "Jobs completed" },
      { num: "2", suffix: "hr", label: "Average emergency response" },
    ],
    points: [
      {
        title: "Upfront pricing, no surprises",
        desc: "We quote before we work. What we say is what you pay.",
      },
      {
        title: "NATE-certified technicians",
        desc: "Every tech on our team is North American Technician Excellence certified.",
      },
      {
        title: "All work guaranteed in writing",
        desc: "1-year labor warranty on all repairs. Manufacturer warranties on equipment.",
      },
      {
        title: "Clean, respectful of your home",
        desc: "We wear shoe covers, lay down drop cloths, and leave no mess behind.",
      },
    ],
  },

  reviews: {
    eyebrow: "Customer Reviews",
    headline: ["WHAT DENVER", "IS SAYING"],
    headlineAccentLine: 1,
    workerUrl: "/api/reviews",
    googleMapsUrl: "https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID_HERE",
    items: [
      {
        text: "Our AC died on the hottest day of the year — 97°F. I called Arctic Ridge at 8am and a tech was at my door by 10:30. Fixed within the hour. These guys are the real deal.",
        author: "Marcus T.",
        location: "Highlands Ranch, CO",
        source: "Google Review",
      },
      {
        text: "They installed a new furnace and the whole process was painless. Quote was fair, the crew was on time and professional, and they cleaned up after. Haven't had an issue in 2 years.",
        author: "Jennifer K.",
        location: "Lakewood, CO",
        source: "Google Review",
      },
      {
        text: "I've used 3 different HVAC companies over the years and Arctic Ridge is the only one that doesn't try to upsell you on stuff you don't need. Honest, fast, and priced right.",
        author: "David R.",
        location: "Aurora, CO",
        source: "Google Review",
      },
    ],
  },

  contact: {
    eyebrow: "Get In Touch",
    headline: ["REQUEST", "A QUOTE"],
    headlineAccentLine: 1,
    note: "We respond to all inquiries within 2 hours during business hours. For emergencies, call us directly — we answer 24/7.",
    methods: [
      { icon: "📞", label: "Emergency & General", value: "(720) 555-0182", href: "tel:+17205550182" },
      { icon: "✉️", label: "Email", value: "service@arcticridgehvac.com", href: "mailto:service@arcticridgehvac.com" },
      { icon: "📍", label: "Service Area", value: "Denver Metro, Lakewood, Aurora, Highlands Ranch, Littleton, Centennial" },
      { icon: "🕐", label: "Business Hours", value: "Mon–Fri 7am–7pm · Sat 8am–5pm", extra: "24/7 Emergency Service" },
    ],
    form: {
      web3formsKey: "cdbd8657-886d-47d4-bc07-f644b383551b",
      subject: "New Quote Request — Arctic Ridge HVAC Website",
      serviceOptions: [
        "AC Repair / Emergency",
        "AC Installation",
        "Furnace Repair / Emergency",
        "Furnace Installation",
        "Maintenance Plan",
        "Duct Cleaning",
        "Water Heater",
        "Other / Not Sure",
      ],
      submitLabel: "Send Request — We'll Call You Back",
      successMsg: "✓ Request received — we'll call you within 2 hours.",
      errorMsg: "✗ Something went wrong — please try again or call us directly.",
    },
  },

  footer: {
    about: "Denver's trusted HVAC specialists since 2006. Heating, cooling, and air quality for homes across the metro area.",
    cols: [
      {
        heading: "Services",
        links: [
          "AC Repair & Install",
          "Furnace & Heating",
          "Duct Cleaning",
          "Maintenance Plans",
          "Water Heaters",
          "New Construction",
        ],
      },
      {
        heading: "Service Areas",
        links: ["Denver", "Lakewood", "Aurora", "Highlands Ranch", "Littleton", "Centennial"],
      },
    ],
  },
};

// ============================================================
// Styles as a JS object (CSS variables kept intact)
// ============================================================
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ice: #E8F4F8;
    --ice-mid: #B8DDE8;
    --steel: #1A2B35;
    --steel-mid: #2C4255;
    --accent: #FF5C2E;
    --accent-light: #FF7A50;
    --white: #F5F9FA;
    --muted: #7A96A2;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--steel); color: var(--white); overflow-x: hidden; line-height: 1.6; }

  /* NAV */
  .ar-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 4rem;
    background: rgba(26,43,53,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(184,221,232,0.1);
  }
  .ar-logo { font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.08em; color: var(--white); text-decoration: none; }
  .ar-logo-accent { color: var(--accent); }
  .ar-nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .ar-nav-links a { font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ice-mid); text-decoration: none; transition: color 0.2s; }
  .ar-nav-links a:hover { color: var(--white); }
  .ar-nav-cta { font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--accent); color: var(--white); border: none; padding: 0.65rem 1.4rem; cursor: pointer; text-decoration: none; transition: background 0.2s; }
  .ar-nav-cta:hover { background: var(--accent-light); }

  /* HERO */
  .ar-hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; position: relative; overflow: hidden; }
  .ar-hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(184,221,232,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(255,92,46,0.04) 0%, transparent 60%); }
  .ar-hero-bg::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(184,221,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,221,232,0.04) 1px, transparent 1px); background-size: 60px 60px; }
  .ar-hero-content { display: flex; flex-direction: column; justify-content: center; padding: 8rem 4rem 6rem; position: relative; z-index: 2; }
  .ar-hero-tag { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem; animation: fadeUp 0.6s ease both; }
  .ar-hero-tag::before { content: ''; display: block; width: 32px; height: 1px; background: var(--accent); }
  .ar-h1 { font-family: var(--font-display); font-size: clamp(4.5rem, 8vw, 8rem); line-height: 0.92; letter-spacing: 0.02em; color: var(--white); margin-bottom: 1.5rem; animation: fadeUp 0.7s 0.1s ease both; }
  .ar-h1-accent { color: var(--ice-mid); display: block; font-style: normal; }
  .ar-hero-sub { font-size: 1.05rem; color: var(--muted); max-width: 420px; line-height: 1.7; margin-bottom: 2.5rem; animation: fadeUp 0.7s 0.2s ease both; }
  .ar-hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; animation: fadeUp 0.7s 0.3s ease both; }
  .ar-btn-primary { font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--accent); color: var(--white); padding: 1rem 2rem; text-decoration: none; display: inline-block; transition: background 0.2s, transform 0.15s; }
  .ar-btn-primary:hover { background: var(--accent-light); transform: translateY(-1px); }
  .ar-btn-secondary { font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ice-mid); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: color 0.2s; }
  .ar-btn-secondary:hover { color: var(--white); }
  .ar-btn-secondary::after { content: '→'; }
  .ar-hero-visual { display: flex; align-items: center; justify-content: center; position: relative; z-index: 2; padding: 8rem 4rem 6rem 2rem; animation: fadeUp 0.9s 0.3s ease both; overflow: visible; }
  .ar-temp-display { position: relative; width: 420px; height: 420px; filter: drop-shadow(0 0 24px rgba(184,221,232,0.10)); }
  .ar-temp-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
  .ar-temp-inner { position: absolute; inset: 60px; border-radius: 50%; border: 1px solid rgba(184,221,232,0.08); background: rgba(26,43,53,0.6); display: flex; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
  .ar-temp-number { font-family: var(--font-display); font-size: 5.5rem; line-height: 1; color: var(--white); letter-spacing: -0.02em; }
  .ar-temp-unit { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 0.3rem; }
  .ar-temp-status { font-family: var(--font-mono); font-size: 0.65rem; color: var(--accent); letter-spacing: 0.2em; text-transform: uppercase; margin-top: 0.5rem; }
  .ar-badge { position: absolute; background: rgba(20,34,42,0.92); border: 1px solid rgba(184,221,232,0.18); padding: 0.65rem 1rem; backdrop-filter: blur(12px); box-shadow: 0 4px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(184,221,232,0.08); }
  .ar-badge-tl { top: 12px; left: 12px; }
  .ar-badge-br { bottom: 12px; right: 12px; }
  .ar-badge-label { font-family: var(--font-mono); font-size: 0.58rem; color: var(--muted); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.2rem; }
  .ar-badge-value { font-family: var(--font-display); font-size: 1.4rem; color: var(--ice-mid); letter-spacing: 0.05em; }

  /* EMERGENCY */
  .ar-emergency { background: var(--accent); padding: 1.2rem 4rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
  .ar-emergency-left { display: flex; align-items: center; gap: 1rem; }
  .ar-emergency-badge { font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.1em; background: rgba(0,0,0,0.25); padding: 0.3rem 0.7rem; white-space: nowrap; }
  .ar-emergency p { font-size: 0.95rem; font-weight: 500; color: var(--white); }
  .ar-emergency a { font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.05em; color: var(--white); text-decoration: none; white-space: nowrap; border-bottom: 2px solid rgba(255,255,255,0.4); transition: border-color 0.2s; }
  .ar-emergency a:hover { border-color: var(--white); }

  /* TRUST BAR */
  .ar-trust-bar { background: rgba(44,66,85,0.5); border-top: 1px solid rgba(184,221,232,0.08); border-bottom: 1px solid rgba(184,221,232,0.08); padding: 1.2rem 4rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
  .ar-trust-item { display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
  .ar-trust-icon { color: var(--accent); font-size: 1rem; }
  .ar-trust-divider { width: 1px; height: 24px; background: rgba(184,221,232,0.12); }

  /* SECTIONS */
  .ar-section { padding: 7rem 4rem; }
  .ar-section-label { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.8rem; }
  .ar-section-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--accent); }
  .ar-h2 { font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 4.5rem); line-height: 0.95; letter-spacing: 0.02em; color: var(--white); margin-bottom: 3.5rem; }
  .ar-h2-accent { color: var(--ice-mid); }

  /* SERVICES */
  .ar-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(184,221,232,0.08); border: 1px solid rgba(184,221,232,0.08); }
  .ar-service-card { background: var(--steel); padding: 2.5rem 2rem; transition: background 0.2s; }
  .ar-service-card:hover { background: var(--steel-mid); }
  .ar-service-num { font-family: var(--font-display); font-size: 3rem; color: rgba(184,221,232,0.1); line-height: 1; margin-bottom: 1rem; }
  .ar-service-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
  .ar-service-card h3 { font-family: var(--font-display); font-size: 1.6rem; letter-spacing: 0.03em; color: var(--white); margin-bottom: 0.75rem; }
  .ar-service-card p { font-size: 0.9rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.5rem; }
  .ar-service-link { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; transition: gap 0.2s; }
  .ar-service-link:hover { gap: 0.7rem; }
  .ar-service-link::after { content: '→'; }

  /* WHY */
  .ar-why-section { padding: 7rem 4rem; background: rgba(44,66,85,0.3); border-top: 1px solid rgba(184,221,232,0.06); }
  .ar-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
  .ar-why-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(184,221,232,0.08); }
  .ar-stat-box { background: var(--steel); padding: 2.5rem 2rem; }
  .ar-stat-num { font-family: var(--font-display); font-size: 3.8rem; color: var(--ice-mid); line-height: 1; letter-spacing: -0.02em; margin-bottom: 0.4rem; }
  .ar-stat-suffix { color: var(--accent); }
  .ar-stat-label { font-size: 0.85rem; color: var(--muted); }
  .ar-why-h2 { margin-bottom: 0; }
  .ar-why-points { list-style: none; margin-top: 2rem; }
  .ar-why-points li { display: flex; gap: 1rem; padding: 1.2rem 0; border-bottom: 1px solid rgba(184,221,232,0.07); }
  .ar-why-points li:last-child { border-bottom: none; }
  .ar-why-check { width: 20px; height: 20px; min-width: 20px; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; margin-top: 2px; }
  .ar-why-point-title { font-weight: 500; color: var(--white); margin-bottom: 0.2rem; }
  .ar-why-point-desc { font-size: 0.85rem; color: var(--muted); }

  /* REVIEWS */
  .ar-reviews-section { padding: 7rem 4rem; }
  .ar-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
  .ar-review-card { background: rgba(44,66,85,0.4); border: 1px solid rgba(184,221,232,0.08); padding: 2rem; }
  .ar-review-stars { color: var(--accent); font-size: 0.9rem; margin-bottom: 1rem; }
  .ar-review-text { font-size: 0.92rem; color: var(--ice); line-height: 1.75; margin-bottom: 1.5rem; font-style: italic; }
  .ar-review-author { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
  .ar-review-author strong { display: block; color: var(--ice-mid); margin-bottom: 0.2rem; }
  .ar-review-skeleton { height: 14px; background: rgba(184,221,232,0.08); margin-bottom: 0.8rem; border-radius: 3px; animation: pulse 1.4s ease-in-out infinite; }
  .ar-review-skeleton.wide { width: 100%; }
  .ar-review-skeleton.short { width: 40%; }
  .ar-reviews-footer { margin-top: 2rem; text-align: center; }
  .ar-reviews-all-link { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ice-mid); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; transition: color 0.2s; }
  .ar-reviews-all-link:hover { color: var(--white); }

  /* CONTACT */
  .ar-contact-section { padding: 7rem 4rem; background: rgba(26,43,53,0.8); border-top: 1px solid rgba(184,221,232,0.08); }
  .ar-contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 6rem; align-items: start; }
  .ar-contact-note { color: var(--muted); margin-bottom: 0.5rem; }
  .ar-contact-methods { margin-top: 2.5rem; }
  .ar-contact-method { display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(184,221,232,0.07); align-items: flex-start; }
  .ar-contact-method:last-child { border-bottom: none; }
  .ar-method-icon { font-size: 1.3rem; min-width: 32px; }
  .ar-method-label { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.3rem; }
  .ar-method-value { font-size: 0.95rem; color: var(--white); }
  .ar-method-value a { color: var(--ice-mid); text-decoration: none; transition: color 0.2s; }
  .ar-method-value a:hover { color: var(--white); }
  .ar-method-extra { font-size: 0.82rem; color: var(--accent); }

  /* FORM */
  .ar-form-group { margin-bottom: 1.2rem; }
  .ar-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .ar-form-group label { display: block; font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ice-mid); margin-bottom: 0.5rem; }
  .ar-form-group input, .ar-form-group select, .ar-form-group textarea { width: 100%; background: rgba(44,66,85,0.4); border: 1px solid rgba(184,221,232,0.12); color: var(--white); padding: 0.75rem 1rem; font-family: var(--font-body); font-size: 0.9rem; outline: none; transition: border-color 0.2s; appearance: none; }
  .ar-form-group input:focus, .ar-form-group select:focus, .ar-form-group textarea:focus { border-color: var(--ice-mid); }
  .ar-form-group input::placeholder, .ar-form-group textarea::placeholder { color: var(--muted); }
  .ar-form-group select option { background: var(--steel); }
  .ar-form-group textarea { resize: vertical; min-height: 110px; }
  .ar-form-submit { width: 100%; background: var(--accent); color: var(--white); border: none; padding: 1rem; font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; margin-top: 0.5rem; }
  .ar-form-submit:hover { background: var(--accent-light); }
  .ar-form-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .ar-form-success { margin-top: 1rem; font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.1em; color: #6fcf97; text-transform: uppercase; }
  .ar-form-error { margin-top: 1rem; font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.1em; color: #eb5757; text-transform: uppercase; }

  /* FOOTER */
  .ar-footer { background: rgba(15,24,30,0.9); border-top: 1px solid rgba(184,221,232,0.08); padding: 3rem 4rem 2rem; display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 4rem; }
  .ar-footer-logo { font-size: 1.8rem; display: block; margin-bottom: 1rem; }
  .ar-footer-about { font-size: 0.85rem; color: var(--muted); line-height: 1.7; max-width: 260px; }
  .ar-footer-col h4 { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ice-mid); margin-bottom: 1.2rem; }
  .ar-footer-col ul { list-style: none; }
  .ar-footer-col ul li { margin-bottom: 0.7rem; }
  .ar-footer-col ul li a { font-size: 0.88rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
  .ar-footer-col ul li a:hover { color: var(--white); }
  .ar-footer-bottom { background: rgba(15,24,30,0.9); border-top: 1px solid rgba(184,221,232,0.06); padding: 1.2rem 4rem; display: flex; justify-content: space-between; align-items: center; }
  .ar-footer-bottom p { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.1em; color: var(--muted); }
  .ar-license-badge { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; color: var(--muted); border: 1px solid rgba(184,221,232,0.1); padding: 0.3rem 0.6rem; }

  /* ANIMATIONS */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes spinReverse { to { transform: rotate(-360deg); } }
  @keyframes orbitDot { from { transform: rotate(0deg) translateX(195px) rotate(0deg); } to { transform: rotate(360deg) translateX(195px) rotate(-360deg); } }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .ar-nav { padding: 1rem 1.5rem; }
    .ar-nav-links { display: none; }
    .ar-hero { grid-template-columns: 1fr; }
    .ar-hero-visual { display: none; }
    .ar-hero-content { padding: 7rem 1.5rem 4rem; }
    .ar-section, .ar-why-section, .ar-reviews-section, .ar-contact-section { padding: 4rem 1.5rem; }
    .ar-services-grid, .ar-why-grid, .ar-reviews-grid, .ar-contact-grid { grid-template-columns: 1fr; gap: 2rem; }
    .ar-why-stats { grid-template-columns: 1fr 1fr; }
    .ar-form-row { grid-template-columns: 1fr; }
    .ar-footer { grid-template-columns: 1fr; gap: 2rem; padding: 2.5rem 1.5rem; }
    .ar-footer-bottom { flex-direction: column; gap: 0.5rem; padding: 1rem 1.5rem; }
    .ar-trust-bar { flex-wrap: wrap; padding: 1rem 1.5rem; gap: 0.8rem; }
    .ar-trust-divider { display: none; }
    .ar-emergency { flex-direction: column; align-items: flex-start; padding: 1rem 1.5rem; }
    .ar-h2 { font-size: 2.5rem; margin-bottom: 2rem; }
  }
`;

// ============================================================
// Helper: render a headline where one line gets accent color
// ============================================================
function Headline({ lines, accentLine, className = "ar-h2" }) {
  return (
    <h2 className={className}>
      {lines.map((line, i) => (
        <span key={i} className={i === accentLine ? "ar-h2-accent" : ""} style={{ display: "block" }}>
          {line}
        </span>
      ))}
    </h2>
  );
}

// ============================================================
// COMPONENTS
// ============================================================

function Nav() {
  const { brand, nav } = CONTENT;
  return (
    <nav className="ar-nav">
      <a href="#" className="ar-logo">
        {brand.name}<span className="ar-logo-accent">{brand.nameAccent}</span>
      </a>
      <ul className="ar-nav-links">
        {nav.map((item) => (
          <li key={item.label}><a href={item.href}>{item.label}</a></li>
        ))}
      </ul>
      <a href={brand.phoneHref} className="ar-nav-cta">📞 Call Now</a>
    </nav>
  );
}

function Hero() {
  const { hero, brand } = CONTENT;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const visualRef = useRef(null);

  function handleMouseMove(e) {
    const rect = visualRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -9, y: dx * 9 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section className="ar-hero">
      <div className="ar-hero-bg" />
      <div className="ar-hero-content">
        <div className="ar-hero-tag">{hero.eyebrow}</div>
        <h1 className="ar-h1">
          {hero.headline.map((line, i) => (
            <span key={i} className={i === hero.headlineAccentLine ? "ar-h1-accent" : ""} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </h1>
        <p className="ar-hero-sub">{hero.sub}</p>
        <div className="ar-hero-actions">
          <a href={hero.ctaPrimary.href} className="ar-btn-primary">{hero.ctaPrimary.label}</a>
          <a href={hero.ctaSecondary.href} className="ar-btn-secondary">{hero.ctaSecondary.label}</a>
        </div>
      </div>
      <div
        className="ar-hero-visual"
        ref={visualRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="ar-temp-display"
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.12s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Airflow SVG rings */}
          <svg className="ar-temp-svg" viewBox="0 0 420 420">
            {/* Outer dashed ring — slow forward */}
            <circle
              cx="210" cy="210" r="195"
              fill="none"
              stroke="rgba(184,221,232,0.22)"
              strokeWidth="1.5"
              strokeDasharray="6 14"
              style={{ transformOrigin: "210px 210px", animation: "spin 22s linear infinite" }}
            />
            {/* Mid dashed ring — counter-rotation */}
            <circle
              cx="210" cy="210" r="170"
              fill="none"
              stroke="rgba(184,221,232,0.14)"
              strokeWidth="1"
              strokeDasharray="3 22"
              style={{ transformOrigin: "210px 210px", animation: "spinReverse 15s linear infinite" }}
            />
            {/* Inner accent arc — fast, two segments, orange */}
            <circle
              cx="210" cy="210" r="148"
              fill="none"
              stroke="rgba(255,92,46,0.55)"
              strokeWidth="1.5"
              strokeDasharray="38 290"
              style={{ transformOrigin: "210px 210px", animation: "spin 8s linear infinite", filter: "drop-shadow(0 0 4px rgba(255,92,46,0.5))" }}
            />
            {/* Second orange arc offset */}
            <circle
              cx="210" cy="210" r="148"
              fill="none"
              stroke="rgba(255,92,46,0.3)"
              strokeWidth="1"
              strokeDasharray="18 310"
              strokeDashoffset="-160"
              style={{ transformOrigin: "210px 210px", animation: "spin 8s linear infinite" }}
            />
            {/* Orbiting glow dot */}
            <circle
              cx="210" cy="15"
              r="3.5"
              fill="var(--accent)"
              style={{ transformOrigin: "210px 210px", animation: "spin 22s linear infinite", filter: "drop-shadow(0 0 5px rgba(255,92,46,0.9))" }}
            />
            {/* Thin structural ring */}
            <circle
              cx="210" cy="210" r="195"
              fill="none"
              stroke="rgba(184,221,232,0.06)"
              strokeWidth="0.5"
            />
          </svg>

          {/* Inner dial */}
          <div className="ar-temp-inner">
            <div className="ar-temp-number">{hero.dial.temp}</div>
            <div className="ar-temp-unit">{hero.dial.unit}</div>
            <div className="ar-temp-status">{hero.dial.status}</div>
          </div>

          {/* Badges — now inside the 420px box corners */}
          <div className="ar-badge ar-badge-tl">
            <div className="ar-badge-label">{hero.dial.badgeTopLeft.label}</div>
            <div className="ar-badge-value">{hero.dial.badgeTopLeft.value}</div>
          </div>
          <div className="ar-badge ar-badge-br">
            <div className="ar-badge-label">{hero.dial.badgeBottomRight.label}</div>
            <div className="ar-badge-value">{hero.dial.badgeBottomRight.value}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Emergency() {
  const { emergency, brand } = CONTENT;
  return (
    <div className="ar-emergency">
      <div className="ar-emergency-left">
        <div className="ar-emergency-badge">{emergency.badge}</div>
        <p>{emergency.message}</p>
      </div>
      <a href={brand.phoneHref}>{brand.phone}</a>
    </div>
  );
}

function TrustBar() {
  const { trust } = CONTENT;
  return (
    <div className="ar-trust-bar">
      {trust.map((item, i) => (
        <>
          <div key={item.text} className="ar-trust-item">
            <span className="ar-trust-icon">{item.icon}</span> {item.text}
          </div>
          {i < trust.length - 1 && <div className="ar-trust-divider" />}
        </>
      ))}
    </div>
  );
}

function Services() {
  const { services } = CONTENT;
  return (
    <section className="ar-section" id="services">
      <div className="ar-section-label">{services.eyebrow}</div>
      <Headline lines={services.headline} accentLine={services.headlineAccentLine} />
      <div className="ar-services-grid">
        {services.items.map((s) => (
          <div className="ar-service-card" key={s.num}>
            <div className="ar-service-num">{s.num}</div>
            <span className="ar-service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="#contact" className="ar-service-link">{s.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const { about } = CONTENT;
  return (
    <section className="ar-why-section" id="about">
      <div className="ar-why-grid">
        <div className="ar-why-stats">
          {about.stats.map((s) => (
            <div className="ar-stat-box" key={s.label}>
              <div className="ar-stat-num">{s.num}<span className="ar-stat-suffix">{s.suffix}</span></div>
              <div className="ar-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="ar-section-label">{about.eyebrow}</div>
          <Headline lines={about.headline} accentLine={about.headlineAccentLine} className="ar-h2 ar-why-h2" />
          <ul className="ar-why-points">
            {about.points.map((p) => (
              <li key={p.title}>
                <div className="ar-why-check">✓</div>
                <div>
                  <p className="ar-why-point-title">{p.title}</p>
                  <span className="ar-why-point-desc">{p.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { reviews } = CONTENT;
  const [status, setStatus] = useState("loading");
  const [liveReviews, setLiveReviews] = useState([]);

  useEffect(() => {
    fetch(reviews.workerUrl)
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) throw new Error();
        setLiveReviews(data);
        setStatus("live");
      })
      .catch(() => setStatus("fallback"));
  }, []);

  const items = status === "live" ? liveReviews : reviews.items;
  const stars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <section className="ar-reviews-section" id="reviews">
      <div className="ar-section-label">{reviews.eyebrow}</div>
      <Headline lines={reviews.headline} accentLine={reviews.headlineAccentLine} />
      <div className="ar-reviews-grid" data-testid={status === "loading" ? "reviews-loading" : "reviews-grid"}>
        {status === "loading" ? (
          [0, 1, 2].map((i) => (
            <div className="ar-review-card" key={i}>
              <div className="ar-review-skeleton wide" />
              <div className="ar-review-skeleton wide" />
              <div className="ar-review-skeleton short" />
            </div>
          ))
        ) : (
          items.map((r) => (
            <div className="ar-review-card" key={r.author}>
              <div className="ar-review-stars">{stars(r.rating ?? 5)}</div>
              <p className="ar-review-text">"{r.text}"</p>
              <div className="ar-review-author">
                <strong>{r.author}</strong>
                {r.relativeTime || r.location} &nbsp;·&nbsp; {r.source}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="ar-reviews-footer">
        <a href={reviews.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="ar-reviews-all-link">
          See all reviews on Google →
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const { contact } = CONTENT;
  const f = contact.form;
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const body = new FormData();
      body.append("access_key", f.web3formsKey);
      body.append("subject", f.subject);
      body.append("redirect", "false");
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="ar-contact-section" id="contact">
      <div className="ar-contact-grid">
        <div>
          <div className="ar-section-label">{contact.eyebrow}</div>
          <Headline lines={contact.headline} accentLine={contact.headlineAccentLine} />
          <p className="ar-contact-note">{contact.note}</p>
          <div className="ar-contact-methods">
            {contact.methods.map((m) => (
              <div className="ar-contact-method" key={m.label}>
                <div className="ar-method-icon">{m.icon}</div>
                <div>
                  <div className="ar-method-label">{m.label}</div>
                  <div className="ar-method-value">
                    {m.href ? <a href={m.href}>{m.value}</a> : m.value}
                    {m.extra && <div className="ar-method-extra">{m.extra}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="ar-form-row">
              <div className="ar-form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Smith" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="ar-form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="(720) 000-0000" required value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="ar-form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} />
            </div>
            <div className="ar-form-group">
              <label>Service Needed</label>
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service…</option>
                {f.serviceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="ar-form-group">
              <label>Describe the Issue</label>
              <textarea name="message" placeholder="Tell us what's going on — the more detail, the faster we can help…" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit" className="ar-form-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : f.submitLabel}
            </button>
          </form>
          {status === "success" && <p className="ar-form-success">{f.successMsg}</p>}
          {status === "error" && <p className="ar-form-error">{f.errorMsg}</p>}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { brand, footer } = CONTENT;
  return (
    <>
      <footer className="ar-footer">
        <div>
          <a href="#" className="ar-logo ar-footer-logo">
            {brand.name}<span className="ar-logo-accent">{brand.nameAccent}</span>
          </a>
          <p className="ar-footer-about">{footer.about}</p>
        </div>
        {footer.cols.map((col) => (
          <div className="ar-footer-col" key={col.heading}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}><a href="#contact">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="ar-footer-bottom">
        <p>{brand.copyright} · License #{brand.license} · All rights reserved</p>
        <div className="ar-license-badge">{brand.certification}</div>
      </div>
    </>
  );
}

// ============================================================
// ROOT
// ============================================================
export default function ArcticRidge() {
  return (
    <>
      <style>{css}</style>
      <Nav />
      <Hero />
      <Emergency />
      <TrustBar />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
