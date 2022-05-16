import { GetPopulerProductsUseCase } from './usecase';
import { Request, Response } from 'express';
import { BaseController } from '../../../shared/core/base-controller';
import { ControllerError } from '../../../shared/core/errors-models';

export class GetPopulerProductsController extends BaseController {
  constructor(private useCase: GetPopulerProductsUseCase) {
    super();
  }
  protected async executeImpl(req: Request, res: Response): Promise<void> {
    const resultOrError = await this.useCase.execute();
    if (resultOrError.isSuccess()) {
      this.ok(res, resultOrError.value);
    } else {
      const err = new ControllerError(resultOrError.error);
      this.fail(res, err);
    }
  }
}
