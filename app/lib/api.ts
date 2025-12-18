import { NewsItem, JsonPlaceholderPost } from '@/app/types';

// Функция для загрузки новостей из JSONPlaceholder API
export async function fetchNews(): Promise<NewsItem[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 3600 }, // Кэширование на 1 час
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const posts: JsonPlaceholderPost[] = await response.json();

    // Преобразуем данные в формат новостей
    const news: NewsItem[] = posts.slice(0, 10).map((post, index) => {
      // Используем локальные изображения из папки public/images/news
      // Циклически перебираем доступные изображения (news-1.jpg, news-2.jpg, news-3.jpg, news-4.jpg)
      const imageNumber = (index % 4) + 1;
      const imageUrl = `/images/news/news-${imageNumber}.jpg`;

      // Генерируем случайную дату в прошлом году
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));
      const formattedDate = randomDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      // Генерируем случайный тег
      const tags = ['Новости', 'Статьи', 'Акции', 'Советы', 'События'];
      const randomTag = tags[Math.floor(Math.random() * tags.length)];

      return {
        id: post.id,
        title: post.title,
        body: post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body,
        image: imageUrl,
        date: formattedDate,
        tag: randomTag,
      };
    });

    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
