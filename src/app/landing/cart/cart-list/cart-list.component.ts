import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cart!: Cart;

  checkoutPressed: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartInfo();
  }

  onCheckout() {
    this.cartService.checkout();
    this.checkoutPressed = true;
  }

}
