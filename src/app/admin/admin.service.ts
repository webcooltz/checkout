import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Preferences } from "./preferences.model";

@Injectable({
  providedIn:'root'
})
export class AdminService {

  preferences!: Preferences;

  // title: "Johnny's Steakhouse",
  //     logoImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F553%2F381%2Foriginal%2Fsteak-vector.jpg&f=1&nofb=1",
  //     colors:
  //       {
  //         primary: "#721121",
  //         secondary: "#E6AA68",
  //         tertiary: "#A5402D",
  //         fourth: "#C2B2B4",
  //         fifth: "#2176FF",
  //       }

  prefChanged = new Subject<Preferences>();

  constructor(private http: HttpClient) {}

  fetchPreferences() {
    this.http
      .get<Preferences>(
        'http://localhost:3000/admin'
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
        'http://localhost:3000/admin',
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
