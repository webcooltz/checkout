import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Entree } from "../menu/entree.model";
import { Cart } from "./cart.model";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class CartService {

  cart: Cart =
    {
      cartId: '0',
      userId: '0',
      cost: 22,
      timeOrdered!: new Date(),
      timeReady: new Date(),
      cartItems: [
      ]
    };


  orders: Cart[] = [];

  cartItems = this.cart.cartItems;

  cartChanged = new Subject<Entree[]>();

  constructor(private http: HttpClient) {}

  fetchOrders() {
    this.http
      .get<Cart[]>(
        'https://checkout-17e0b-default-rtdb.firebaseio.com/orders.json'
      )
      .subscribe(orders => {
        this.setCart(orders);
      }
      ,(error: any) => {
        console.log(error);
      }
      );

      console.log(this.orders);

      return this.orders;

  }

  setCart(orders: Cart[]) {
    this.orders = orders;
  }

  storeCart() {
    let cart = this.getCartInfo();
    this.http
      .put(
        'https://checkout-17e0b-default-rtdb.firebaseio.com/orders.json',
        cart
        )
      .subscribe(response => {
      console.log(response)
    });
  }

  getCartItems() {
    return this.cartItems.slice();
  }

  getCartItem(id: string) {
    return this.cart.cartItems[+id];
  }

  getCartInfo() {
    return this.cart;
  }

  addToOrder(entree: Entree) {
    this.cart.cartItems.push(entree);

    this.cart.cost = this.calculateTotal();
  }

  deleteCartItem(cartItem: Entree) {

    if (!cartItem) {
      return;
    }
    const pos = this.cart.cartItems.indexOf(cartItem);
    if (pos < 0) {
        return;
    }
    this.cart.cartItems.splice(pos, 1);

    this.cartChanged.next(this.cart.cartItems.slice());

    this.cart.cost = this.calculateTotal();

    // this.saveCart();
    }

  calculateTotal() {
    var total = 0;
    for (var i = 0; i < this.cartItems.length; i++) {
      total += this.cartItems[i].price;
    }
    return total;
  }

  checkout() {

    this.cart = new Cart(this.cart.userId, this.cart.cartId, this.cartItems, this.cart.cost, this.cart.timeOrdered, this.cart.timeReady);

    this.storeCart();

    console.log(this.cartItems.slice());
    console.log(this.cart.cost);
  }
}
