import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { profile } from "@/config/profile";

const siteUrl = "https://waseemrahmani.vercel.app";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Waseem Rahmani | Software Engineer × AI",
    template: "%s | Waseem Rahmani",
  },
  description: profile.description,
  applicationName: "Waseem Rahmani",
  creator: "Waseem Rahmani",
  publisher: "Waseem Rahmani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Waseem Rahmani | Software Engineer × AI",
    description: profile.description,
    url: siteUrl,
    siteName: "Waseem Rahmani",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Waseem Rahmani | Software Engineer × AI",
    description: profile.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Waseem Rahmani",
  url: siteUrl,
  image: `${siteUrl}/images/profile/waseem.jpg`,
  jobTitle: "Software Engineer",
  description: profile.description,
  mainEntityOfPage: siteUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Waseem Rahmani",
  url: siteUrl,
  description: profile.description,
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hanken.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
        />
        <ClientProviders>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
