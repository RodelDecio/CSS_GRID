import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; 
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 40000,
      description: 'A high-performance laptop for all your needs.',
      image: 'https://www.brilliantnews.com/wp-content/uploads/2016/02/laptop.jpg', 
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 12000,
      description: 'A sleek smartphone with a powerful camera.',
      image: 'https://th.bing.com/th/id/OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj?rs=1&pid=ImgDetMain', 
    },
    {
      id: 3,
      name: 'Headphones',
      price: 4500,
      description: 'Noise-cancelling headphones for an immersive experience.',
      image: 'https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg', 
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 2500,
      description: 'A smartwatch to keep you connected on the go.',
      image: 'https://th.bing.com/th?id=OIP.cYdBmJQqdevpyDfe6p0mwwHaIv&w=230&h=271&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
    },
    {
      id: 5,
      name: 'Tablet',
      price: 41100,
      description: 'A versatile tablet perfect for work and play.',
      image: 'https://www.bing.com/th?id=OIP.Zk8F5CI1UKocMt2ZHM2EqAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
    },
    {
      id: 6,
      name: 'Camera',
      price: 19000,
      description: 'Capture stunning photos and videos with this camera.',
      image: 'https://th.bing.com/th/id/OIP.R_q-iteeJ9MORHSTbpewEwHaHa?rs=1&pid=ImgDetMain',
    }
  ];
}
