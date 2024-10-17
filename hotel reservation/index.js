var hotelRooms = [];
var reservations = [];
function addHotelRoom(id, type, pricePerNight, isAvailable) {
    if (isAvailable === void 0) { isAvailable = true; }
    var room = { id: id, type: type, pricePerNight: pricePerNight, isAvailable: isAvailable };
    hotelRooms.push(room);
}
function listHotelRooms() {
    console.log("List of Hotel Rooms:");
    hotelRooms.forEach(function (room) {
        console.log("ID: ".concat(room.id, ", Type: ").concat(room.type, ", Price per Night: ").concat(room.pricePerNight, ", Available: ").concat(room.isAvailable));
    });
}
function isRoomAvailable(roomId) {
    var room = hotelRooms.find(function (r) { return r.id === roomId; });
    return room ? room.isAvailable : false;
}
function bookRoom(roomId, customerName, nights) {
    var room = hotelRooms.find(function (r) { return r.id === roomId; });
    if (!room) {
        console.log("Room not found.");
        return;
    }
    if (!room.isAvailable) {
        console.log("Room is not available.");
        return;
    }
    var totalCost = room.pricePerNight * nights;
    var reservation = {
        reservationId: reservations.length + 1,
        roomId: roomId,
        customerName: customerName,
        nights: nights,
        totalCost: totalCost
    };
    room.isAvailable = false;
    reservations.push(reservation);
    console.log("Room booked successfully! Reservation ID: ".concat(reservation.reservationId, ", Total Cost: $").concat(totalCost));
}
function calculateTotalCost(roomId, nights) {
    var room = hotelRooms.find(function (r) { return r.id === roomId; });
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
var totalCost = calculateTotalCost(2, 2);
if (totalCost !== null) {
    console.log("Total Cost: $".concat(totalCost));
}
