import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

//1-Interpoltation
export class RoomsComponent implements OnInit {
  //1-Interpoltation
  hotelName = "Orients Hotel"
  numberOfRooms = 10;
  hiddeRooms = false;
  selectedRoom!: | RoomList

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookRooms: 10,
  }

  roomList: RoomList[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux Room',
        amenities: 'Air Condition , Free Wifi , Tv ; Bathroom , Kitchen',
        price: 500,
        photos: "",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('15-Nov-2023'),
        rating: 4.5,

      },
      {
        roomNumber: 2,
        roomType: 'Single Room',
        amenities: 'Air Condition , Free Wifi , Tv ; Bathroom , Kitchen',
        price: 1000,
        photos: "",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('15-Nov-2023'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Doupple Room',
        amenities: 'Air Condition , Free Wifi , Tv ; Bathroom , Kitchen',
        price: 1500,
        photos: "",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('15-Nov-2023'),
        rating: 2.6,
      }

    ]
  }

  toggle() {

    this.hiddeRooms = !this.hiddeRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }
}
