import { apiUrl } from '@/constants/ApiUrl';
import { Orders } from '@/types/order';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getTicketDetail(id: string, lang: string) {
  return typedFetchJSON<{
    data: Orders;
    success: boolean;
    reason?: string;
  }>(`${apiUrl}/tickets/by-code/${id}?`, {}, { lang });
}
