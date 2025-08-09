import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Commercial Cleaning Services | Professional Office & Building Cleaning",
    template: "%s | Elite Commercial Cleaning"
  },
  description: "Professional commercial cleaning services for offices, buildings, and facilities. Bonded & insured, eco-friendly solutions, 24/7 service. Get your free quote today!",
  keywords: ["commercial cleaning", "office cleaning", "janitorial services", "building maintenance", "professional cleaning"],
  authors: [{ name: "Elite Commercial Cleaning" }],
  creator: "Elite Commercial Cleaning",
  publisher: "Elite Commercial Cleaning",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitecommercialcleaning.com",
    siteName: "Elite Commercial Cleaning",
    title: "Elite Commercial Cleaning Services | Professional Office & Building Cleaning",
    description: "Professional commercial cleaning services for offices, buildings, and facilities. Bonded & insured, eco-friendly solutions, 24/7 service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Commercial Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Commercial Cleaning Services",
    description: "Professional commercial cleaning services for offices, buildings, and facilities.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elite Commercial Cleaning",
  "image": "https://elitecommercialcleaning.com/logo.jpg",
  "description": "Professional commercial cleaning services for offices, buildings, and facilities. Bonded & insured, eco-friendly solutions, 24/7 service.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Ave",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "telephone": "+1-555-123-4567",
  "email": "info@elitecommercialcleaning.com",
  "url": "https://elitecommercialcleaning.com",
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Office Cleaning",
          "description": "Professional office cleaning services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Building Maintenance",
          "description": "Complete building maintenance and janitorial services"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
