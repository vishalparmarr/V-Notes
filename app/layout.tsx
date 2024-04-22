import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "V Notes",
  description: " A One Stop Solution for all the handwritten notes and other resources",
  other: {
    keywords: "handwritten notes, resources, notes, handwritten, handwritten notes, resources, notes, handwritten",
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    'twitter:image': 'https://ibb.co/JcD7B8J',
    'twitter:card': 'summary_large_image',
    'twitter:site': '@vercel',
    "og:image": "https://ibb.co/JcD7B8J",
    "og:url": "www.vnotes.me",
    "og:type": "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
