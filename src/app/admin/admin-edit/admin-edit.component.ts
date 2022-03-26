import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { Preferences } from '../preferences.model';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit, OnDestroy {

  preferences!: Preferences;
  adminChangeSub!: Subscription;
  @ViewChild('f') aForm!: NgForm;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.preferences = this.adminService.fetchPreferences();

    this.adminChangeSub = this.adminService.prefChanged
      .subscribe(
        (preferences: Preferences) => {
          this.preferences = preferences;
        }
      )
  }

  savePreferences(form: NgForm) {
    const value = form.value;

    this.preferences.title = value.title;
    this.preferences.logoImgUrl = value.logoImgUrl;
    this.preferences.primaryColor = value.colorPrimary;
    this.preferences.secondaryColor = value.colorSecondary;
    this.preferences.tertiaryColor = value.colorTertiary;

    this.adminService.updatePreferences(this.preferences);
  }

  ngOnDestroy() {
    this.adminChangeSub.unsubscribe();
}

}
