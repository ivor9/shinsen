'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './style.module.scss';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

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
        <button className={styles.embla__prev} onClick={scrollPrev}>
          Prev
        </button>
        <button className={styles.embla__next} onClick={scrollNext}>
          Next
        </button>
      </div>
  </div>
  )
}

