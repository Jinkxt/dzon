import { Response } from 'express';
import { IHttpResponse, IHttpRequest } from '../util/types';

export class BaseRoute {
  protected ok(res: Response, httpResponse: IHttpResponse) {
    res.set(httpResponse.headers);
    res.type('json');
    res.status(httpResponse.statusCode).send(httpResponse.body);
  }
  protected fail(res: Response) {
    res.status(500).send({ error: 'An unkown error occurred.' });
  }
  protected async callController(
    res: Response,
    controller: Function,
    httpRequest?: IHttpRequest
  ) {
    try {
      let httpResponse;
      if (httpRequest) {
        httpResponse = await controller(httpRequest);
      } else {
        httpResponse = await controller();
      }
      this.ok(res, httpResponse);
    } catch (error) {
      this.fail(res);
    }
  }
}
