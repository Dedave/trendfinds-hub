import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TrendFinds Hub - Affordable Lifestyle Finds You'll Love",
  description: "Discover trending sneakers, cutting-edge tech gadgets, and innovative home solutions at unbeatable prices. Curated for style, quality, and value.",
  keywords: "affordable fashion, sneakers, tech gadgets, home gadgets, AliExpress deals, trendy products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
