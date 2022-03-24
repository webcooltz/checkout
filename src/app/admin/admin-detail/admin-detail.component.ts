import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { Preferences } from '../preferences.model';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit, OnDestroy {

  preferences!: Preferences;
  subscription!: Subscription;
  adminChangeSub!: Subscription;

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

  ngOnDestroy() {
      this.adminChangeSub.unsubscribe();
  }


}
