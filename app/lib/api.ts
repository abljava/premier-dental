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
    const news: NewsItem[] = posts.slice(0, 10).map((post) => {
      // Генерируем случайные изображения
      const imageId = Math.floor(Math.random() * 1000) + 1;
      const imageUrl = `https://picsum.photos/400/300?random=${imageId}`;

      // Генерируем случайную дату в прошлом году
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));
      const formattedDate = randomDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      return {
        id: post.id,
        title: post.title,
        body: post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body,
        image: imageUrl,
        date: formattedDate,
      };
    });

    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
