interface IUseCaseError {
  message: string;
}
/**
 * @param  {string} message
 */
export class UseCaseError implements IUseCaseError {
  public readonly message: string;
  /**
   * @param  {string} message
   */
  constructor(message: string) {
    this.message = message;
  }
}
