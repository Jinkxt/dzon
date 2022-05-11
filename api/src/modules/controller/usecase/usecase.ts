import { UseCase } from '../../../shared/core/usecase';
import { UseCaseError } from '../../../shared/core/errors-models';
import { Result, Fail } from '../../../shared/core/result';
import { ImpRepo } from 'modules/repo/implementation/impRepo';
import { EntitySet } from '../../domain';

interface DTO {
  query: string;
}

export class GetUseCase implements UseCase<DTO, Result<EntitySet, UseCaseError>> {
  constructor(private repo: ImpRepo) {}
  public async execute(data: DTO) {
    const resultOrError = await this.repo.get(data.query);
    if (resultOrError.isSuccess()) {
      return resultOrError;
    } else {
      const err = new UseCaseError(resultOrError.error);
      return new Fail<UseCaseError>(err);
    }
  }
}
