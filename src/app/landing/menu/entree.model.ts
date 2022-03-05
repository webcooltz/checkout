export class Entree {
  name!: string;
  description!: string;
  id!: string;
  imgUrl!: string;

  constructor(name: string, description: string, id: string, imgUrl: string){
    this.name = name;
    this.description = description;
    this.id = id;
    this.imgUrl = imgUrl;
  }
}
