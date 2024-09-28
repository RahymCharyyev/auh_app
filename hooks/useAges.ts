import { useEffect, useState } from 'react';
import { getAges } from '@/api/ages';
import { AgesModel } from '@/types/ages';

const useAges = (languageCode: string) => {
  const [isLoading, setLoading] = useState(true);
  const [ages, setAges] = useState<{ data: AgesModel[] }>();

  const fetchAges = async () => {
    try {
      const ages = await getAges(languageCode);
      if (ages?.data) setAges(ages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAges();
  }, [languageCode]);

  return { isLoading, ages };
};

export default useAges;
