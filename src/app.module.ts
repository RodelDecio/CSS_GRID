import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './app/productlist/productlist.component';
import { UserlistComponent } from './app/userlist/userlist.component';
import { OrderlistComponent } from './app/orderlist/orderlist.component';
import { CartlistComponent } from './app/cartlist/cartlist.component';
import { WishlistComponent } from './app/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'productlist', component: ProductlistComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'orderlist', component: OrderlistComponent },
  { path: 'cartlist', component: CartlistComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '', redirectTo: '/productlist', pathMatch: 'full' }, 
];

@NgModule ({

    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes, {enableTracing: true}),
      FormsModule,
  
    ],


    declarations: [
        AppComponent,
        ProductlistComponent,
        UserlistComponent,
        OrderlistComponent,
        CartlistComponent,
        WishlistComponent,
    ],

    providers: [
  
    ],
  
    bootstrap: [
      AppComponent
  
    ]
  
  })
  
  export class AppModule {}