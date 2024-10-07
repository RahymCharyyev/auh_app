import { apiUrl } from '@/constants/ApiUrl';
import { TripModel } from '@/types/trip';
import { TripsModel } from '@/types/trips';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getTrips(
  lang: string,
  fromLocationId?: string,
  toLocationId?: string,
  startDate?: string,
  isActive?: boolean,
  seatCount?: string
) {
  return typedFetchJSON<{ data: TripsModel }>(
    `${apiUrl}/trips?`,
    {},
    {
      lang,
      startDate,
      fromLocationId,
      toLocationId,
      seatCount,
      isActive,
    }
  );
}

export function getDetailedTrip(id: string, lang: string) {
  return typedFetchJSON<{ data: TripModel }>(
    `${apiUrl}/trips/${id}?`,
    {},
    {
      lang,
    }
  );
}
