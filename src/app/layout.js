import React from "react";
import localFont from 'next/font/local'

export const ppMori = localFont({ 
  src: [
    {
    path: './PPMori-Regular.woff2',
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    style: 'normal'
    },
    {
    path: './PPMori-Regular.ttf',
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    style: 'normal'

    },  
  ],
})

export const baskervville = localFont({ 
  src: [
  {
    path: './Baskervville-Regular.otf',
    subsets: ['latin'],
    display: 'swap',
    style: 'normal'
  },
  {
    path: './Baskervville-Italic.otf',
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
    <html className={ppMori.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
