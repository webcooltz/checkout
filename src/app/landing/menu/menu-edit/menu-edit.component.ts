import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entree } from '../entree.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  menu: Entree[] = [];

  private menuChangeSub!: Subscription;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.fetchMenu();

    this.menuChangeSub = this.menuService.menuChanged
      .subscribe(
        (menu: Entree[]) => {
          this.menu = menu;
        }
      )
  }

  onSetMenu(menu: Entree[]) {
    this.menuService.setMenu(menu);
  }

}
