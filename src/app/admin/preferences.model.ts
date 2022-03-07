import { Colors } from "./colors.model";

export class Preferences {
  title!: string;
  logoImgUrl!: string;
  colors!: Colors;

  constructor(title: string, logoImgUrl: string, colors: Colors) {
    this.title = title;
    this.logoImgUrl = logoImgUrl;
    this.colors = colors;
  }
}
