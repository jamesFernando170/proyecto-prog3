import {Entity, model, property} from '@loopback/repository';

@model()
export class JuradoAreaInvestigacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idJuradoAreaInvestigacion?: string;

  @property({
    type: 'string',
  })
  idJurado?: string;

  @property({
    type: 'string',
  })
  idAreaInvestigacion?: string;

  constructor(data?: Partial<JuradoAreaInvestigacion>) {
    super(data);
  }
}

export interface JuradoAreaInvestigacionRelations {
  // describe navigational properties here
}

export type JuradoAreaInvestigacionWithRelations = JuradoAreaInvestigacion & JuradoAreaInvestigacionRelations;
