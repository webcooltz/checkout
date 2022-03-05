import { Component, OnInit } from '@angular/core';
import { Entree } from '../entree.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu: Entree[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

  ngOnDestroy(): void {

  }

}
