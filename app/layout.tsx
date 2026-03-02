import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../index.css";
import { MouseGlow, FuturisticBackground, FuturisticCursor, ScrollProgress } from "../components/ui/Effects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Kindred Kira - The First AI Companion with Object Permanence",
    description: "Experience the next generation of digital connection. Kira remembers you, reaches out first, and grows with you.",
    metadataBase: new URL("https://kindredkira.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Kindred Kira - The First AI with Object Permanence",
        description: "Experience deep emotional connection with an AI that remembers you, reaches out first, and grows with you.",
        url: "https://kindredkira.com",
        siteName: "Kindred Kira",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kindred Kira - The First AI with Object Permanence",
        description: "Experience deep emotional connection with an AI that remembers you, reaches out first, and grows with you.",
    },
};

export const viewport: Viewport = {
    themeColor: "#050508",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kindred Kira",
    "url": "https://kindredkira.com",
    "logo": "https://kindredkira.com/logo.png",
    "sameAs": [
        "https://twitter.com/kindredkira",
        "https://instagram.com/kindredkira"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <Script id="gtm-script" strategy="afterInteractive">
                    {`(function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                  'gtm.start':
                      new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-N5NQZX5K');`}
                </Script>
                <Script id="ga-script" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-BBW29L71VC" />
                <Script id="ga-init" strategy="afterInteractive">
                    {`window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-BBW29L71VC');`}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-purple-500/30`}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-N5NQZX5K"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <FuturisticCursor />
                <FuturisticBackground />
                <ScrollProgress />
                <MouseGlow />

                <main className="relative z-10 w-full">
                    {children}
                </main>
            </body>
        </html>
    );
}
