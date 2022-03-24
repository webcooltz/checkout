import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../../admin/admin.service';
import { Preferences } from '../../admin/preferences.model';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  preferences!: Preferences;
  loggedIn = true;
  user!: User;
  adminChangeSub!: Subscription;

  // primaryColor!: string;

  constructor(private adminService: AdminService,
              private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getUser();

    this.preferences = this.adminService.fetchPreferences();

     this.adminChangeSub = this.adminService.prefChanged
      .subscribe(
        (preferences: Preferences) => {
          this.preferences = preferences;
        }
      )
  }

  getColor() {
    // this.primaryColor = this.preferences.colors.primary;
  }

  ngOnDestroy() {
    this.adminChangeSub.unsubscribe();
}

}
