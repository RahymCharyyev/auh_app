export interface TicketModel {
  success: boolean;
  data: Ticket[];
}

export interface Ticket {
  uuid: string;
  code: string;
  orderId: string;
  tripId: string;
  seatId: string;
  ageId: string;
  status: string;
  totalPrice: string;
  phone: string;
  fullName: string;
  passportNo: string;
  gender: any;
  seat: {
    number: number;
  };
}
