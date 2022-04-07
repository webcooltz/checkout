// import { Colors } from "./colors.model";

export class Preferences {
  title!: string;
  logoImgUrl!: string;
  primaryColor!: string;
  secondaryColor!: string;
  tertiaryColor!: string;
  id!: string;

  constructor(title: string, logoImgUrl: string, primaryColor: string, secondaryColor: string, tertiaryColor: string, id: string) {
    this.title = title;
    this.logoImgUrl = logoImgUrl;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.tertiaryColor = tertiaryColor;
    this.id = id;
  }
}
