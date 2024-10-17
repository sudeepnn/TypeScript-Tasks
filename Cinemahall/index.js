"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seats = [];
var reservations = [];
function initializeTheater(rows, seatsPerRow) {
    for (var row = 0; row < rows; row++) {
        var seatRow = [];
        for (var number = 1; number <= seatsPerRow; number++) {
            seatRow.push({ row: row, number: number, isBooked: false });
        }
        seats.push(seatRow);
    }
}
function displaySeating() {
    console.log("Theater Seating Arrangement:");
    seats.forEach(function (row, rowIndex) {
        var seatRow = row.map(function (seat) { return (seat.isBooked ? "[X]" : "[O]"); }).join(" ");
        console.log("Row ".concat(rowIndex + 1, ": ").concat(seatRow));
    });
}
function isSeatAvailable(row, number) {
    var seatRow = seats[row];
    if (!seatRow) {
        console.log("Invalid row number.");
        return false;
    }
    var seat = seatRow.find(function (s) { return s.number === number; });
    if (!seat) {
        console.log("Invalid seat number.");
        return false;
    }
    return !seat.isBooked;
}
function bookSeat(row, number, userName) {
    if (!isSeatAvailable(row, number)) {
        console.log("Seat is not available for booking.");
        return;
    }
    var seat = seats[row].find(function (s) { return s.number === number; });
    if (seat) {
        seat.isBooked = true;
        var reservation = {
            reservationId: reservations.length + 1,
            seat: seat,
            userName: userName
        };
        reservations.push(reservation);
        console.log("Seat booked successfully! Reservation ID: ".concat(reservation.reservationId));
    }
}
function cancelReservation(reservationId) {
    var reservationIndex = reservations.findIndex(function (r) { return r.reservationId === reservationId; });
    if (reservationIndex === -1) {
        console.log("Reservation not found.");
        return;
    }
    var reservation = reservations[reservationIndex];
    reservation.seat.isBooked = false;
    reservations.splice(reservationIndex, 1);
    console.log("Reservation cancelled successfully for seat: Row ".concat(reservation.seat.row + 1, ", Seat ").concat(reservation.seat.number));
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
