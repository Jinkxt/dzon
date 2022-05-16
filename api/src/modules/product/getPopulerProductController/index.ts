import { GetPopulerProductsUseCase } from './usecase';
import { GetPopulerProductsController } from './controller';
import { impProductRepo } from '../repo';

const getPopulerProductsUseCase = new GetPopulerProductsUseCase(impProductRepo);
export const getPopulerProductsController = new GetPopulerProductsController(
  getPopulerProductsUseCase
);
