import { Router } from 'express';
import { getController } from '../controller/usecase/index';

export class apiRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.get('/api', (req, res) =>
    getController.execute(req, res),
    );

  }
}
