import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entree } from 'src/app/landing/menu/entree.model';
import { Cart } from '../../cart.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cart!: Cart;
  @Input() entree!: Entree;
  @Input() index!: number;

  cartItem!: Entree;

  subscription!: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cart = this.cartService.getCartInfo();
  }

  onRemoveItem() {
    this.cartService.deleteCartItem(this.entree);
  }

}
