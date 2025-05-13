import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const departureMono = localFont({
  src: "./fonts/DepartureMono/DepartureMono-Regular.woff",
  variable: "--font-departure-mono",
  weight: "100 900",
});

const helveticaNueue = localFont({
  src: [
    {
      path: "./fonts/helvetica-neue/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/helvetica-neue/HelveticaNeueUltraLight.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: "Klaus 117 Portfolio",
  description: "Ayobami Oyesiku (Klaus 117) porfolio",
  icons: {
    icon: "/skull.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${helveticaNueue.variable} ${geistMono.variable} ${geistSans.variable} ${departureMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
