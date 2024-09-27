import { apiUrl } from '@/constants/ApiUrl';
import { AgesModel } from '@/types/ages';

import { typedFetchJSON } from '@/utils/typedFetch';

export function getAges(lang: string) {
  return typedFetchJSON<{ data: AgesModel[] }>(
    `${apiUrl}/ages?`,
    {},
    {
      lang,
    }
  );
}

export const agesFetcher = (url: string, options?: RequestInit) =>
  fetch(url, options).then((res) => res.json());
