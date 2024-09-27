export interface RefundModel {
  trip: Trip;
  order: Order;
}

export interface Trip {
  uuid: string;
  startDate: string;
  price: string;
  duration: string;
  route: Route;
  bus: Bus;
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

export interface Order {
  uuid: string;
  createdAt: string;
  deletedAt: any;
  createdById: string;
  tickets: Ticket[];
}

export interface Ticket {
  uuid: string;
  code: string;
  orderId: string;
  tripId: string;
  seatId: string;
  ageId: string;
  status: string;
  totalPrice: number;
  phone: string;
  fullName: string;
  passportNo: string;
  gender: any;
  age: Age;
  seat: Seat;
}

export interface Age {
  uuid: string;
  title: string;
  coefficientInPercent: number;
  isActive: boolean;
  createdAt: string;
  createdById: any;
}

export interface Seat {
  number: number;
}
