'use client';
import React from "react";
import styles from "./style.module.scss";
import Image from 'next/image';
import Carousel from '../carousel';
import { translate, translate2 } from "../anim.js";
import { AnimatePresence, motion } from 
"framer-motion";

export default function index() {

  return (
    <div className={` ${styles.container}`}>

      <AnimatePresence>

      <motion.div className={styles.aboutwrap}
            initial="initial"
            whileInView="enter"
            viewport={{once:true}}
            variants={translate}
      >
        <div className={styles.story}>
          <div>新鮮 Shinsen [shin-sen]
          <div className={styles.fresh1}>&#x2022; Meaning of <span className={styles.fresh2}>fresh</span></div>
          </div>
      
          <div className={styles.firstdesc}>An intimate dining experience where modern elegance meets traditional Japanese cuisine.
          </div>
        </div>

        <div className={styles.about}>
          <a className={styles.aboutus} href='/about'><div>About us</div><div>↗</div></a>

          <div className={styles.scnddesc}>Shinsen Sushi & Lounge is a family-owned and operated business that is located by the beautiful Vancouver Waterfront. We welcome you to make memories here with us while enjoying friendly service and the freshest ingredients. 
          </div>
        </div>
      </motion.div>
 
      </AnimatePresence>
    </div>

  )
}