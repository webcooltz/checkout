import { Injectable } from "@angular/core";
import { Entree } from "./entree.model";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators'

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
      .get<{ message: string; menu: Entree[] }>(
        'http://localhost:3000/landing/menu'
      )
      .pipe(map((menu) => {
        return menu.menu.map(menu => {
          return {
            name: menu.name,
            description: menu.description,
            imgUrl: menu.imgUrl,
            price: menu.price,
            id: menu.id
          }
        });
      }))
      .subscribe(transformedMenu => {
        this.setMenu(transformedMenu);
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

  // getMenu() {
  //   return this.menu.slice();
  // }

  getMenuItem(id: string) {
    return this.menu[+id];
  }

  addMenuItem(newEntree: Entree) {
    if (!newEntree) {
      return;
    }

    this.http
      .post<Entree>(
        'http://localhost:3000/menu-admin/new',
        newEntree
        )
      .subscribe(response => {
      console.log(response)
    });

    this.menuChanged.next(this.menu.slice());
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

    this.http
      .put<Entree>(
        'http://localhost:3000/menu-admin/:id',
        newEntree
        )
      .subscribe(response => {
      console.log(response)
    });

  this.menuChanged.next(this.menu.slice());
  }

  deleteMenuItem(entree: Entree) {
    if (!entree) {
      return;
    }

    // const pos = this.menu.indexOf(entree);

    // if (pos < 0) {
    //   return;
    // }

    // this.menu.splice(pos, 1);

    this.http
      .delete(
        'http://localhost:3000/menu-admin/:id'
        )
      .subscribe(response => {
      console.log(response)
    });

    this.menuChanged.next(this.menu.slice());
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
