"use client";
import styles from "./style.module.scss";
import Image from "next/image;"
import { translate } from "../anim.js";
import { AnimatePresence, motion } from "framer-motion";

export default function index() {

  return (
    <div className={styles.container}>

      <motion.div className={styles.imgwrap}
        initial="initial"
        animate="enter"
        variants={translate}
      >
        <Image 
          src={`/images/1.webp`}
          objectFit="cover"
          fill={true}
          alt="image"
        />

      </motion.div>

      <AnimatePresence>
      <motion.div className={styles.aboutwrap}
            initial="initial"
            whileInView="enter"
            variants={translate}
      >
        <div className={styles.story}>
          <div>新鮮 Shinsen [shin-sen]</div>
          <div class={styles.fresh1}>&#x2022; Meaning of <span class={styles.fresh2}>fresh</span></div>

        </div>
        <div className={styles.about}>
          <div class={styles.firstdesc}>Sushi is only as good as its ingredients. Therefore, we import our fish from all over the globe and use top-quality ingredients, as we only deliver the best for our customers.
          </div>
          <div>Shinsen Sushi & Lounge is a family-owned and operated business that is located by the beautiful Vancouver Waterfront. Expect to an embark on a journey of culinary excellence as our Master Chefs curate seasonal signature rolls with emphasis on bringing together traditional Japanese techniques to create a unique experience for every guest. With our hospitality and pride, you will feel like you are right at home, no matter where you come from. Our bar features some of the finest Japanese Whiskey and Sake along with highlighting signature cocktails like our "Smoked Shinsen Old Fashion". We welcome you to make memories here with us while enjoying friendly service and the freshest ingredients. 

          </div>
        </div>
      </motion.div>
      </AnimatePresence>

      <AnimatePresence>
      <motion.div className={styles.line}
        initial="initial"
        animate="enter"
        variants={translate}
      ></motion.div>
      </AnimatePresence>
    </div>

  )
}