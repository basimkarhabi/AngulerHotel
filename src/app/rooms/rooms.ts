export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookRooms: number;
}

export interface RoomList {
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    roomNumber: number;
    rating: number;

}