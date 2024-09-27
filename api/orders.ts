import { apiUrl } from '@/constants/ApiUrl';
import { Orders } from '@/types/order';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getOrderDetail(id: string, lang: string) {
  return typedFetchJSON<{ data: Orders }>(
    `${apiUrl}/orders/${id}?`,
    {},
    { lang }
  );
}
