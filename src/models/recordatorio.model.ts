import {Entity, model, property} from '@loopback/repository';

@model()
export class Recordatorio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idRecordatorio?: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
  })
  tipoRecordatorio?: string;

  @property({
    type: 'string',
  })
  idInvitacionEvaluar?: string;

  constructor(data?: Partial<Recordatorio>) {
    super(data);
  }
}

export interface RecordatorioRelations {
  // describe navigational properties here
}

export type RecordatorioWithRelations = Recordatorio & RecordatorioRelations;
