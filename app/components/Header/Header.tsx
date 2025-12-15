'use client';

import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          Версия для слабовидящих
        </a>
        <a href="#" className={styles.topLink}>
          Канал - MAX
        </a>
      </div>
      
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logo}>
            ПРЕМЬЕРА СТОМАТОЛОГИЯ
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <a href="#" className={styles.navLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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
              <button className={styles.appointmentBtn}>
                Записаться
              </button>
            </div>
          </div>

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
      </div>
    </header>
  );
}

