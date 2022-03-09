import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart.model';

@Component({
  selector: 'app-order-queue',
  templateUrl: './order-queue.component.html',
  styleUrls: ['./order-queue.component.css']
})
export class OrderQueueComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
