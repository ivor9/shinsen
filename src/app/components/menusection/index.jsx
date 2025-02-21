'use client'
import React from "react";
import styles from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { translate2 } from '../anim.js';
import Image from 'next/image';

export default function index() {
  return (
    <div className={styles.container}>
      <a 
      href="/menu"
      className={styles.imgwrap}>
        <div className={styles.textwrap}>
          <div className={styles.text}>SUSHI, SASHIMI, ROLLS</div>
          <div className={styles.text}>↗</div>
        </div>

        <Image 
         src="/images/me.jpg"
         fill={true}
         alt="background"
        />
      </a>

      <a href="/drinks" className={styles.imgwrap}>
        <Image
          src="/images/drinksmoke.jpg"
          fill={true}
          alt="background"
        />
        <div className={styles.textwrap}>
            <div className={styles.text}>COCKTAILS, SAKE, BEER</div>
            <div className={styles.text}>↗</div>
          </div>
      </a>
    </div>
  )
}
