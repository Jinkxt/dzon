import { ProductRepo } from '../repo';
import ServiceDb from '../../../../shared/util/service-db';
import { Fail, Success } from '../../../../shared/core/result';
import { RepoError } from '../../../../shared/core/errors-models';
import { delay } from '../../../../shared/util/function';
import { ProductMap, ProductsDTO } from '../../mapper/product-mapper';

export class ImpProductRepo implements ProductRepo {
  private db = new ServiceDb();
  public async getProducts(): Promise<
    Success<ProductsDTO[]> | Fail<RepoError>
  > {
    const url = ``;

    try {
      // await delay(2000, popularProducts);
      const res: any[] = await this.db.get<any[]>(decodeURI(url));

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
