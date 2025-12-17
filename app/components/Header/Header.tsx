'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    'Услуги',
    'О клинике',
    'Команда',
    'Цены',
    'Результаты работ',
    'Акции',
    'Контакты',
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <a href="#" className={styles.topLink}>
          <Image src="/icons/glasses.svg" alt="иконка очки" width={30} height={16} />
          Версия для слабовидящих
        </a>

        <a href="#" className={styles.topLink}>
        <Image src="/icons/max.svg" alt="иконка очки" width={16} height={16} />
          Канал - MAX
        </a>
      </div>
      
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Link href='/' className={styles.logo}>
              <Image src="/logo.svg" alt="Премьера Стоматология" width={200} height={50} priority className={styles.logoImage} />
            </Link>
            <div className={styles.logoText}>
              <div className={styles.logoTextLine}>премиальная</div>
              <div className={styles.logoTextLine}>стоматология</div>
            </div>
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <button
              className={styles.closeBtn}
              onClick={toggleMenu}
              aria-label="Закрыть меню"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className={styles.navList}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <Link href="#" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`${styles.navPlaceholder} ${isMenuOpen ? styles.navPlaceholderHidden : ''}`}>
            <button
              className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.mobileMenuBtnOpen : ''}`}
              onClick={toggleMenu}
              aria-label="Меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={styles.contacts}>
            <a href="tel:+74232658950" className={styles.phone}>
              +7 (423) 265-89-50
            </a>
            <div className={styles.actions}>
              <button className={styles.searchBtn} aria-label="Поиск">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <Button
                text="Записаться"
                icon='/icons/email.svg'
                backgroundColor="var(--foreground)"
                textColor="#fff"
                className={styles.appointmentBtn}
                onClick={scrollToContactForm}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

