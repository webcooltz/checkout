import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Entree } from "../menu/entree.model";
import { Cart } from "./cart.model";

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

  cartItems = this.cart.cartItems;

  cartChanged = new Subject<Entree[]>();

  saveCart() {

  }

  fetchCart() {

  }

  getCartItems() {
    // for (var i = 0; i < this.cartItems.length; i++) {
    //   if ()
    // }

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


    console.log(this.cartItems.slice());
    console.log(this.cart.cost);
  }
}
