import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
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
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '555-1234',
      address: '123 Main St, Springfield',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '555-5678',
      address: '456 Elm St, Springfield',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-8765',
      address: '789 Oak St, Springfield',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      phone: '555-4321',
      address: '101 Pine St, Springfield',
    },
  ];
}
