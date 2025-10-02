// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Vismay Marathon 2025 | 5K Run in Kochi</title>
        <meta
          name="description"
          content="Join the Vismay Run 2025 in Kochi on October 5. Celebrate endurance, fitness, and fun in our 5K marathon event. Register now!"
        />
        <title>Vismay run 2025 Kochi Marathon</title>
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
        <meta
          property="og:image"
          content="https://vismayrun2025.in/home2.webp"
        />
        <meta property="og:url" content="https://vismayrun2025.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vismay Run 2025" />
        <meta
          name="twitter:description"
          content="Join the 5K Vismay Run in Kochi this October."
        />

        {/* Theme color */}
        <meta name="theme-color" content="#620b38" />

        {/* Font Optimization */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/home2.jpg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
