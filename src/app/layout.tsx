import { ThemeProvider } from "@/components/theme-provider";
import { portfolio } from "@/data/portfolio";
import type { Metadata, Viewport } from "next";
import {
  Archivo,
  Caveat,
  IBM_Plex_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const siteTitle = "Andy Nguyen — Design Engineer & UX Engineer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-caveat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.url),
  title: {
    default: siteTitle,
    template: "%s | Andy Nguyen",
  },
  description: portfolio.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon-512.png",
    apple: "/favicon-512.png",
  },
  openGraph: {
    title: siteTitle,
    description: portfolio.description,
    url: "/",
    siteName: "ATN",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ATN Air Mail portfolio by Andy Nguyen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: portfolio.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDF9F1" },
    { media: "(prefers-color-scheme: dark)", color: "#151A2B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${archivo.variable} ${plexMono.variable} ${caveat.variable} ${spaceGrotesk.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="atn-theme"
        >
          <div className="airmail-stripe" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
