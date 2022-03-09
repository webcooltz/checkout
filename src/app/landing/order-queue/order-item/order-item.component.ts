import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart/cart.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order!: Cart;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
