import { GetProductsUseCase } from './usecase';
import { GetProductsController } from './controller';
import { impProductRepo } from '../repo';

const getProductsUseCase = new GetProductsUseCase(impProductRepo);
export const getProductsController = new GetProductsController(
  getProductsUseCase
);
