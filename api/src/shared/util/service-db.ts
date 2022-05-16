import { delay } from './function';

class ServiceDb {
  public get<T>(
    endpoint: string,
    dummy: any = '',
    i = 0,
    reqHeader = {}
  ): Promise<T> {
    return new Promise((resolve, reject) => resolve(delay(2000, dummy)));
  }
  public post<T>(endpoint: string, data: string, i = 0) {
    return Promise.reject({});
  }

  public patch<T>(endpoint: string, data: string, i = 0) {
    return Promise.reject({});
  }

  public delete<T>(endpoint: string, data: string, i = 0) {
    return Promise.reject({});
  }
  private login() {
    return {};
  }
}

export default ServiceDb;
