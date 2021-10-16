import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoSolicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idTipoSolicitud?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  formato: string;


  constructor(data?: Partial<TipoSolicitud>) {
    super(data);
  }
}

export interface TipoSolicitudRelations {
  // describe navigational properties here
}

export type TipoSolicitudWithRelations = TipoSolicitud & TipoSolicitudRelations;
