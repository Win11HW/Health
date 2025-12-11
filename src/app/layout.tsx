import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Contact from "../../components/contact";
import Footer from "../../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "صيدلية الشفاء - شريكك الموثوق في الرعاية الصحية",
  description: "صيدلية الشفاء تقدم أجود الأدوية والمستحضرات الطبية مع خدمة استشارية متميزة على مدار الساعة في طرابلس، ليبيا",
  keywords: "صيدلية، أدوية، طرابلس، ليبيا، رعاية صحية، استشارات طبية",
  authors: [{ name: "صيدلية الشفاء" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${cairo.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
