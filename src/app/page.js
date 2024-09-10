'use client';
import React from 'react';
import Preloader from './components/preloader';
import Nav from './components/nav'
import Mobilenav from './components/mobilenav';
import Main from './components/main';
import About from './components/about';
import Location from './components/location';
import Footer from './components/footer';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import "./globals.css";
import { Island_Moments } from 'next/font/google';

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotivescroll = new LocomotiveScroll();

        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
        }, 1400)
      }
    ) ()

  }, [])



  return (
    <main>
      <div>
        <AnimatePresence mode="wait">
          {
            isLoading && <Preloader />
          }
        </AnimatePresence>
        <Nav />
        <Mobilenav />
        <Main />
        <About />
        <Location />
        <Footer />
      </div>
    </main>
  );
}
