import { Component, OnInit } from '@angular/core';
import { AdminSerivce } from 'src/app/admin/admin.service';
import { Preferences } from 'src/app/admin/preferences.model';
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

  preferences!: Preferences;

  constructor(private cartService: CartService, private adminService: AdminSerivce) { }

  ngOnInit() {
    this.cart = this.cartService.getCartInfo();

    this.preferences = this.adminService.getPreferences();
  }

  onCheckout() {
    this.cartService.checkout();
    this.checkoutPressed = true;
  }

}
