export interface IApiError {
  status: number;
  message: string;
}

export class ApiError extends Error implements IApiError {
  public status: number;
  public message: string;
  constructor(status: number, message = 'Unexpected Error') {
    super(message);
    Object.setPrototypeOf(this, ApiError.prototype);
    this.status = status;
    this.message = message;
  }
  public toJSON() {
    return { message: this.message };
  }
}


