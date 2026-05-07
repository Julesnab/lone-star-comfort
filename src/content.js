// ============================================================
// ✏️  CUSTOMER CONTENT — swap this file per client
// ============================================================
export const CONTENT = {
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
    { label: "About",    href: "#about"    },
    { label: "Reviews",  href: "#reviews"  },
    { label: "Contact",  href: "#contact"  },
  ],

  hero: {
    eyebrow: "Denver's Most Trusted HVAC",
    headline: ["KEEP YOUR", "COOL.", "ALL YEAR."],
    headlineAccentLine: 1,
    sub: "From emergency breakdowns to full system installs — Arctic Ridge has served Denver homeowners for 18 years. We pick up the phone. We show up on time. We do it right.",
    ctaPrimary:   { label: "Get a Free Quote",  href: "#contact"  },
    ctaSecondary: { label: "See Our Services",  href: "#services" },
    dial: {
      temp:   "72°",
      unit:   "Indoor Comfort",
      status: "● System Optimal",
      badgeTopLeft:    { label: "Response time",  value: "2 HRS"  },
      badgeBottomRight:{ label: "Jobs completed", value: "4,200+" },
    },
  },

  emergency: {
    badge:   "24/7 EMERGENCY",
    message: "AC or furnace breakdown? We have same-day emergency service available across the Denver metro.",
  },

  trust: [
    { icon: "✓",  text: "Licensed & Insured in Colorado"   },
    { icon: "★",  text: "4.9/5 on Google (312 reviews)"    },
    { icon: "⚡", text: "Same-Day Service Available"       },
    { icon: "🛡", text: "100% Satisfaction Guarantee"      },
    { icon: "🏠", text: "Serving Denver Since 2006"        },
  ],

  services: {
    eyebrow: "What We Do",
    headline: ["EVERY SERVICE", "YOUR HOME NEEDS"],
    headlineAccentLine: 1,
    items: [
      {
        num: "01", icon: "❄️",
        title: "AC Installation & Repair",
        desc: "Central air, ductless mini-splits, window units. We install all major brands and handle emergency repairs fast — usually same or next day.",
        cta: "Request service",
      },
      {
        num: "02", icon: "🔥",
        title: "Furnace & Heating",
        desc: "Gas furnaces, heat pumps, boilers — installation, tune-ups, and urgent repairs. Don't go a night without heat when Denver temps drop below zero.",
        cta: "Request service",
      },
      {
        num: "03", icon: "🌬️",
        title: "Duct Cleaning & IAQ",
        desc: "Improve your indoor air quality with professional duct cleaning, HEPA filtration, humidifiers, and UV sanitizer installs.",
        cta: "Request service",
      },
      {
        num: "04", icon: "🔧",
        title: "Maintenance Plans",
        desc: "Annual or bi-annual tune-ups keep your system running efficiently, prevent breakdowns, and extend equipment life by years.",
        cta: "View plans",
      },
      {
        num: "05", icon: "💧",
        title: "Water Heaters",
        desc: "Traditional tank and tankless water heater installation and repair. Same-day service for unexpected failures.",
        cta: "Request service",
      },
      {
        num: "06", icon: "🏗️",
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
      { num: "18",  suffix: "+",  label: "Years serving Denver"       },
      { num: "4.9", suffix: "★",  label: "Average Google rating"      },
      { num: "4.2", suffix: "K",  label: "Jobs completed"             },
      { num: "2",   suffix: "hr", label: "Average emergency response"  },
    ],
    points: [
      {
        title: "Upfront pricing, no surprises",
        desc:  "We quote before we work. What we say is what you pay.",
      },
      {
        title: "NATE-certified technicians",
        desc:  "Every tech on our team is North American Technician Excellence certified.",
      },
      {
        title: "All work guaranteed in writing",
        desc:  "1-year labor warranty on all repairs. Manufacturer warranties on equipment.",
      },
      {
        title: "Clean, respectful of your home",
        desc:  "We wear shoe covers, lay down drop cloths, and leave no mess behind.",
      },
    ],
  },

  reviews: {
    eyebrow: "Customer Reviews",
    headline: ["WHAT DENVER", "IS SAYING"],
    headlineAccentLine: 1,
    items: [
      {
        text:     "Our AC died on the hottest day of the year — 97°F. I called Arctic Ridge at 8am and a tech was at my door by 10:30. Fixed within the hour. These guys are the real deal.",
        author:   "Marcus T.",
        location: "Highlands Ranch, CO",
        source:   "Google Review",
      },
      {
        text:     "They installed a new furnace and the whole process was painless. Quote was fair, the crew was on time and professional, and they cleaned up after. Haven't had an issue in 2 years.",
        author:   "Jennifer K.",
        location: "Lakewood, CO",
        source:   "Google Review",
      },
      {
        text:     "I've used 3 different HVAC companies over the years and Arctic Ridge is the only one that doesn't try to upsell you on stuff you don't need. Honest, fast, and priced right.",
        author:   "David R.",
        location: "Aurora, CO",
        source:   "Google Review",
      },
    ],
  },

  contact: {
    eyebrow: "Get In Touch",
    headline: ["REQUEST", "A QUOTE"],
    headlineAccentLine: 1,
    note: "We respond to all inquiries within 2 hours during business hours. For emergencies, call us directly — we answer 24/7.",
    methods: [
      { icon: "📞", label: "Emergency & General", value: "(720) 555-0182",                    href: "tel:+17205550182"                        },
      { icon: "✉️", label: "Email",               value: "service@arcticridgehvac.com",        href: "mailto:service@arcticridgehvac.com"      },
      { icon: "📍", label: "Service Area",        value: "Denver Metro, Lakewood, Aurora, Highlands Ranch, Littleton, Centennial"              },
      { icon: "🕐", label: "Business Hours",      value: "Mon–Fri 7am–7pm · Sat 8am–5pm",     extra: "24/7 Emergency Service"                 },
    ],
    form: {
      web3formsKey: "cdbd8657-886d-47d4-bc07-f644b383551b",
      subject:      "New Quote Request — Arctic Ridge HVAC Website",
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
      successMsg:  "✓ Request received — we'll call you within 2 hours.",
      errorMsg:    "✗ Something went wrong — please try again or call us directly.",
    },
  },

  footer: {
    about: "Denver's trusted HVAC specialists since 2006. Heating, cooling, and air quality for homes across the metro area.",
    cols: [
      {
        heading: "Services",
        links: ["AC Repair & Install", "Furnace & Heating", "Duct Cleaning", "Maintenance Plans", "Water Heaters", "New Construction"],
      },
      {
        heading: "Service Areas",
        links: ["Denver", "Lakewood", "Aurora", "Highlands Ranch", "Littleton", "Centennial"],
      },
    ],
  },
};
