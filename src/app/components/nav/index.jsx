'use client'
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.navwrap}>
      <div className={styles.nav}>
        <div className={styles.leftside}>
          <p>Home</p>
          <p>About</p>
        </div>

        <div className={styles.rightside}>
          <p>Menu</p>
          <p>Reserve a table</p>
        </div>
      </div>
    </div>
  )
}
