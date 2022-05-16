import { Router } from 'express';
import { getProductsController } from '../getProductController';

export class ProductRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.get('/api/prodcuts', (req, res) =>
      getProductsController.execute(req, res)
    );
  }
}
