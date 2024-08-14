import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { PPMori, Baskervville } from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });

export const mori = PPMori({ 
  src: './fonts/PPMori-Regular.woff2',
  subsets: ['latin'],
  display: 'swap',
})

export const baskervville = Baskervville({ 
  src: './fonts/Baskervville-Regular.otf',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "ShinSen Sushi & Lounge",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
