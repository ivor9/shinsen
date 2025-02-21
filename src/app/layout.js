import React from "react";
import './globals.css';
import localFont from 'next/font/local';
import { Baskervville } from 'next/font/google';

const ppMori = localFont({ 
  src: [
    {
    path: '../../public/fonts/PPMori-Regular.woff2',
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    style: 'normal'
    },
    {
    path: '../../public/fonts/PPMori-Regular.ttf',
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    style: 'normal'

    },  
  ],
})

const baskervville = Baskervville({ 
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
  style: 'normal',
  weight: '400'
})

export const metadata = {
  title: "ShinSen Sushi & Lounge",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${ppMori.variable} ${baskervville.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
