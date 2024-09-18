'use client'
import React, { useState } from "react";
import styles from './style.module.scss';
import Carousel from '../carousel';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { translate2 } from '../anim.js';
import Link from 'next/link';

export default function index() {

  return (
    <AnimatePresence>
    <div className={styles.container}>

    <div className={styles.body}>
      
      <motion.div initial="initial" animate="enter" variants={translate2} key={index} className={styles.hero}>

        <div className={styles.logowrap}>
          <div className={styles.logosec}>
            <div className={styles.shinsen}>
              <div className={styles.s}>ShinSen</div>
            </div>

            <div className={styles.sushiwrap}>
              <div className={styles.sushi}>
                <p>SUSHI</p>
                <p>&</p>
                <p>LOUNGE</p>
              </div>

          
              <div className={styles.greendot2wrap}>
                <div className={styles.greendot2}>
                </div>
              </div>
            </div>
          </div>
          

          <div className={styles.cta}>
            <a className={styles.menubutton} href="/menu">
              <div>Menu</div>
            </a>

            <a className={styles.reservebutton} href="https://www.opentable.com/r/shinsen-sushi-reservations-portland?restref=1362088&lang=en-US&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer">
              <div>Reserve a table</div>
            </a>
          </div>
        
        </div>


        <div className={styles.infosec}>
          <div className={styles.hours}>
            <p>Hours ↓</p>
            <div>
              <p>4:30PM — 9PM</p>
              <p>Tuesday - Saturday</p>
            </div>
          </div>

          <div className={styles.greendot}>
          </div>

          <div className={styles.addy}>
            <p>Address ↓</p>
            <div>
              <p>510 W Columbia Way,</p>
              <p>Vancouver, WA 98660</p>
            </div>
          </div>
        </div>
      </motion.div>


    </div>
    <motion.div className={styles.imgwrap}
        initial="initial"
        animate="enter"
        variants={translate2}
      >
        {/* <Carousel /> */}
        <Image 
          src="/images/1.webp"
          fill={true}
          alt="background"
        />
    </motion.div>
    </div>
    </AnimatePresence>
  )
}
