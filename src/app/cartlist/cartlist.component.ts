import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
}

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css'],
})
export class CartlistComponent {
  cart: CartItem[] = [
    {
      id: 1,
      name: 'Smartphone',
      quantity: 1,
      unitPrice: 12000,
      totalPrice: 12000,
      image: 'https://th.bing.com/th/id/OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj?rs=1&pid=ImgDetMain', 
    },
    {
      id: 2,
      name: 'Sneakers',
      quantity: 2,
      unitPrice: 3500,
      totalPrice: 7000,
      image: 'https://th.bing.com/th/id/OIP.QZ24h9uM0XPvz23agwDxOQHaHa?rs=1&pid=ImgDetMain', 
    },
    {
      id: 3,
      name: 'Headphones',
      quantity: 1,
      unitPrice: 4500,
      totalPrice: 4500,
      image: 'https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg', 
    },
    {
      id: 4,
      name: 'Laptop',
      quantity: 1,
      unitPrice: 40000,
      totalPrice: 40000,
      image: 'https://www.brilliantnews.com/wp-content/uploads/2016/02/laptop.jpg', 
    },
    {
      id: 5,
      name: 'Backpack',
      quantity: 2,
      unitPrice: 1500,
      totalPrice: 3000,
      image: 'https://th.bing.com/th?id=OIP.omnkFmSWoaGpVM6W3G95agHaIo&w=231&h=269&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
    },
    {
      id: 6,
      name: 'Smartwatch',
      quantity: 1,
      unitPrice: 2500,
      totalPrice: 2500,
      image: 'https://th.bing.com/th?id=OIP.cYdBmJQqdevpyDfe6p0mwwHaIv&w=230&h=271&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
    },
  ];

  
  get grandTotal(): number {
    return this.cart.reduce((total, item) => total + item.totalPrice, 0);
  }
}
