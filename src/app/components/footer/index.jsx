'use client';
import React from 'react'
import styles from './style.module.scss';
import { Baskervville } from 'next/font/google';

const baskervville = Baskervville({ 
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
  style: 'normal',
  weight: '400'
})

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.copywrap}>
        <div className={`${styles.text} ${baskervville.className}`}>
          Come have a drink & savor excellent sushi with us at ShinSen Sushi & Lounge!
        </div>
      </div>

      <div className={styles.goldline}></div>

      <div className={styles.footwrap}>
        <div className={styles.footnav}>
          <div className={styles.menuwrap}>
            <a className={styles.homebutton} href="/">
              <div>Home</div>
            </a>

            <a className={styles.menubutton} href="/about">
              <div>Our story</div>
            </a>

            <a className={styles.menubutton} href="/menu">
              <div>Menu</div>
            </a>

            <a className={styles.reservebutton} href="https://www.opentable.com/r/shinsen-sushi-reservations-portland?restref=1362088&lang=en-US&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer">
              <div>Reserve a table</div>
            </a>
          </div>
          {/* <div className={styles.greendot}></div> */}
        </div>

        <div className={styles.info}>
          <div className={styles.addy}>
            <p>Address ↓</p>
            <a href="https://www.google.com/maps/dir//510+W+Columbia+Way,+Vancouver,+WA+98660/@45.6238475,-122.7601088,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495a900166b6e57:0xb8efcd7ccf34bced!2m2!1d-122.6777082!2d45.6238771?entry=ttu" target="_blank" rel="noopener noreferrer">
              <p>510 W Columbia Way,</p>
              <p>Vancouver, WA 98660</p>
            </a>
          </div>

          <div className={styles.hours}>
            <p>Hours ↓</p>
            <div>
              <p>4:30PM — 9PM</p>
              <p>Tues - Sat</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.credits}>
        <p>All rights reserved.</p>
        <div className={styles.shinsen}>© ShinSen 2024</div>
      </div>
    </div>
  )
}
