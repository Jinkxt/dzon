import { EntitySet } from '../domain';
import { RepoError } from '../../shared/core/errors-models';
import { Result } from '../../shared/core/result';

export interface Repo {
  get(query: string): Promise<Result<EntitySet, RepoError>>;
}
