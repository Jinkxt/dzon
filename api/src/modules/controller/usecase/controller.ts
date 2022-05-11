import { GetUseCase } from './usecase';
import { Request, Response } from 'express';
import { BaseController } from '../../../shared/core/base-controller';
import { ControllerError } from '../../../shared/core/errors-models';

export class GetController extends BaseController {
  constructor(private useCase: GetUseCase) {
    super();
  }
  protected async executeImpl(req: Request, res: Response): Promise<void> {
    const query = req.url.indexOf('?') > 0 ? req.url.slice(req.url.indexOf('?')) : '';
    const resultOrError = await this.useCase.execute({  query });
    if (resultOrError.isSuccess()) {
      this.ok(res, resultOrError.value);
    } else {
      const err = new ControllerError(resultOrError.error);
      this.fail(res, err);
    }
  }
}
