import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultadoEvaluacion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idResultadoEvaluacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
  })
  formatoDiligenciado?: string;

  @property({
    type: 'string',
  })
  idInvitacionEvaluar?: string;

  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
