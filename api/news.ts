import { apiUrl } from '@/constants/ApiUrl';
import { NewsModel, Row } from '@/types/news';
import { typedFetchJSON } from '@/utils/typedFetch';

export function getNews(lang: string, per_page?: number, page?: number) {
  return typedFetchJSON<{ data: NewsModel }>(
    `${apiUrl}/news?`,
    {},
    {
      lang,
      page,
      per_page,
    }
  );
}

export function getDetailedNews(id: string, lang: string) {
  return typedFetchJSON<{ data: Row }>(`${apiUrl}/news/${id}?`, {}, { lang });
}
