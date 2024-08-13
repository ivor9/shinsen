'use client'
import styles from './style.module.scss';
import Image from 'next/image';
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { HiOutlineChevronRight } from "react-icons/hi2";

export default function index() {
  
<script src="./script.js"></script>
  return (
    <div className={styles.container}>
      <div className={styles.carousel} data-carousel>
      
        <button className={styles.buttonprev} data-carousel-button="prev">
          <HiOutlineChevronLeft className="w-5 h-5"/>
        </button>

        <button className={styles.buttonnext} data-carousel-button="next">
          <HiOutlineChevronRight className="w-5 h-5"/>
        </button>
      

        <ul>
          <li className={styles.slide} data-active>
            <Image 
              src={`/images/1.webp`}
              style={{objectFit: "cover"}}
              priority={true}
              fill={true}
              alt="image"
            />
          </li>
          <li className={styles.slide} data-active>
            <Image 
              src={`/images/2.webp`}
              priority={true}
              style={{objectFit: "cover"}}
              fill={true}
              alt="image2"
            />
          </li>
          <li className={styles.slide} data-active>
            <Image 
              src={`/images/3.webp`}
              priority={true}
              style={{objectFit: "cover"}}
              fill={true}
              alt="image3"
            />
          </li>
          <li className={styles.slide} data-active>
            <Image 
              src={`/images/4.webp`}
              priority={true}
              style={{objectFit: "cover"}}
              fill={true}
              alt="image4"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
