import { Component } from '@angular/core';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: number;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: string;
  items: OrderItem[]; 
}

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
})
export class OrderlistComponent {
  orders: Order[] = [
    {
      orderId: 101,
      customerName: 'Alice Brown',
      orderDate: '2024-11-01',
      totalAmount: 6500, 
      status: 'Shipped',
      items: [
        { name: 'Laptop', quantity: 1, price: 6000 },
        { name: 'Mouse', quantity: 2, price: 250 },
      ],
    },
    {
      orderId: 102,
      customerName: 'Bob Smith',
      orderDate: '2024-11-02',
      totalAmount: 14500, 
      status: 'Processing',
      items: [
        { name: 'Smartphone', quantity: 1, price: 14000 },
        { name: 'Screen Protector', quantity: 1, price: 500 },
      ],
    },
    {
      orderId: 103,
      customerName: 'Cathy Johnson',
      orderDate: '2024-11-03',
      totalAmount: 4750, 
      status: 'Delivered',
      items: [
        { name: 'Headphones', quantity: 1, price: 4000 },
        { name: 'USB Cable', quantity: 2, price: 375 },
      ],
    },
    {
      orderId: 104,
      customerName: 'Daniel Lee',
      orderDate: '2024-11-04',
      totalAmount: 8200, 
      status: 'Canceled',
      items: [
        { name: 'Tablet', quantity: 1, price: 7500 },
        { name: 'Stylus Pen', quantity: 2, price: 350 },
      ],
    },
    {
      orderId: 105,
      customerName: 'Emily Davis',
      orderDate: '2024-11-05',
      totalAmount: 17000, 
      status: 'Shipped',
      items: [
        { name: 'Camera', quantity: 1, price: 15000 },
        { name: 'Memory Card', quantity: 1, price: 1000 },
        { name: 'Tripod', quantity: 1, price: 1000 },
      ],
    },
    {
      orderId: 106,
      customerName: 'Frank Miller',
      orderDate: '2024-11-06',
      totalAmount: 3500, 
      status: 'Processing',
      items: [
        { name: 'Bluetooth Speaker', quantity: 1, price: 3000 },
        { name: 'Charging Cable', quantity: 1, price: 500 },
      ],
    },
  ];
}
