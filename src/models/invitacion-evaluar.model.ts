import {Entity, model, property, hasMany} from '@loopback/repository';
import {Recordatorio} from './recordatorio.model';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';

@model()
export class InvitacionEvaluar extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idInvitacionEvaluar?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaRespuesta: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoInvitacion: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
  })
  idJurado?: string;

  @hasMany(() => Recordatorio, {keyTo: 'idInvitacionEvaluar'})
  recordatorios: Recordatorio[];

  @hasMany(() => ResultadoEvaluacion, {keyTo: 'idInvitacionEvaluar'})
  resultadoEvaluacions: ResultadoEvaluacion[];

  constructor(data?: Partial<InvitacionEvaluar>) {
    super(data);
  }
}

export interface InvitacionEvaluarRelations {
  // describe navigational properties here
}

export type InvitacionEvaluarWithRelations = InvitacionEvaluar & InvitacionEvaluarRelations;
