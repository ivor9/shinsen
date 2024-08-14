'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.copywrap}>
        <div className={styles.text}>
          <div>Come have a drink & savor excellent sushi with us at ShinSen Sushi & Lounge!</div>
        </div>
      </div>

      <div className={styles.goldline}></div>

      <div className={styles.footwrap}>
        <div className={styles.footnav}>
          <div className={styles.menuwrap}>
            <a className={styles.menubutton} href="/menu">
              <div>Menu</div>
            </a>
            <a className={styles.reservebutton} href="https://www.opentable.com/r/shinsen-sushi-reservations-portland?restref=1362088&lang=en-US&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer">
              <div>Reserve a table</div>
            </a>
          </div>
          <div className={styles.greendot}></div>
        </div>

        <div className={styles.info}>
          <div className={styles.addy}>
            <p>Address ↓</p>
            <div>
              <p>510 W Columbia Way,</p>
              <p>Vancouver, WA 98660</p>
            </div>
          </div>

          <div className={styles.hours}>
            <p>Hours ↓</p>
            <div>
              <p>4P — 9:30P</p>
              <p>Wednedsay - Sunday</p>
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
