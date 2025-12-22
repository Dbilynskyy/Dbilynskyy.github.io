import "./globals.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dbilynskyy.github.io"),
  title: "Denys Bilynskyy — Portfolio",
  description: "Software developer portfolio: projects, case studies, and contact.",
  openGraph: {
    title: "Denys Bilynskyy — Portfolio",
    description: "Software developer portfolio: projects, case studies, and contact.",
    url: "https://dbilynskyy.github.io",
    images: [
      { url: "/images/profile.webp", width: 1200, height: 630, alt: "Denys Bilynskyy" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/profile.webp"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />
        <main id="content" className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
