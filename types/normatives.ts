export interface NormativesModel {
  success: boolean;
  data: Normatives[];
}

export interface Normatives {
  uuid: string;
  createdAt: string;
  title: string;
  description: string;
  filePath: string;
}
