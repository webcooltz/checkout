import { Entree } from "../menu/entree.model";

export class Cart {
  userId!: string;
  cartId!: string;
  cartItems!: Entree[];

  constructor(userId: string, cartId: string, cartItems: Entree[]) {
    this.userId = userId;
    this.cartId = cartId;
    this.cartItems = cartItems;
  }
}
