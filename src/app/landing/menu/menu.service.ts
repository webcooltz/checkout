import { Injectable } from "@angular/core";
import { Entree } from "./entree.model";

import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class MenuService {

  menu: Entree[] = [];
  maxMenuId!: number;

  menuChanged = new Subject<Entree[]>();

  constructor(private http: HttpClient) {
    this.menu = [];
    this.maxMenuId = this.getMaxId();
  }

  fetchMenu() {
    this.http
      .get<Entree[]>(
        'http://localhost:3000/landing'
      )
      .subscribe(menu => {
        this.setMenu(menu);
      }
      ,(error: any) => {
        console.log(error);
      }
      );

      return this.menu.slice();
  }

  setMenu(menu: Entree[]) {
    this.menu = menu;
    this.menuChanged.next(this.menu);
  }

  storeMenu() {
    let menu = this.getMenu();
    this.http
      .put(
        'http://localhost:3000/landing',
        menu
        )
      .subscribe(response => {
      console.log(response)
    });
  }

  getMenu() {
    return this.menu.slice();
  }

  getMenuItem(id: string) {
    return this.menu[+id];
  }

  addMenuItem(newEntree: Entree) {
    if (!newEntree) {
      return;
    }
    this.maxMenuId++;
    newEntree.id = this.maxMenuId.toString();
    this.menu.push(newEntree);
    this.menuChanged.next(this.menu.slice());

    this.storeMenu();
  }

  updateMenu(originalEntree: Entree, newEntree: Entree) {
    if (!originalEntree) {
      return;
    }
    const pos = this.menu.indexOf(originalEntree);
    if (pos < 0) {
      return;
    }
    newEntree.id = originalEntree.id;
    this.menu[pos] = newEntree;
    this.menuChanged.next(this.menu.slice());

    this.storeMenu();
  }

  deleteMenuItem(entree: Entree) {
    if (!entree) {
      return;
    }
    const pos = this.menu.indexOf(entree);
    if (pos < 0) {
      return;
    }
    this.menu.splice(pos, 1);
    this.menuChanged.next(this.menu.slice());

    this.storeMenu();
  }

  getMaxId(): number {
    var maxId = 0;
    var currentId;
    for (var i = 0; i < this.menu.length; i++) {
      currentId = parseInt(this.menu[i].id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

}
