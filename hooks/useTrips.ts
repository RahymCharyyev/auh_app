import { getTrips } from '@/api/trips';
import { TripsModel } from '@/types/trips';
import { useEffect, useState } from 'react';

const useTrips = (
  languageCode: string,
  fromLocationId: string,
  toLocationId: string,
  startDate: string,
  isActive: boolean
) => {
  const [tripsLoading, setTripsLoading] = useState(true);
  const [trips, setTrips] = useState<{ data: TripsModel }>();

  const fetchTrips = async () => {
    try {
      const trips = await getTrips(
        languageCode,
        fromLocationId,
        toLocationId,
        startDate,
        isActive
      );
      if (trips?.data) setTrips(trips);
    } catch (error) {
      console.error(error);
    } finally {
      setTripsLoading(false);
    }
  };

  useEffect(() => {
    if (fromLocationId && toLocationId && startDate) {
      fetchTrips();
    }
  }, [fromLocationId, toLocationId, startDate]);

  return { tripsLoading, trips, refetch: fetchTrips };
};

export default useTrips;
