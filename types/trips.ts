export interface TripsModel {
  count: number;
  rows: Row[];
  nextCursor: any;
}

export interface Row {
  uuid: string;
  startDate: string;
  price: string;
  duration: string;
  route: Route;
  bus: Bus;
  availableSeatCount: number;
}

export interface Route {
  desc: string;
  type: string;
  fromLocationName: string;
  toLocationName: string;
}

export interface Bus {
  title: string;
  logoPath: string;
}
