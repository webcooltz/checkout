import { Component, OnInit } from '@angular/core';
import { Entree } from '../../menu/entree.model';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartInfo();
  }

}
