import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudComite extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idSolicitudComite?: string;


  constructor(data?: Partial<SolicitudComite>) {
    super(data);
  }
}

export interface SolicitudComiteRelations {
  // describe navigational properties here
}

export type SolicitudComiteWithRelations = SolicitudComite & SolicitudComiteRelations;
