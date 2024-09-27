import { apiUrl } from '@/constants/ApiUrl';
import { InfoModel } from '@/types/info';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getInfo(lang: string) {
  return typedFetchJSON<{ data: InfoModel }>(
    `${apiUrl}/info?`,
    {},
    {
      lang,
    }
  );
}
