import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../cart/cart.model';

@Component({
  selector: 'app-order-history-item',
  templateUrl: './order-history-item.component.html',
  styleUrls: ['./order-history-item.component.css']
})
export class OrderHistoryItemComponent implements OnInit {

  @Input() order!: Cart;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
