import { apiUrl } from '@/constants/ApiUrl';
import { Root } from '@/types/root';
import {
  AboutModel,
  AboutTaxiSectionModel,
  PrivacyModel,
  TicketCautionModel,
} from '@/types/site';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getAbout(lang: string) {
  return typedFetchJSON<Root<AboutModel>>(
    `${apiUrl}/site/about?`,
    {},
    {
      lang,
    }
  );
}

export function getPrivacy(lang: string) {
  return typedFetchJSON<Root<PrivacyModel>>(
    `${apiUrl}/site/privacy?`,
    {},
    {
      lang,
    }
  );
}

export function getTicketCaution(lang?: string) {
  return typedFetchJSON<Root<TicketCautionModel>>(
    `${apiUrl}/site/ticket-caution?`,
    {},
    {
      lang,
    }
  );
}

export function getTaxiAbout(type: string, lang: string) {
  return typedFetchJSON<Root<AboutTaxiSectionModel[]>>(
    `${apiUrl}/services?`,
    {},
    { type, lang }
  );
}
