import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/landing/cart/cart.model';
import { CartService } from 'src/app/landing/cart/cart.service';
import { Entree } from '../../entree.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() entree!: Entree;
  @Input() index!: number;

  cart: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(entree: Entree) {
    entree = this.entree;
    this.cartService.addToOrder(entree);
  }

}
