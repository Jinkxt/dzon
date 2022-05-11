import { GetUseCase } from './usecase';
import { GetController } from './controller';
import { impRepo } from '../../repo';

const getUseCase = new GetUseCase(impRepo);
export const getController = new GetController(getUseCase);
