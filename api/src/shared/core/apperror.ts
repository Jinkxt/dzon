import { UseCaseError } from './usecase-error';
import { Fail } from './fail';

export namespace AppError {
  /**
   * @param  {any} err
   */
  export class UnexpectedError extends Fail<UseCaseError> {
    /**
     * @param  {any} err
     */
    public constructor(err: any) {
      super(err);
      console.log(`[AppError]: An unexpected error occurred`);
      console.error(err);
    }

    /**
     * @param  {any} err
     * @return {UnexpectedError} err
     */
    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
}
