export interface AgesModel {
  uuid: string;
  coefficientInPercent: number;
  lang: Lang;
  count?: number;
}

export interface Lang {
  title: string;
  description: string;
}
