import { Result, Success } from '../../../shared/core/result';

export class Product {
  public id: string;
  public img: string;
  public title: string;
  public desc: string;
  public bg: string;
  constructor(data: any) {
    this.id = data.id;
    this.img = data.img;
    this.title = data.title;
    this.desc = data.desc;
    this.bg = data.bg;
  }

  public static createFromRepoData(data: any): Result<Product, Error> {
    const product = new Product(data);
    return new Success<Product>(product);
  }
}
