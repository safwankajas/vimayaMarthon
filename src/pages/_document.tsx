// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Theme color for address bar (Android/Chrome) */}
        <meta name="theme-color" content="#620b38" />

        {/* Preconnect for font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Fonts: Red Rose */}
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300..700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon (also add this in /public) */}
        <link rel="icon" href="/VISMAY RUN LOGO 1 with back.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
