'use client';
import React from "react";
import styles from "./style.module.scss";
import { translate } from "../anim.js";
import { AnimatePresence, motion } from 
"framer-motion";

export default function index() {

  return (
    <motion.div 
    initial="initial" animate="enter" variants={translate}
    className={styles.container}>
      <div className={styles.textwrap}>
        <div className={styles.leftwrap}>
          <a href='/menu'>Menu</a>
          <a href='/about'>Our story</a>

        </div>

        <div className={styles.logo}>
          <a href="/">ShinSen</a>
        </div>

        <div className={styles.rightwrap}>
          <a href="https://www.opentable.com/r/shinsen-sushi-reservations-portland?restref=1362088&lang=en-US&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer">Reserve a table</a>
          <a>Location</a>
        </div>
      </div>

      <div className={styles.line}>
      </div>
    </motion.div>

  )
}