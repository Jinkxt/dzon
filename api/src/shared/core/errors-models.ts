export class RepoError extends Error {
  public originalError: any;
  constructor(public message: string, oriError?: any) {
    super(message);
    this.originalError = oriError;
  }
}

export class UseCaseError extends Error {
  public repoError: any;
  constructor(private err: RepoError | Error) {
    super(err.message);
    if (err instanceof RepoError) this.repoError = err.originalError;
  }
}

export class ControllerError extends Error {
  public crtlError: any;
  constructor(private err: UseCaseError) {
    super(err.message);
    this.crtlError = err.repoError;
  }
}
