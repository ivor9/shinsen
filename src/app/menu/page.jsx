'use client'
import React from "react";
import styles from './style.module.scss';
import Image from 'next/image';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { translate } from '../components/anim.js';
import { AnimatePresence, whileInView, motion } from "framer-motion"

export default function Menu () {
  const backgroundImageStyle = {
    backgroundImage: 'url(/images/blue.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
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
      <motion.div className={styles.container}
        initial={{y: 0,
          opacity: 0}}
        whileInView="enter"
        variants={translate}
      >
        <div className={styles.navwrap}>
          <div className={styles.nav}>
            <a className={styles.homebutton} href="/">
              <div>Home</div>
            </a>
            
            <a className={styles.reservebutton} href="https://www.opentable.com/r/shinsen-sushi-reservations-portland?restref=1362088&lang=en-US&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer">
              <div>Reserve a table</div>
              <div>→</div>
            </a>
          </div>

        </div>

        <div className={styles.menuwrap}>

          <motion.div className={styles.menutext}

          >
            <div className={styles.menu}>Menu</div>
            <div className={styles.desc}>Some items are subject
            to change due to season & availability</div>
          </motion.div>
          
          <div className={styles.menusec}>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu1.jpg`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu2.jpg`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu3.jpg`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu4.jpg`}
                  fill={true}
                  alt="image"
                />
            </div>
          </div>
        </div>
      
      </motion.div>
      <Footer />
    </main>
  )
}