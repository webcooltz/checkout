import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminSerivce } from '../admin.service';
import { Preferences } from '../preferences.model';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  preferences!: Preferences;

  @ViewChild('f') aForm!: NgForm;

  constructor(private adminService: AdminSerivce) { }

  ngOnInit() {
    this.preferences = this.adminService.getPreferences();
  }

  savePreferences(form: NgForm) {
    const value = form.value;

    this.preferences.title = value.title;
    this.preferences.logoImgUrl = value.logoImgUrl;
    this.preferences.colors.primary = value.colorPrimary;
    this.preferences.colors.secondary = value.colorSecondary;
    this.preferences.colors.tertiary = value.colorTertiary;

    this.adminService.setPreferences(this.preferences);
  }

}
