import {Entity, model, property} from '@loopback/repository';

@model()
export class EstadoSolicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idEstadoSolicitud?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<EstadoSolicitud>) {
    super(data);
  }
}

export interface EstadoSolicitudRelations {
  // describe navigational properties here
}

export type EstadoSolicitudWithRelations = EstadoSolicitud & EstadoSolicitudRelations;
