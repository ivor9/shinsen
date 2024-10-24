'use client';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import React from 'react';
import { slideUp, slideDown, background, opacity } from './anim';

export default function index () {

  const phrase = "SUSHI & LOUNGE";

  return (
    <motion.div key={index} variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      <div className={styles.logowrap}>
        <motion.p variants={opacity} viewport={{ once: true }} initial="initial" animate="enter" key={index} className={styles.shinsen}>ShinSen</motion.p>

        <p className={styles.lounge}>
          {
            phrase.split(" ").map( (word, index) => {
              return <span key={index} className={styles.text}><motion.span variants={slideDown} initial="initial" animate="enter" key={index}>{word}</motion.span></span>
            })
          }
        </p>
      </div>

      <motion.div variants={background} initial="initial" exit="exit" className={styles.background}>
      </motion.div>

    </motion.div>
  )
}