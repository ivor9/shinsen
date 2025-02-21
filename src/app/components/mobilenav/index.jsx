'use client';
import { React, useState } from 'react';
import styles from "./style.module.scss";
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, translate, height, background } from '../anim.js';

export default function Index() {

  const [isActive, setIsActive] = useState(false);

  return (

      <motion.div initial="initial" animate="enter" variants={translate} className={styles.container}>

        <div onMouseDown={() => {setIsActive(!isActive)}} className={styles.menuwrap}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive:""}`}>
  
          </div>
          <div className={styles.menu}>
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>MENU</motion.p>
            <motion.p variants={opacity} animate={!isActive ? "closed" : "open"}>CLOSE</motion.p>
          </div>
        </div>
  
        <AnimatePresence mode="wait">
        {isActive && 
          <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.navigation}>
            <a className={styles.home} href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/menu'>Menu</a>
            <a>Contact us</a>
            <a className={styles.reserve}>Reserve a table</a>
          </motion.div>
        }
        </AnimatePresence>
  
  
        <div className={styles.line}>
        </div>
  
      </motion.div>
  )
}