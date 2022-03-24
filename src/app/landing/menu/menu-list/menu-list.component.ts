import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/admin/admin.service';
import { Entree } from '../entree.model';
import { MenuService } from '../menu.service';
import { Preferences } from 'src/app/admin/preferences.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu: Entree[] = [];

  private menuChangeSub!: Subscription;

  preferences!: Preferences;

  constructor(private menuService: MenuService, private adminService: AdminService) { }

  ngOnInit() {
    this.menu = this.menuService.fetchMenu();

    this.menuChangeSub = this.menuService.menuChanged
      .subscribe(
        (menu: Entree[]) => {
          this.menu = menu;
        }
      )

      this.preferences = this.adminService.getPreferences();
  }

  onReload() {
    this.menuService.fetchMenu();
  }

  ngOnDestroy() {
    this.menuChangeSub.unsubscribe();
  }

}
