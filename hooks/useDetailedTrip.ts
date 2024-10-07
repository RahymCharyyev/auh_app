import { getDetailedTrip } from '@/api/trips';
import { TripModel } from '@/types/trip';
import { useEffect, useState } from 'react';

const useDetailedTrip = (id: string, languageCode: string) => {
  const [detailedTripLoading, setDetailedTripLoading] = useState(true);
  const [detailedTrip, setDetailedTrip] = useState<{ data: TripModel }>();

  const fetchDetailedTrip = async () => {
    try {
      const trip = await getDetailedTrip(id, languageCode);
      if (trip?.data) setDetailedTrip(trip);
    } catch (error) {
      console.error(error);
    } finally {
      setDetailedTripLoading(false);
    }
  };

  useEffect(() => {
    if (languageCode) fetchDetailedTrip();
  }, [languageCode]);

  return {
    detailedTripLoading,
    detailedTrip,
    refetch: fetchDetailedTrip,
  };
};

export default useDetailedTrip;
