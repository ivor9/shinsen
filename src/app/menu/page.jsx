'use client'
import React from "react";
import styles from './style.module.scss';
import Nav from '../components/nav'
import Image from 'next/image';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { translate } from '../components/anim.js';
import { AnimatePresence, whileInView, motion } from "framer-motion"

export default function Menu () {
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
      <Nav />
      <motion.div className={styles.container}
        initial={{y: 0,
          opacity: 0}}
        whileInView="enter"
        variants={translate}
      >
        <div className={styles.navwrap}>

        </div>
        
        <div className={styles.menuwrap}>

          <motion.div className={styles.menutext}

          >
            <div className={styles.menu}>Menu</div>
            <div className={styles.desc}>Items are subject
            to change due to season & availability</div>
          </motion.div>
          
          <div className={styles.menusec}>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu1.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu2.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu3.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu4.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu5.png`}
                  fill={true}
                  alt="image"
                />
            </div>
            <div className={styles.imgwrap}>
                <Image 
                  src={`/images/menu6.png`}
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