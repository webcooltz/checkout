export class Entree {
  name!: string;
  description!: string;
  id!: string;
  imgUrl!: string;
  price!: number;

  constructor(name: string, description: string, id: string, imgUrl: string, price: number){
    this.name = name;
    this.description = description;
    this.id = id;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}
