import { Component, OnInit } from '@angular/core';
import { AdminSerivce } from '../admin/admin.service';
import { Preferences } from '../admin/preferences.model';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  preferences!: Preferences;
  loggedIn = true;
  user!: User;

  // primaryColor!: string;

  constructor(private adminService: AdminSerivce,
              private userService: UserService) { }

  ngOnInit() {
    this.preferences = this.adminService.fetchPreferences();

    this.user = this.userService.getUser();
  }

  getColor() {
    // this.primaryColor = this.preferences.colors.primary;
  }

}
