import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Entree } from 'src/app/landing/menu/entree.model';
import { MenuService } from 'src/app/landing/menu/menu.service';

@Component({
  selector: 'app-menu-admin-edit',
  templateUrl: './menu-admin-edit.component.html',
  styleUrls: ['./menu-admin-edit.component.css']
})
export class MenuAdminEditComponent implements OnInit {

  id!: string;
  entree!: Entree;
  originalEntree!: Entree;
  subscription!: Subscription;
  editMode: boolean = false;
  @ViewChild('f') mForm!: NgForm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private menuService: MenuService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {

          this.id = params['id'];

          if (this.id == undefined || this.id == null) {
            this.editMode = false;
            return;
          }

          this.originalEntree = this.menuService.getMenuItem(this.id);

          if (!this.originalEntree) {
            return;
          }

          this.editMode = true;
          this.entree = JSON.parse(JSON.stringify(this.originalEntree));
        }
      );

  }

  onSave(form: NgForm) {
    const value = form.value;
    const newEntree = new Entree(value.name, value.description, '', value.imgUrl, value.price);
    if (this.editMode == true) {
      this.menuService.updateMenu(this.originalEntree, newEntree);
    } else {
      this.menuService.addMenuItem(newEntree);
    }

    this.editMode = false;
    form.reset();
    this.router.navigate([''], {relativeTo: this.route});
  }

  onCancel() {
    this.editMode = false;
    this.mForm.reset();
    this.router.navigate([''], {relativeTo: this.route});
  }

}
