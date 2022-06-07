export class Services{
  id?: number;
  image?: string;
  p?: string;

  constructor(id: number, image: string, p: string) {
    this.id = id;
    this.image = image;
    this.p = p;
  }
}
