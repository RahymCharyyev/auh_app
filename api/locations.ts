import { apiUrl } from '@/constants/ApiUrl';
import { LocationsModel } from '@/types/locations';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getLocations(lang: string) {
  return typedFetchJSON<{ data: LocationsModel }>(
    `${apiUrl}/locations?`,
    {},
    {
      lang,
    }
  );
}
