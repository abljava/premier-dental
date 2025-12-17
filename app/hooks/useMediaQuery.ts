'use client';

import { useState, useEffect } from 'react';

/**
 * Хук для отслеживания соответствия media query
 * @param query - CSS media query строка (например, '(min-width: 1280px)')
 * @returns boolean - соответствует ли текущий размер окна media query
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);

    // Обработчик изменения media query
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Добавляем слушатель
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Очистка при размонтировании
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [query]);

  return matches;
}

