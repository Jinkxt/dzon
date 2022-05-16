import { Router } from 'express';
import { getPopulerProductsController } from '../getPopulerProductController';
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

    this.router.get('/api/prodcuts/populer', (req, res) =>
      getPopulerProductsController.execute(req, res)
    );
  }
}
