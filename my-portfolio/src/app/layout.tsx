import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Include weights you need
  variable: '--font-playfair', // Define a CSS variable for the font
});

const lato = Lato({
  weight: ["400", "700"], // Include normal and bold weights
  subsets: ["latin"], // Specify character subsets
  variable: "--font-lato", // Define a CSS variable for this font
  display: "swap", // Use swap for better loading performance
});

export const metadata: Metadata = {
  title: "Calvin Nguyen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
