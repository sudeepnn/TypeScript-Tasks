
import { Seat } from "./seatinterface";
import { Reservation } from "./reservation";
  
 
 
  const seats: Seat[][] = [];
  const reservations: Reservation[] = [];
  
  function initializeTheater(rows: number, seatsPerRow: number): void {
    for (let row = 0; row < rows; row++) {
      const seatRow: Seat[] = [];
      for (let number = 1; number <= seatsPerRow; number++) {
        seatRow.push({ row, number, isBooked: false });
      }
      seats.push(seatRow);
    }
  }
  
  function displaySeating(): void {
    console.log("Theater Seating Arrangement:");
    seats.forEach((row, rowIndex) => {
      const seatRow = row.map(seat => (seat.isBooked ? "[X]" : "[O]")).join(" ");
      console.log(`Row ${rowIndex + 1}: ${seatRow}`);
    });
  }
  
  function isSeatAvailable(row: number, number: number): boolean {
    const seatRow = seats[row];
    if (!seatRow) {
      console.log("Invalid row number.");
      return false;
    }
    const seat = seatRow.find(s => s.number === number);
    if (!seat) {
      console.log("Invalid seat number.");
      return false;
    }
    return !seat.isBooked;
  }
  

  function bookSeat(row: number, number: number, userName: string): void {
    if (!isSeatAvailable(row, number)) {
      console.log("Seat is not available for booking.");
      return;
    }
    const seat = seats[row].find(s => s.number === number);
    if (seat) {
      seat.isBooked = true;
      const reservation: Reservation = {
        reservationId: reservations.length + 1,
        seat,
        userName
      };
      reservations.push(reservation);
      console.log(`Seat booked successfully! Reservation ID: ${reservation.reservationId}`);
    }
  }
  
 
  function cancelReservation(reservationId: number): void {
    const reservationIndex = reservations.findIndex(r => r.reservationId === reservationId);
    if (reservationIndex === -1) {
      console.log("Reservation not found.");
      return;
    }
    const reservation = reservations[reservationIndex];
    reservation.seat.isBooked = false;
    reservations.splice(reservationIndex, 1);
    console.log(`Reservation cancelled successfully for seat: Row ${reservation.seat.row + 1}, Seat ${reservation.seat.number}`);
  }

  initializeTheater(5, 10); 
  console.log("\nInitial Seating:");
  displaySeating();
  
  console.log("\nBooking a seat (Row 1, Seat 3) for John Doe:");
  bookSeat(0, 3, "John Doe"); 
  
  console.log("\nBooking a seat (Row 2, Seat 5) for Jane Smith:");
  bookSeat(1, 5, "Jane Smith"); 
  
  console.log("\nSeating after bookings:");
  displaySeating();
  
  console.log("\nCancelling reservation with ID 1:");
  cancelReservation(1); 
  
  console.log("\nSeating after cancellation:");
  displaySeating();
  