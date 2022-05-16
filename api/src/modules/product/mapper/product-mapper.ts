import { Product } from '../domain';
export interface ProductsDTO {
  id: string;
  img: string;
  [key: string]: string;
}

export class ProductMap {
  public static toDTOList(data: any): ProductsDTO {
    const productsDto = ProductMap.createEmptyDTO();
    for (const orderkey in data) {
      if (productsDto.hasOwnProperty(orderkey)) {
        productsDto[orderkey] = data[orderkey];
      }
    }
    return productsDto;
  }

  public static toDomain(data: any): Product {
    return new Product(data);
  }

  private static createEmptyDTO(): ProductsDTO {
    return {
      id: '',
      img: '',
    };
  }
}
