export interface LocationsModel {
  count: number;
  rows: Location[];
  nextCursor: any;
}

export interface Location {
  uuid: string;
  name: string;
  parentId?: string;
}
