import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { profile } from "@/config/profile";

const siteUrl = "https://waseemrahmani.vercel.app";
const personId = `${siteUrl}/#person`;

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
  description: profile.seoDescription,
  applicationName: "Waseem Rahmani",
  creator: "Waseem Rahmani",
  publisher: "Waseem Rahmani",
  verification: {
    google: "-P2MNC1-AM6DhWqAO7U_HJa9jZPwJHO1nI2JOmLwW74",
  },
  alternates: {
    canonical: "/",
  },
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
    description: profile.seoDescription,
    url: siteUrl,
    siteName: "Waseem Rahmani",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Waseem Rahmani | Software Engineer × AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waseem Rahmani | Software Engineer × AI",
    description: profile.seoDescription,
    images: ["/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Waseem Rahmani",
  url: siteUrl,
  image: `${siteUrl}${profile.profileImage}`,
  jobTitle: profile.headline,
  description: profile.description,
  sameAs: [profile.github, profile.linkedin, profile.x],
  mainEntityOfPage: siteUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Waseem Rahmani",
  url: siteUrl,
  description: profile.description,
  publisher: { "@id": personId },
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
