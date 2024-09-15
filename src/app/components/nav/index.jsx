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
          <a href='/menu'>MENU</a>
          <a href='/about'>ABOUT US</a>

        </div>

        <div className={styles.logo}>
          <a href="/">ShinSen</a>
        </div>

        <div className={styles.rightwrap}>
          <div>RESERVE</div>
          <div>LOCATION</div>
        </div>
      </div>

      <div className={styles.line}>
      </div>
    </motion.div>

  )
}