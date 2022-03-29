import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Preferences } from "./preferences.model";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn:'root'
})
export class AdminService {

  preferences!: Preferences;

  prefChanged = new Subject<Preferences>();

  constructor(private http: HttpClient) {}

  fetchPreferences() {
    this.http
      .get<Preferences>(
        'http://localhost:3000/admin/preferences'
      )

      .subscribe(pref => {
        this.setPreferences(pref);
      }
      ,(error: any) => {
        console.log(error);
      }
      );

      return this.preferences;
  }

  setPreferences(preferences: Preferences) {
    this.preferences = preferences;
    this.prefChanged.next(this.preferences);
  }

  storePreferences() {
    let admin = this.getPreferences();
    this.http
      .put(
        'http://localhost:3000/admin/preferences',
        admin
        )
      .subscribe(response => {
      console.log(response)
    });
  }

  getPreferences() {
    return this.preferences;
  }

  updatePreferences(newPref: Preferences) {
    if (!newPref) {
      return;
    }

    this.preferences = newPref;
    this.prefChanged.next(this.preferences);

    this.storePreferences();
  }

}
