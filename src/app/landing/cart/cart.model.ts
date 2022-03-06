import { Entree } from "../menu/entree.model";

export class Cart {
  userId!: string;
  cartId!: string;
  cartItems!: Entree[];
  cost!: number;

  constructor(userId: string, cartId: string, cartItems: Entree[], cost: number) {
    this.userId = userId;
    this.cartId = cartId;
    this.cartItems = cartItems;
    this.cost = cost;
  }
}
