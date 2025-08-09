import { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Управление запасами розничного магазина",
  description:
    "Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Управление запасами розничного магазина",
    description:
      "Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.",
    url: "https://example.com",
    siteName: "Управление запасами розничного магазина",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Управление запасами розничного магазина",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Управление запасами розничного магазина",
    description:
      "Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://example.com",
    languages: {
      en: "https://example.com/en",
      uz: "https://example.com/uz",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
