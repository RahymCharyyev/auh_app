import { apiUrl } from '@/constants/ApiUrl';
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

export const tripFetcher = (url: string, options?: RequestInit) =>
  fetch(url, options).then((res) => res.json());
