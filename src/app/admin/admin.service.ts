import { Injectable } from "@angular/core";
import { Preferences } from "./preferences.model";

@Injectable({
  providedIn:'root'
})
export class AdminSerivce {

  preferences: Preferences =
    {
      title: "Johnny's Steakhouse",
      logoImgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F553%2F381%2Foriginal%2Fsteak-vector.jpg&f=1&nofb=1",
      colors:
        {
          primary: "721121",
          secondary: "#E6AA68",
          tertiary: "#A5402D",
          fourth: "#C2B2B4",
          fifth: "#2176FF",
        }
    }

  fetchPreferences() {

  }

  getPreferences() {
    return this.preferences;
  }

  setPreferences() {

  }

}