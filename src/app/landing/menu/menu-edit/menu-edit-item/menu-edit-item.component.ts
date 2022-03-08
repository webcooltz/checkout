import { Component, Input, OnInit } from '@angular/core';
import { Entree } from '../../entree.model';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-edit-item',
  templateUrl: './menu-edit-item.component.html',
  styleUrls: ['./menu-edit-item.component.css']
})
export class MenuEditItemComponent implements OnInit {

  // menu: Entree[] = [];

  @Input() entree!: Entree;
  @Input() index!: number;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // this.menu = this.menuService.getMenu();
  }

  editItem() {

  }

}
