'use client';
import styles from './style.module.scss';
import { motion, useInView } from 'framer-motion';
import { slideUp, slideDown, background, opacity } from './anim';

export default function index () {

  const phrase = "SUSHI & LOUNGE";

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      <div className={styles.logowrap}>
        <motion.p variants={opacity} initial="initial" animate="enter" className={styles.shinsen}>ShinSen</motion.p>

        <p className={styles.lounge}>
          {
            phrase.split(" ").map( (word, index) => {
              return <span className={styles.text}><motion.span variants={slideDown} initial="initial" animate="enter" key={index}>{word}</motion.span></span>
            })
          }
        </p>
      </div>

      <motion.div variants={background} initial="initial" exit="exit" className={styles.background}>
      </motion.div>

    </motion.div>
  )
}