import { Component } from '@angular/core';

interface WishlistItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  wishlist: WishlistItem[] = [
    {
      id: 1,
      name: 'Smartphone',
      category: 'Electronics',
      price: 12000,
      image: 'https://th.bing.com/th/id/OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj?rs=1&pid=ImgDetMain', 
    },
    {
      id: 2,
      name: 'Sneakers',
      category: 'Fashion',
      price: 3500,
      image: 'https://th.bing.com/th/id/OIP.QZ24h9uM0XPvz23agwDxOQHaHa?rs=1&pid=ImgDetMain', 
    },
    {
      id: 3,
      name: 'Headphones',
      category: 'Accessories',
      price: 4500,
      image: 'https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg', 
    },
    {
      id: 4,
      name: 'Backpack',
      category: 'Travel',
      price: 2200,
      image: 'https://th.bing.com/th?id=OIP.omnkFmSWoaGpVM6W3G95agHaIo&w=231&h=269&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', 
    },

    {
      id: 5,
      name: 'Laptop',
      category: 'Electronics',
      price: 40000,
      image: 'https://www.brilliantnews.com/wp-content/uploads/2016/02/laptop.jpg', 
    },
    {
      id: 6,
      name: 'Smartwatch',
      category: 'Accessories',
      price: 2500,
      image: 'https://th.bing.com/th?id=OIP.cYdBmJQqdevpyDfe6p0mwwHaIv&w=230&h=271&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    },
  ];
}
