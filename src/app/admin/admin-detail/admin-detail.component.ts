import { Component, OnInit } from '@angular/core';
import { AdminSerivce } from '../admin.service';
import { Preferences } from '../preferences.model';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  preferences!: Preferences;

  constructor(private adminService: AdminSerivce) { }

  ngOnInit() {
    this.preferences = this.adminService.getPreferences();

  }




}
