'use client';
import React from "react";
import styles from './style.module.scss';
import Image from 'next/image'
import { translate } from '../anim.js'
import { AnimatePresence, whileInView, motion } from "framer-motion"

export default function index() {
  return (
    <AnimatePresence>

    <motion.div className={styles.container}
      initial="initial"
      whileInView="enter"
      variants={translate}
    >

      <div className={styles.location}>
        <div>Our location</div>
      </div>

      <div className={styles.infowrap}>
        
        <div className={styles.imgwrap}>
          <Image 
            src={`/images/8.webp`}
            fill={true}
            alt="image"
          />
        </div>

        <div className={styles.info}>
          <div className={styles.addywrap}>
            <div className={styles.address}>510 W Columbia Way
            </div>
            <div className={styles.address}>
            Vancouver, WA 98660</div>
          </div>

          <a className={styles.mapbutton} href="https://www.google.com/maps/dir//510+W+Columbia+Way,+Vancouver,+WA+98660/@45.6238475,-122.7601088,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a900166b6e57:0xb8efcd7ccf34bced!2m2!1d-122.6777082!2d45.6238771?entry=ttu" target="_blank" rel="noopener noreferrer">
            <div>Google maps</div><div> →</div>
          </a>
        </div>
        
        <div className={styles.line}></div>
      </div>

    </motion.div>
    </AnimatePresence>
  )
}
