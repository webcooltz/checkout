import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin/admin.service';
import { Preferences } from '../admin/preferences.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  preferences!: Preferences;
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
