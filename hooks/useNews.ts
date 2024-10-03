import { getNews } from '@/api/news';
import { NewsModel } from '@/types/news';
import { useEffect, useState } from 'react';

const useNews = (languageCode: string, per_page?: number, page?: number) => {
  const [newsLoading, setNewsLoading] = useState(true);
  const [news, setNews] = useState<{ data: NewsModel }>();

  const fetchNews = async () => {
    try {
      const news = await getNews(languageCode, per_page, page);
      if (news?.data) setNews(news);
    } catch (error) {
      console.error(error);
    } finally {
      setNewsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [languageCode]);

  return { newsLoading, news, refetch: fetchNews };
};

export default useNews;
