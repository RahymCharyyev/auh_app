import { apiUrl } from '@/constants/ApiUrl';
import { RefundModel } from '@/types/refund';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getRefund(id: string, lang: string) {
  return typedFetchJSON<{
    data: RefundModel;
    success: boolean;
    reason?: string;
  }>(
    `${apiUrl}/tickets/refund/${id}?`,
    {},
    {
      lang,
    }
  );
}
