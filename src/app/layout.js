import "./globals.css";
import React from "react";
import localFont from 'next/font/local';

const ppmori = localFont({ 
  src: [
    {
    path: '../../public/fonts/PPMori-Regular.woff2',
    subsets: ['latin'],
    display: 'swap',
    style: 'normal'
    },
    {
    path: '../../public/fonts/PPMori-Regular.ttf',
    subsets: ['latin'],
    display: 'swap',
    style: 'normal'

    },  
],
})

const baskervville = localFont({ 
  src: [
  {
    path: '../public/fonts/Baskervville-Regular.otf',
    subsets: ['latin'],
    display: 'swap',
    style: 'normal'
  },
  {
    path: '../public/fonts/Baskervville-Italic.otf',
    subsets: ['latin'],
    display: 'swap',
    style: 'italic'
  },
],
})

export const metadata = {
  title: "ShinSen Sushi & Lounge",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ppmori.className}>{children}</body>
    </html>
  );
}
