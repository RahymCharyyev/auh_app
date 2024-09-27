import { apiUrl } from '@/constants/ApiUrl';
import { RoutesModel } from '@/types/routes';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getRoutes(lang: string) {
  return typedFetchJSON<{ data: RoutesModel }>(
    `${apiUrl}/routes?`,
    {},
    {
      lang,
    }
  );
}
