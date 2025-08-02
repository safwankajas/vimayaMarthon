// components/SEOHead.tsx
import Head from "next/head";

export const SEOHead = () => (
  <Head>
    <title>Vismay Run 2025 – Empower. Endure. Excel.</title>
    <meta
      name="description"
      content="Join the Vismay Run 2025 in Kochi on October 5. Celebrate endurance, fitness, and fun in our 5K marathon event. Register now!"
    />
    <meta
      name="keywords"
      content="Vismay Run, Kochi Marathon, 5K Run, Sports Event, October 2025, Vismay 2025, Kerala Event"
    />
    <meta name="author" content="Vismay Team" />

    <link rel="canonical" href="https://vismayrun2025.in" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph for social preview */}
    <meta property="og:title" content="Vismay Run 2025" />
    <meta
      property="og:description"
      content="Join the Vismay Run 2025 in Kochi on October 5. Be part of the most exciting 5K event!"
    />
    <meta property="og:image" content="/og-banner.jpg" />
    <meta property="og:url" content="https://vismayrun2025.in" />
    <meta property="og:type" content="website" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Vismay Run 2025" />
    <meta
      name="twitter:description"
      content="Join the 5K Vismay Run in Kochi this October."
    />
    <meta name="twitter:image" content="/og-banner.jpg" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
