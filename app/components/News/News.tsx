import { NewsItem } from '@/app/types';
import NewsSlider from './NewsSlider';
import styles from './News.module.scss';

interface NewsProps {
  news: NewsItem[];
}

export default function News({ news }: NewsProps) {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h2 className={styles.title}>Новости и блог</h2>
        <NewsSlider news={news} />
        <div className={styles.footer}>
          <a href="#" className={styles.allPublications}>
            Все публикации ({news.length})
          </a>
        </div>
      </div>
    </section>
  );
}

