import { ProductRepo } from '../repo';
import ServiceDb from '../../../../shared/util/service-db';
import { Fail, Success } from '../../../../shared/core/result';
import { RepoError } from '../../../../shared/core/errors-models';
import { delay } from '../../../../shared/util/function';
import { ProductMap, ProductsDTO } from '../../mapper/product-mapper';
import { Product } from '../../domain';
import { popularProducts, sliderItems } from '../../../../shared/util/consts';

export class ImpProductRepo implements ProductRepo {
  private db = new ServiceDb();
  public async getProducts(): Promise<Success<Product[]> | Fail<RepoError>> {
    const url = ``;

    try {
      // await delay(2000, popularProducts);
      const res: any[] = await this.db.get<any[]>(decodeURI(url), sliderItems);

      return new Success<Product[]>(
        res.map((product) => ProductMap.toDomain(product))
      );
    } catch (err: any) {
      const msg = err.error?.message?.value
        ? err.error.message.value
        : 'API ERROR';
      const repoErr = new RepoError(msg, err);
      return new Fail<RepoError>(repoErr);
    }
  }

  public async getPopulerProducts(): Promise<
    Success<ProductsDTO[]> | Fail<RepoError>
  > {
    const url = ``;

    try {
      const res: any[] = await this.db.get<any[]>(
        decodeURI(url),
        popularProducts
      );

      return new Success<ProductsDTO[]>(
        res.map((product) => ProductMap.toDTOList(product))
      );
    } catch (err: any) {
      const msg = err.error?.message?.value
        ? err.error.message.value
        : 'API ERROR';
      const repoErr = new RepoError(msg, err);
      return new Fail<RepoError>(repoErr);
    }
  }
}
