import { Application, Request, Response } from 'express';
import { version } from '../../package.json';


export class DebugRoute {
  public routes(app: Application): void {
    app.route('/debuginfo').get((req: Request, res: Response) => {
      try {
        const debugInfo: any = {
          apiversion: version,
          date_now: new Date(),
        };
        res.status(200).send(debugInfo);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }
}
