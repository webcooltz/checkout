import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  term!: string;

  orders: Cart[] = [
    {
      cartId: '0',
      userId: '0',
      cost: 22,
      timeOrdered!: new Date(),
      timeReady: new Date(),
      cartItems: [
        {
            id: "0",
            name: "chicken",
            imgUrl: "../assets/images/chicken.jpg",
            description: "a nice chicken breast",
            price: 9.99
          }, {
            id: "1",
            name: "steak",
            imgUrl: "../assets/images/steak.jpg",
            description: "a nice juicy steak",
            price: 10.99
          }
      ]
    }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.orders = this.cartService.fetchOrders();
  }

  search(value: string) {
    this.term = value;
  }

}
