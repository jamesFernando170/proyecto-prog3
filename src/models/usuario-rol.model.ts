import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioRol extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idUsuarioRol?: string;


  constructor(data?: Partial<UsuarioRol>) {
    super(data);
  }
}

export interface UsuarioRolRelations {
  // describe navigational properties here
}

export type UsuarioRolWithRelations = UsuarioRol & UsuarioRolRelations;
