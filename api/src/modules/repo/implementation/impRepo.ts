import { Repo } from '../repo';
import { Fail, Success } from '../../../shared/core/result';
import { RepoError } from '../../../shared/core/errors-models';
import {EntitySet} from '../../domain/entity-set'
import ServiceDb from '../../../shared/util/service-db';

export class ImpRepo implements Repo {
  private db = new ServiceDb();
  public async get(query: string) : Promise<Success<EntitySet> | Fail<RepoError>>{
    const url = ``;

    try {
      const res:EntitySet = await this.db.get<string>(decodeURI(url)).then(res=>  new EntitySet(res))
      return new Success<EntitySet>(res);
    } catch (err:any) {
      const msg = err.error?.message?.value ? err.error.message.value : 'API ERROR';
      const repoErr = new RepoError(msg, err);
      return new Fail<RepoError>(repoErr);
    }
  }

}


