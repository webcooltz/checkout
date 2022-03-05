import { Injectable } from "@angular/core";
import { Entree } from "./entree.model";

@Injectable({
  providedIn:'root'
})
export class MenuService {

  menu: Entree[] = [
    {
      name: 'chicken',
      description: 'a chicken breast',
      id: '0',
      imgUrl: '.../assets/images'
    },
    {
      name: 'steak',
      description: 'a steak',
      id: '1',
      imgUrl: '.../assets/images'
    }
  ];

  constructor() {}

  getMenu() {
    return this.menu.slice();
  }

  getMenuItem(id: string) {
    return this.menu[+id];
  }

  // addMenuItem() {

  // }

  // updateMenu() {

  // }

  // deleteMenuItem() {

  // }

}
