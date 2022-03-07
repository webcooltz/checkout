import { Component, OnInit } from '@angular/core';
import { AdminSerivce } from '../admin/admin.service';
import { Preferences } from '../admin/preferences.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  preferences!: Preferences;

  // primaryColor!: string;

  constructor(private adminService: AdminSerivce) { }

  ngOnInit() {
    this.preferences = this.adminService.getPreferences();
  }

  getColor() {
    // this.primaryColor = this.preferences.colors.primary;
  }

}
