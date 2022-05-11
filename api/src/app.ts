import express, { Application, Request, Response, NextFunction } from 'express';
import { apiRouter } from './modules/routes/index';
import { join } from 'path';
import { DebugRoute } from './shared/debug';

class App {
  public app: Application;
  public debugRoute: DebugRoute = new DebugRoute();

  constructor() {
    this.app = express();
    this.config();
    this.debugRoute.routes(this.app);
    this.app.use(new apiRouter().router);
    this.app.use(express.static(__dirname + '/build'));
    this.app.get('/*', (_, res) => {
      res.sendFile(join(__dirname + '/build/index.html'));
    });
  }

  private config(): void {
    this.app.use((_: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH,DELETE'
      );
      next();
    });

    this.app.use((req, res, next) => {
      express.json()(req, res, (err) => {
        if (err) {
          console.error(err);
          return res.sendStatus(400);
        }

        next();
      });
    });
  }
}

export default new App().app;
