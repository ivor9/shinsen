'use client'
import React, { useState } from "react";
import styles from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { translate2 } from '../anim.js';
import Image from 'next/image'
import Link from 'next/link';

export default function index() {

  return (
    <AnimatePresence>
    <div className={styles.body}>
      
      <motion.div initial="initial" animate="enter" variants={translate2} key={index} className={styles.container}>
        <div className={styles.line}></div>
          <div className={styles.content}>
            <p className={styles.limited}>Chef special menu</p>

            <div className={styles.specials}> 
              <div className={styles.special}>
                <div className={styles.specialtitle}>
                <p><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0C24 24 0 24 0 24C24 24 24 48 24 48C24 24 48 24 48 24C24 24 24 0 24 0Z" fill="#6CBB79"/>
                </svg>Salmon Skin Temaki</p>

                  <p className={styles.price}>7</p>
                </div>
                <p>crispy salmon skin, Japanese cucumber, daikon sprouts & tobiko or ikura</p>
              </div>

              <div className={styles.special}>
                <div className={styles.specialtitle}>
                  <p><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0C24 24 0 24 0 24C24 24 24 48 24 48C24 24 48 24 48 24C24 24 24 0 24 0Z" fill="#E59042"/>
                  </svg>
                  Spicy Tiger Roll</p>
                  <p className={styles.price}>22</p>
                </div>
                <p>tiger prawns, avocado & Japanese cucumber
                topped with a shishito cilantro aioli, tobiko,  
                green onion and jalapeno</p>
              </div>
            </div>
          </div>
        <div className={styles.line}></div>

      </motion.div>
        
    </div>
    </AnimatePresence>
  )
}
