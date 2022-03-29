import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Entree } from '../../entree.model';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-edit-item',
  templateUrl: './menu-edit-item.component.html',
  styleUrls: ['./menu-edit-item.component.css']
})
export class MenuEditItemComponent implements OnInit {

  menu!: Entree[];

  @Input() entree!: Entree;
  @Input() index!: number;

  id!: string;

  constructor(private menuService: MenuService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.menu = this.menuService.fetchMenu();

  }

  // editItem() {

  // }

  onDelete() {
    this.menuService.deleteMenuItem(this.entree);
    // this.router.navigate([''], {relativeTo: this.route});
  }

  onSaveEntree(menu: Entree[]) {
    this.menuService.setMenu(menu);
  }

}
