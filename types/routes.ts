export interface RoutesModel {
  count: number;
  rows: Row[];
  nextCursor: any;
}

export interface Row {
  uuid: string;
  desc: string;
  fromLocationId: string;
  toLocationId: string;
  stationId: string;
  type: string;
  price: string;
  distance: number;
  duration: number;
  order: string;
  isActive: boolean;
  from: From;
  to: To;
}

export interface From {
  uuid: string;
  name: string;
}

export interface To {
  uuid: string;
  name: string;
}
