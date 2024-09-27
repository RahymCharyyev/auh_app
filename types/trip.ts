export interface TripModel {
  uuid: string;
  startDate: string;
  price: string;
  duration: string;
  route: Route;
  bus: Bus;
  seats: Seat[];
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
  seatCount: number;
}

export interface Seat {
  uuid: string;
  number: number;
  order: number;
  isSeat: boolean;
  status:
    | 'available'
    | 'processing'
    | 'notAvailable'
    | 'booked_cashier'
    | 'booked_admin';
}
