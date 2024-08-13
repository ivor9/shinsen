'use client'
import styles from './style.module.scss';
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={styles.logowrap}>
          <div className={styles.logosec}>
            <div className={styles.shinsen}>
              <div className={styles.s}>ShinSen</div>
            </div>

            <div className={styles.sushiwrap}>
              <div className={styles.sushi}>
                <p>SUSHI</p>
                <p>&</p>
                <p>LOUNGE</p>
              </div>

          
              <div className={styles.greendot2wrap}>
                <div className={styles.greendot2}>
                </div>
              </div>
            </div>
          </div>
          

          <div className={styles.cta}>
            <a className={styles.menubutton} href="/menu">
              <div>Menu</div>
            </a>

            <a className={styles.reservebutton} href="https://www.opentable.com/r/shinsen-sushi-reservations-portland?restref=1362088&lang=en-US&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer">
              <div>Reserve a table</div>
            </a>
          </div>
        
        </div>


        <div className={styles.infosec}>
          <div className={styles.hours}>
            <p>Hours ↓</p>
            <div>
              <p>4P — 9:30P</p>
              <p>Wednedsay - Sunday</p>
            </div>
          </div>

          <div className={styles.greendot}>
          </div>

          <div className={styles.addy}>
            <p>Address ↓</p>
            <div>
              <p>510 W Columbia Way,</p>
              <p>Vancouver, WA 98660</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
