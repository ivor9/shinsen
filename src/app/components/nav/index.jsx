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
          <a href="/">Shinsen</a>
        </div>

        <div className={styles.rightwrap}>
          <a>Reserve a table</a>
          <a>Contact</a>
        </div>
      </div>

      <div className={styles.line}>
      </div>
    </motion.div>

  )
}