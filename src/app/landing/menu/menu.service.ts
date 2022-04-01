import { Injectable } from "@angular/core";
import { Entree } from "./entree.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  // ----------------- READ ----------------------
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

  getMenuItem(id: string) {
    this.fetchMenu();
    return this.menu[+id];
  }

  // --------------- CREATE ------------------
  addMenuItem(newEntree: Entree) {
    if (!newEntree) {
      return;
    }
    newEntree.id = '';
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    this.http
      .post<{message: string, entree: Entree}>
      (
        'http://localhost:3000/menu-admin/new',
        newEntree,
        { headers: headers }
      )
      .subscribe(responseData => {
      console.log(responseData);
      this.menu.push(responseData.entree);
      // this.sortAndSend();
    });

    this.menuChanged.next(this.menu.slice());
  }

  // ----------------- UPDATE ------------------------
  updateMenu(originalEntree: Entree, newEntree: Entree) {
    if (!originalEntree || !newEntree) {
      return;
    }
    const pos = this.menu.findIndex(e => e.id === originalEntree.id);
    if (pos < 0) {
      return;
    }

    newEntree.id = originalEntree.id;
    // newEntree._id = originalEntree._id;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http
      .put
        (
          'http://localhost:3000/menu-admin/' + originalEntree.id,
          newEntree, {headers: headers}
        )
      .subscribe(response => {
      console.log(response);
      this.menu[pos] = newEntree;
      // this.sortAndSend();
    });

  this.menuChanged.next(this.menu.slice());
  }

  // ------------------- DELETE -----------------------
  deleteMenuItem(entree: Entree) {
    if (!entree) {
      return;
    }
    const pos = this.menu.findIndex(e => e.id === entree.id);
    if (pos < 0) {
      return;
    }

    this.http
      .delete
        (
          'http://localhost:3000/menu-admin/' + entree.id
        )
      .subscribe(response => {
      console.log(response);
      this.menu.splice(pos, 1);
      // this.sortAndSend();
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
