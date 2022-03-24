import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
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

  minutesToAdd: number = 20;
  currentDate: Date = new Date();
  futureDate = new Date(this.currentDate.getTime() + this.minutesToAdd * 60000);
  futureDate2 = new Date(this.futureDate.getTime() + this.minutesToAdd * 60000);
  futureDate3 = new Date(this.futureDate2.getTime() + this.minutesToAdd * 60000);

  times: Date[] = [
      this.futureDate,
      this.futureDate2,
      this.futureDate3
  ];

  constructor(private cartService: CartService, private adminService: AdminService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartInfo();

    this.preferences = this.adminService.getPreferences();
  }

  onCheckout() {
    this.cartService.checkout();
    this.checkoutPressed = true;
  }

}
