import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Preferences } from "./preferences.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class AdminService {

  preferences!: Preferences;
  preferencesArray: Preferences[] = [];

  prefChanged = new Subject<Preferences>();

  constructor(private http: HttpClient) {}

  fetchPreferences() {
    this.http
      .get<Preferences>
        (
          'http://localhost:3000/admin/preferences'
        )
      .subscribe(transformedPref => {
        this.setPreferences(transformedPref);
      }
      ,(error: any) => {
        console.log(error);
      }
      );

      return this.preferences;
  }

  // fetchPreferences() {
  //   this.http
  //     .get<{ message: string; pref: Preferences[] }>
  //       (
  //         'http://localhost:3000/admin/preferences'
  //       )
  //     .pipe(map((pref) => {
  //       return pref.pref.map(pref => {
  //         return {
  //           title: pref.title,
  //           logoImgUrl: pref.logoImgUrl,
  //           primaryColor: pref.primaryColor,
  //           secondaryColor: pref.secondaryColor,
  //           tertiaryColor: pref.tertiaryColor,
  //           id: pref.id
  //         }
  //       });
  //     }))
  //     .subscribe(transformedPref => {
  //       this.setPreferences(transformedPref);
  //     }
  //     ,(error: any) => {
  //       console.log(error);
  //     }
  //     );

  //     return this.preferences;
  // }

  setPreferences(preferences: Preferences) {
    this.preferences = preferences;
    console.log("pref: " + preferences);
    console.log("pref var: " + this.preferences);
    this.prefChanged.next(this.preferences);
  }

  // storePreferences() {
  //   let admin = this.getPreferences();
  //   this.http
  //     .put(
  //       'http://localhost:3000/admin/preferences',
  //       admin
  //       )
  //     .subscribe(response => {
  //     console.log(response)
  //   });
  // }

  getPreferences() {
    return this.preferences;
  }

  updatePreferences(newPref: Preferences) {
    if (!newPref) {
      return;
    }

    this.preferences = newPref;
    this.prefChanged.next(this.preferences);

    // this.storePreferences();
  }

}
