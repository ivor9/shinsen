import "./globals.css";
import React from "react";
import localFont from 'next/font/local';

export const ppmori = localFont({ 
  src: 'C:\Users\blitz\Documents\.code\shinsen\public\fonts\PPMori-Regular.woff2',
  subsets: ['latin'],
  display: 'swap',
})

export const baskervville = localFont({ 
  src: 'C:\Users\blitz\Documents\.code\shinsen\public\fonts\Baskervville-Regular.otf',
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
      <body className={`${ppmori.variable} ${baskervville.variable}`}>{children}</body>
    </html>
  );
}
