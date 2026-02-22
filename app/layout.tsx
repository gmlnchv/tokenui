import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import {
  StructuredData,
  getBaseStructuredData,
} from "@/components/seo/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tokenui.dev"),
  title: {
    default: "Token UI | Design System Documentation Components",
    template: "%s | Token UI",
  },
  description:
    "Beautiful, interactive documentation components for your design tokens. Built for React, Storybook, and MDX.",
  keywords: [
    "design system",
    "design tokens",
    "component library",
    "documentation",
    "react",
    "storybook",
    "mdx",
    "ui registry",
  ],
  authors: [{ name: "Token UI Team" }],
  creator: "Token UI",
  publisher: "Token UI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tokenui.dev",
    siteName: "Token UI",
    title: "Token UI | Design System Documentation Components",
    description:
      "Beautiful, interactive documentation components for your design tokens. Built for React, Storybook, and MDX.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Token UI - The Art of Design System Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token UI | Design System Documentation Components",
    description:
      "Beautiful, interactive documentation components for your design tokens. Built for React, Storybook, and MDX.",
    images: ["/og-image.png"],
    creator: "@gmlnchv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} text-foreground flex min-h-screen flex-col font-sans antialiased`}
      >
        <RootProvider>
          <StructuredData data={getBaseStructuredData()} />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
