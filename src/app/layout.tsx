import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tapa d'Orella",
  description: "Dous colegas facendo música para gozar, bailar e pasalo ben. Mezcla explosiva de música urbana, ska, reggae e verbena 2.0.",
  openGraph: {
    title: "Tapa d'Orella",
    description: "Unha das propostas musicais máis irreverentes e festivas da actualidade. Non vimos só a tocar, vimos a montar a festa.",
    siteName: "Tapa d'Orella",
    locale: "gl_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="gl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
