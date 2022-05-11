export type Result<T, E> = Success<T> | Fail<E>;
// export type AsyncResult<T, E> = Promise< Success<T> | Fail<E>>;

export class Success<T> {
  // private success = true;
  public value: T;
  constructor(value: any) {
    this.value = value;
  }
  isFail(): this is Fail<T> {
    return false;
  }
  isSuccess(): this is Success<T> {
    return true;
  }
}

export class Fail<T> {
  public error: T;
  constructor(error: T) {
    this.error = error;
  }
  isFail(): this is Fail<T> {
    return true;
  }
  isSuccess(): this is Success<T> {
    return false;
  }
}
