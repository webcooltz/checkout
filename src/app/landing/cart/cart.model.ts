import { Entree } from "../menu/entree.model";

export class Cart {
  userId!: string;
  cartId!: string;
  cartItems!: Entree[];
  cost!: number;
  timeOrdered!: Date;
  timeReady!: Date;

  constructor(userId: string, cartId: string, cartItems: Entree[], cost: number, timeOrdered: Date, timeReady: Date) {
    this.userId = userId;
    this.cartId = cartId;
    this.cartItems = cartItems;
    this.cost = cost;
    this.timeOrdered = timeOrdered;
    this.timeReady = timeReady;
  }
}
