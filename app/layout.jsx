import { Merriweather } from 'next/font/google';
import './globals.css';

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Lone Star Comfort Systems | San Antonio HVAC',
  description:
    "San Antonio's trusted HVAC specialists. AC repair, installation, humidity control, and indoor air quality. Veteran-owned. TACLA licensed. Call (210) 554-7820.",
  icons: { icon: '/wind-power.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merriweather.className}>
      <body>{children}</body>
    </html>
  );
}
