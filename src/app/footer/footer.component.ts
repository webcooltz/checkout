import { Component, OnInit } from '@angular/core';
import { AdminSerivce } from '../admin/admin.service';
import { Preferences } from '../admin/preferences.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  preferences!: Preferences;

  constructor(private adminService: AdminSerivce) { }

  ngOnInit() {

    this.preferences = this.adminService.getPreferences();
  }

}
