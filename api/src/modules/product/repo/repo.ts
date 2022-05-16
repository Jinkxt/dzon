import { RepoError } from '../../../shared/core/errors-models';
import { Result } from '../../../shared/core/result';
import { Product } from '../domain';
import { ProductsDTO } from '../mapper/product-mapper';

export interface ProductRepo {
  getProducts(): Promise<Result<Product[], RepoError>>;
  getPopulerProducts(): Promise<Result<ProductsDTO[], RepoError>>;
}
