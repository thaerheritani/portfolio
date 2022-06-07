export  class Traveau{
  id?: number;
  name?: string;
  image?: string;
  des?: string;
  constructor(id: number, name: string, image:string, des:string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.des = des;
  }
}
