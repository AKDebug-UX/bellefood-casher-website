import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://bellefood-casher.vercel.app"),
  title: {
    default: "Bellefood Casher – 24/7 Premium Food Delivery in Lagos",
    template: "%s | Bellefood Casher",
  },
  description:
    "Fresh, delicious meals delivered 24/7 in Ikota, Lagos. Order via WhatsApp. Premium Caribbean and Nigerian cuisine.",
  keywords: [
    "Bellefood",
    "Food delivery Lagos",
    "24/7 food",
    "Ikota",
    "Nigerian cuisine",
    "Caribbean food",
    "Jollof",
    "Shawarma",
  ],
  applicationName: "Bellefood Casher",
  authors: [{ name: process.env.NEXT_PUBLIC_OWNER_NAME || "BelleFood Team" }],
  creator: process.env.NEXT_PUBLIC_OWNER_NAME || "BelleFood Team",
  publisher: "Bellefood Casher",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Bellefood Casher – 24/7 Premium Food Delivery in Lagos",
    description:
      "Fresh, delicious meals delivered 24/7 in Ikota, Lagos. Order via WhatsApp.",
    url: "https://bellefood-casher.vercel.app",
    siteName: "Bellefood Casher",
    type: "website",
    images: [
      {
        url: "/flyer.jpg",
        width: 1200,
        height: 630,
        alt: "Bellefood Casher – Premium Food Delivery",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellefood Casher – 24/7 Premium Food Delivery in Lagos",
    description:
      "Fresh, delicious meals delivered 24/7 in Ikota, Lagos. Order via WhatsApp.",
    images: ["/flyer.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bellefood Casher",
              description:
                "Fresh, delicious meals delivered 24/7 in Ikota, Lagos. Order via WhatsApp.",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://bellefood-casher.vercel.app",
              image: [
                (process.env.NEXT_PUBLIC_SITE_URL || "https://bellefood-casher.vercel.app") + "/flyer.jpg",
              ],
              logo: (process.env.NEXT_PUBLIC_SITE_URL || "https://bellefood-casher.vercel.app") + "/icon.png",
              telephone: ["+2349063584306", "+2349137421838"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jiuhua Street",
                addressLocality: "Ikota",
                addressRegion: "Lagos",
                addressCountry: "NG",
              },
              openingHours: "Mo-Su 00:00-23:59",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Ikota, Lagos",
              },
              priceRange: "₦₦",
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
