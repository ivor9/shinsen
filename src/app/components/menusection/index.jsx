'use client'
import React from "react";
import styles from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { translate2 } from '../anim.js';
import Image from 'next/image';

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.imgwrap}>
        <div className={styles.textwrap}>
          <div className={styles.text}>SUSHI, SASHIMI, ROLLS</div>
          <div className={styles.text}>↗</div>
        </div>

        <Image 
         src="/images/chirashi.jpg"
         fill={true}
         alt="background"
        />
      </div>

      <div className={styles.imgwrap}>
        <Image 
          src="/images/6.webp"
          fill={true}
          alt="background"
        />
        <div className={styles.textwrap}>
            <div className={styles.text}>COCKTAILS, SAKE, BEER</div>
            <div className={styles.text}>↗</div>
          </div>
        </div>
    </div>
  )
}
