'use client'
import React, { useEffect, useRef } from "react";
import styles from './style.module.scss';
import Image from 'next/image';
import Footer from '../components/footer';
import { translate } from '../components/anim.js';
import Nav from '../components/nav';
import Mobilenav from '../components/mobilenav';
import Announcement from '../components/announcement';
import gsap from 'gsap';

import { AnimatePresence, whileInView, motion } from "framer-motion"

export default function About () {

  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect ( () => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotivescroll = new LocomotiveScroll();
      }
    ) (),
    requestAnimationFrame(animation);
  }, [])

  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0;
    }
    if(xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.04 * direction;
    requestAnimationFrame(animation);
  }

  return (
    
    <motion.div
      initial={{y: 0,
        opacity: 0}}
      whileInView="enter"
      variants={translate}
      className={styles.main}
    > <Announcement />
      <Nav />
      <Mobilenav />

        <div className={styles.imgcontainer}>

          <div className={styles.imgwrap2}>
            <Image data-scroll data-scroll-speed="-.12"
                src={`/images/wow.jpg`}
                fill={true}
                objectFit="cover"
                alt="image"
            />
          </div>
        </div>
      <div className={styles.container}>
      </div>

      <div className={styles.inftextcontainer}>
        <div className={styles.inftext}>
          <p ref={firstText}>Sashimi  •  Nigiri   •  <span className={styles.ok}>Specialty rolls</span>  •  Cocktails  •  Sake •</p>
          <p ref={secondText}>Sashimi  •  Nigiri   •  <span className={styles.ok}>Specialty rolls</span>  •  Cocktails  •  Sake •</p>
          {/* <p ref={firstText}>FREELANCE DESIGNER AND DEVELOPER -</p>
          <p ref={secondText}>FREELANCE DESIGNER AND DEVELOPER -</p> */}
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.line1}></div>

        <div className={styles.aboutsec}>
          <p>Our story</p>
          <p>We are a family-owned restaurant that pride ourselves on delivering an exceptional dining experience, focusing on the freshest ingredients sourced directly from Japan. Our skilled chefs expertly craft each dish, ensuring that every bite showcases the delicate, fresh flavors and artistry of traditional sushi.</p>
        </div>

        <div className={styles.doubleimgwrap}>
          <div className={styles.imgwrap}>
            <Image 
                src={`/images/chef.jpg`}
                fill={true}
                objectFit="fill"
                alt="image"
              />
          </div>
          <div className={styles.imgwrap}>
          <Image 
                src={`/images/din.jpg`}
                fill={true}
                objectFit="fill"
                alt="image"
              />
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.drinks}>
          <div className={styles.drinkcol}>
            <p>We also offer a curated selection of handcrafted cocktails and premium sakes, complementing your sushi. </p>
            <a href='/drinks'className={styles.drinkbutton}>Drink menu<span>→</span></a>
          </div>
          <div className={styles.colimg}>
            <Image 
                  src={`/images/sick.jpg`}
                  fill={true}
                  objectFit="fill"
                  alt="image"
                />
          </div>
        </div>

        <div className={styles.end}>
          <div className={styles.colimg}>
          <Image 
                src={`/images/lobby.jpg`}
                fill={true}
                objectFit="cover"
                alt="image"
              />
          </div>
          <p>Whether you’re celebrating a special occasion or simply indulging in a night out, we invite you to savor the essence of freshness in a sophisticated and inviting atmosphere.</p>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}