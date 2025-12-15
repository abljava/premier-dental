'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NewsItem } from '@/app/types';
import styles from './News.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

interface NewsSliderProps {
  news: NewsItem[];
}

export default function NewsSlider({ news }: NewsSliderProps) {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className={styles.swiper}
      >
        {news.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <article className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
                <span className={styles.tag}>{item.tag}</span>
              </div>
              <div className={styles.cardContent}>
                <time className={styles.date}>{item.date}</time>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.body}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={styles.prevButton} aria-label="Предыдущий слайд">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className={styles.nextButton} aria-label="Следующий слайд">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

