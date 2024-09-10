'use client';
import React from "react";
import styles from "./style.module.scss";

export default function index() {

  return (
    <div className={styles.container}>
      <div className={styles.textwrap}>
        <div className={styles.leftwrap}>
          <a href='/about'>ABOUT US</a>
          <a href='/menu'>MENU</a>

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
    </div>

  )
}