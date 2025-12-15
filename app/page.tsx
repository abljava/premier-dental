import Header from '@/app/components/Header/Header';
import Values from '@/app/components/Values/Values';
import News from '@/app/components/News/News';
import ContactForm from '@/app/components/ContactForm/ContactForm';
import { fetchNews } from '@/app/lib/api';

export default async function Home() {
  // Загружаем новости на сервере (SSR)
  const news = await fetchNews();

  return (
    <>
      <Header />
      <Values />
      <News news={news} />
      <ContactForm />
    </>
  );
}
