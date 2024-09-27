export interface NewsModel {
  count: number;
  rows: Row[];
  nextCursor: any;
}

export interface Row {
  uuid: string;
  viewCount: number;
  image: string;
  createdAt: string;
  detail: Detail;
  imagePath: string;
}

export interface Detail {
  lang: string;
  title: string;
  description: string;
}
