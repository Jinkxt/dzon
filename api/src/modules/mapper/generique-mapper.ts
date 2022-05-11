import { EntitySet } from '../domain';
interface  EntitySetDTO{
    response:string
}

export class GeneriqueMap {
  public static toDTO(data: EntitySet): EntitySetDTO {
    return {
      response: data.message,
  
    };
  }

  public static toDomain(data: any): EntitySet {
    return new EntitySet(data);
  }
}
