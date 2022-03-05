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
    userId: '0',
    cartId: '0',
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

    // this.saveCart();
    }

  checkout() {
    // request to save the cart/order to the DB
    // then a web hook(?) to display on the admin side what orders they have
  }
}
