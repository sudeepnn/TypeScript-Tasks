import { Seat } from "./seatinterface";

export  interface Reservation {
    reservationId: number;
    seat: Seat;
    userName: string;
  }