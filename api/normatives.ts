import { apiUrl } from '@/constants/ApiUrl';
import { NormativesModel } from '@/types/normatives';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getNormatives() {
  return typedFetchJSON<NormativesModel>(`${apiUrl}/normatives`);
}
