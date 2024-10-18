import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nardo Marquez",
  description: "Nardo Marquez is a Creative Developer based in Manila.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${ibmPlexMono.variable} font-bold leading-[110%] tracking-[-0.04em] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueMedium.otf",
      weight: "500",
    },
  ],
  variable: "--font-helvetica-neue",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});
