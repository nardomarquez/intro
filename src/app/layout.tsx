import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
});

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
      <body className={`${helveticaNeue.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
