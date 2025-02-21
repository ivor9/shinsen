'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './style.module.scss';
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi2";


export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
      <div className={styles.embla_viewport} ref={emblaRef}>
        <div className={styles.embla_container}>
          <div className={styles.embla_slide}>
            <img className={styles.slide} src="../images/1.webp">
            </img>
          </div>

          <div className={styles.embla_slide}>
            <img className={styles.slide} src="../images/5.webp">
            </img>
          </div>

          <div className={styles.embla_slide}>
            <img className={styles.slide} src="../images/3.webp">
            </img>
          </div>

          <div className={styles.embla_slide}>
            <img className={styles.slide} src="../images/6.webp">
            </img>
          </div>

        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.prev} onClick={scrollPrev}>
          <HiOutlineChevronLeft className={styles.arrow}/>
        </button>
        <button className={styles.next} onClick={scrollNext}>
          <HiOutlineChevronRight className={styles.arrow}/>

        </button>
      </div>
  </div>
  )
}

