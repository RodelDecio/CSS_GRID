import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string; 
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Rodel Decio',
      email: 'rodeldecio@gmail.com',
      phone: '09121212123',
      address: '123 Caloocan',
      image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png', 
     },
     {
      id: 2,
      name: 'Kate Ponsaran',
      email: 'kateponsaran@gmail.com',
      phone: '09232323234',
      address: '456 Taguig',
      image: 'https://i.pinimg.com/736x/54/8a/65/548a659c2b06a877516d3c998f5b0939.jpg', 
    },
    {
      id: 3,
      name: 'Mark Calagos',
      email: 'markcalagos@gmail.com',
      phone: '09797878745',
      address: '789 Makati',
      image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png', 
    },
    {
      id: 4,
      name: 'Rica Marcus',
      email: 'ricamarcus@gmail.com',
      phone: '09362654325',
      address: '101 Quezon',
      image: 'https://i.pinimg.com/736x/54/8a/65/548a659c2b06a877516d3c998f5b0939.jpg',
    },
    {
      id: 5,
      name: 'Charlie Green',
      email: 'charliegreen@example.com',
      phone: '096969326510',
      address: '321 Pasig',
      image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png', 
    },
    {
      id: 6,
      name: 'Geraldine White',
      email: 'Dindinwhite@example.com',
      phone: '093612110124',
      address: '654 Laguna',
      image: 'https://i.pinimg.com/736x/54/8a/65/548a659c2b06a877516d3c998f5b0939.jpg', 
    },
  ];
}
