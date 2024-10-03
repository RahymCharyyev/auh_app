import { useEffect, useState } from 'react';
import { getDetailedNews } from '@/api/news';
import { Row } from '@/types/news';

const useDetailedNews = (id: string, languageCode: string) => {
  const [detailedNewsLoading, setDetailedNewsLoading] = useState(true);
  const [detailedNews, setDetailedNews] = useState<Row | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchNewsDetails = async () => {
    try {
      const response = await getDetailedNews(id, languageCode);
      if (response?.data) {
        setDetailedNews(response.data);
      } else {
        setError('No news found');
      }
    } catch (err) {
      setError('Failed to load news details');
      console.error(err);
    } finally {
      setDetailedNewsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchNewsDetails();
    }
  }, [id, languageCode]);

  return {
    detailedNewsLoading,
    detailedNews,
    error,
    refetch: fetchNewsDetails,
  };
};

export default useDetailedNews;
