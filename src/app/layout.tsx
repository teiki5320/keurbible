import type { Metadata, Viewport } from "next";
import { Cinzel, Mulish } from "next/font/google";
import { ADSENSE_CLIENT, BING_VERIFICATION, UMAMI_WEBSITE_ID, siteConfig } from "@/lib/config";
import { DEFAULT_SHARE_IMAGES } from "@/lib/metadata";
import "./globals.css";

const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"], display: "swap" });
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["500", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: DEFAULT_SHARE_IMAGES,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
  // Grande image autorisée dans Google Discover et les résultats.
  robots: { "max-image-preview": "large" },
  // Validation du site dans AdSense et dans Bing Webmaster Tools.
  other: {
    ...(ADSENSE_CLIENT && { "google-adsense-account": ADSENSE_CLIENT }),
    ...(BING_VERIFICATION && { "msvalidate.01": BING_VERIFICATION }),
  },
};

export const viewport: Viewport = {
  themeColor: "#050302",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${mulish.variable} ${cinzel.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Mesure d'audience Umami, sans cookie : visites, et clics marqués data-umami-event (Amazon, menu des sites Keur). */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id={UMAMI_WEBSITE_ID} data-domains="keurbible.com" />
        {/* Code AdSense : charge les annonces et le bandeau de consentement de Google (réglé dans AdSense). */}
        {ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="flex min-h-dvh flex-col">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded focus:bg-white focus:p-2">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
