# Lone Star Comfort Systems — Website Build Spec

## Project Overview

Build a single-page marketing website for a fictional HVAC company based in San Antonio, TX.
The site should feel like a long-established, locally owned business — warm, trustworthy, and
direct. Not a franchise. Not a tech startup. A real neighborhood contractor with deep roots.

---

## Tech Stack

- React + Vite
- Inline CSS-in-JS (style objects, no external CSS files)
- Web3Forms for contact form submissions
- Deployed to Cloudflare Pages

---

## Brand

**Business Name:** Lone Star Comfort Systems  
**Tagline:** San Antonio's Heat & Humidity Experts  
**Owner:** Derek Cantu  
**Founded:** 2008  
**Phone:** (210) 554-7820  
**Email:** service@lonestarcomfort.com  
**Address:** 3112 Fredericksburg Rd, San Antonio, TX 78201  
**License:** TACLA Licensed & Insured | Veteran-Owned

---

## Color Palette

All colors defined as constants at the top of the file:

```js
const COLORS = {
  sienna:   '#C1440E',   // primary brand / CTA buttons
  cream:    '#FAF4EC',   // page background
  charcoal: '#232323',   // headings and body text
  sand:     '#D4B483',   // accents, dividers, icon fills
  white:    '#FFFFFF',
  lightGray:'#F0EBE3',   // card backgrounds
};
```

---

## Typography

Load from Google Fonts via `<link>` in index.html:

```
Rockwell Condensed (or fallback: 'Rockwell', serif) — headings
Merriweather (serif) — body text
```

Heading sizes: H1 56px, H2 38px, H3 24px  
Body: 17px, line-height 1.7  
All text: `color: COLORS.charcoal` unless on dark background

---

## Content Object

Define a single `CONTENT` object at the top of App.jsx containing all copy:

```js
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
        icon: '❄️',
        title: 'AC Installation & Repair',
        description: 'New systems, emergency repairs, and tune-ups for every major brand. We size systems correctly for Texas heat.',
      },
      {
        icon: '💧',
        title: 'Humidity Control',
        description: "It's not just the heat — it's the humidity. We design and install whole-home dehumidification systems.",
      },
      {
        icon: '🌬️',
        title: 'Ductwork Services',
        description: 'Leaky ducts can cost you 20–30% in efficiency. We inspect, seal, and replace ductwork the right way.',
      },
      {
        icon: '🔥',
        title: 'Heating & Furnaces',
        description: 'When San Antonio winters turn cold fast, your heat needs to work. Repair, replacement, and annual tune-ups.',
      },
      {
        icon: '🌿',
        title: 'Indoor Air Quality',
        description: 'UV purifiers, air scrubbers, and filtration systems that remove allergens, mold spores, and pollutants.',
      },
      {
        icon: '📱',
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
```

---

## Page Sections (in order)

### 1. Nav
- Fixed top, background `COLORS.cream` with a subtle bottom border in `COLORS.sand`
- Logo left: bold, `COLORS.sienna`, Rockwell font
- Links right: charcoal, hover underline in sienna
- "Book Now" pill button on far right: `COLORS.sienna` background, white text
- Smooth scroll to section anchors on click

### 2. Hero
- Full-viewport height
- Background: `COLORS.charcoal` with a subtle warm texture overlay (use a CSS radial gradient in sienna at ~8% opacity to simulate sun haze)
- Headline in two lines: large Rockwell, white — "San Antonio summers don't forgive." / "Your AC shouldn't either."
- Body text: Merriweather, `COLORS.sand`, max-width 580px
- CTA button: `COLORS.sienna`, large, slight border-radius, hover darkens
- Badge below button: small caps, sand color, letter-spaced

### 3. Services
- Background: `COLORS.cream`
- 3-column grid (2-col on tablet, 1-col mobile)
- Each card: `COLORS.lightGray` background, left border accent in `COLORS.sienna`, icon top, title in Rockwell, body in Merriweather
- Hover: slight lift (translateY -3px), border brightens

### 4. About
- Two-column layout: copy left, stats right
- Background: `COLORS.sienna` (dark section)
- All text white or `COLORS.cream`
- Stats displayed as large Rockwell numbers with small labels below
- A subtle star/lone star SVG watermark behind the stats (low opacity)

### 5. Why Us
- Background: `COLORS.cream`
- 3-column grid of reason cards
- Clean, minimal cards — icon or number, bold title, short body
- No heavy borders — use spacing and typography to separate

### 6. Testimonials
- Background: `COLORS.charcoal`
- 3 cards in a row, each `COLORS.lightGray` (slightly warm dark card)
- Star rating in `COLORS.sienna`
- Customer name and location in sand
- Quote body in cream/white Merriweather italic

### 7. Contact
- Two-column: info left, form right
- Background: `COLORS.cream`
- Left column: phone (large, clickable `tel:` link), email, address, hours
- Right column: Web3Forms form — Name, Phone, Email, Message, Submit button
- On submit success: replace form with a thank-you message

### 8. Footer
- Background: `COLORS.charcoal`
- Logo + tagline centered
- License line in sand, small
- Copyright in gray, smallest size

---

## Component Structure

All in a single `App.jsx` file:

```
App.jsx
  └── COLORS (const)
  └── CONTENT (const)
  └── <Nav />
  └── <Hero />
  └── <Services />
  └── <About />
  └── <WhyUs />
  └── <Testimonials />
  └── <Contact />
  └── <Footer />
```

Each section is a function component defined in the same file, receiving no props (reads directly from CONTENT and COLORS).

---

## Form Handling

Use Web3Forms:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.append('access_key', CONTENT.contact.web3formsKey);
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });
  if (res.ok) setSubmitted(true);
};
```

---

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lone Star Comfort Systems | San Antonio HVAC</title>
    <meta name="description" content="San Antonio's trusted HVAC specialists. AC repair, installation, humidity control, and indoor air quality. Veteran-owned. TACLA licensed. Call (210) 554-7820." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Rockwell+Condensed:wght@400;700&display=swap" rel="stylesheet" />
  </head>
  <body style="margin:0; padding:0; background:#FAF4EC;">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## package.json

```json
{
  "name": "lone-star-comfort",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.4"
  }
}
```

---

## Deployment Notes

- Deploy to Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- Replace `YOUR_WEB3FORMS_KEY_HERE` with real key before deploying
- Google Fonts loads via CDN — no local font files needed
