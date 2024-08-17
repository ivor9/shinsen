'use client';
import React from 'react';
import Main from './components/main';
import About from './components/about';
import Location from './components/location';
import Footer from './components/footer';
import { useEffect } from 'react';
import "./globals.css";

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/images/blue.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: 'fit-content',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  useEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotivescroll = new LocomotiveScroll();
      }
    ) ()

  }, [])



  return (
    <main>
      <div style={backgroundImageStyle}>
        <Main />
        <About />
        <Location />
        <Footer />
      </div>
    </main>
  );
}
