import { useEffect, useState } from 'react';

import { getLocations } from '@/api/locations';
import { LocationsModel } from '@/types/locations';

const useLocations = (languageCode: string) => {
  const [isLoading, setLoading] = useState(true);
  const [locations, setLocations] = useState<{ data: LocationsModel }>();

  const fetchLocations = async () => {
    try {
      const locations = await getLocations(languageCode);
      if (locations?.data) setLocations(locations);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [languageCode]);

  return { isLoading, locations };
};

export default useLocations;
