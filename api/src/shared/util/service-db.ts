class ServiceDb {
  public get<T>(endpoint: string, i = 0, reqHeader = {}):Promise<T|string> {
    return new Promise((resolve,reject) => resolve("it work !"))
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
