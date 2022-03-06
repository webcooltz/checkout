import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entree } from '../entree.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

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

  onReload() {
    this.menuService.fetchMenu();
  }

  ngOnDestroy(): void {

  }

}
