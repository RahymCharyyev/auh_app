import { getNews } from '@/api/news';
import { NewsModel } from '@/types/news';
import { useEffect, useState } from 'react';

const useNews = (languageCode: string, page: number, per_page: number) => {
  const [newsLoading, setNewsLoading] = useState(true);
  const [news, setNews] = useState<{ data: NewsModel }>();

  const fetchNews = async () => {
    try {
      const news = await getNews(languageCode, page, per_page);
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
