import { Reservation } from "./reservationinterface";
import { HotelRoom } from "./hotelinterface";
  
  
  
  const hotelRooms: HotelRoom[] = [];
  const reservations: Reservation[] = [];
  
 
  function addHotelRoom(id: number, type: string, pricePerNight: number, isAvailable: boolean = true): void {
    const room: HotelRoom = { id, type, pricePerNight, isAvailable };
    hotelRooms.push(room);
  }
  
  function listHotelRooms(): void {
    console.log("List of Hotel Rooms:");
    hotelRooms.forEach(room => {
      console.log(`ID: ${room.id}, Type: ${room.type}, Price per Night: ${room.pricePerNight}, Available: ${room.isAvailable}`);
    });
  }
  
  function isRoomAvailable(roomId: number): boolean {
    const room = hotelRooms.find(r => r.id === roomId);
    return room ? room.isAvailable : false;
  }
  
  function bookRoom(roomId: number, customerName: string, nights: number): void {
    const room = hotelRooms.find(r => r.id === roomId);
  
    if (!room) {
      console.log("Room not found.");
      return;
    }
  
    if (!room.isAvailable) {
      console.log("Room is not available.");
      return;
    }
  
    const totalCost = room.pricePerNight * nights;
  
    const reservation: Reservation = {
      reservationId: reservations.length + 1,
      roomId,
      customerName,
      nights,
      totalCost
    };
  
    
    room.isAvailable = false;
    reservations.push(reservation);
  
    console.log(`Room booked successfully! Reservation ID: ${reservation.reservationId}, Total Cost: $${totalCost}`);
  }
  
  function calculateTotalCost(roomId: number, nights: number): number | null {
    const room = hotelRooms.find(r => r.id === roomId);
    if (!room) {
      console.log("Room not found.");
      return null;
    }
    return room.pricePerNight * nights;
  }
  
  addHotelRoom(1, "single", 100);
  addHotelRoom(2, "double", 150);
  addHotelRoom(3, "suite", 300);
  
  console.log("Initial Room List:");
  listHotelRooms();
  
  console.log("\nChecking availability for Room ID 1:");
  console.log(isRoomAvailable(1) ? "Room is available." : "Room is not available.");
  
  console.log("\nBooking Room ID 1 for 3 nights for customer John Doe:");
  bookRoom(1, "John Doe", 3);
  
  console.log("\nRoom List after booking:");
  listHotelRooms();
  
  console.log("\nCalculating total cost for Room ID 2 for 2 nights:");
  const totalCost = calculateTotalCost(2, 2);
  if (totalCost !== null) {
    console.log(`Total Cost: $${totalCost}`);
  }
  