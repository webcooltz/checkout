import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from '../cart/cart.model';

@Pipe({
  name: 'cartFilter'
})
export class CartFilterPipe implements PipeTransform {

  transform(cart: Cart[], term: any) {
    let filteredCart: Cart[] = [];

    if (term && term.length > 0) {
      filteredCart = cart.filter(
        (cart:Cart) => cart.cartId.includes(term)
      );
    }

    if (filteredCart.length < 1) {
      return cart;
    }

    return filteredCart;
  }
}
