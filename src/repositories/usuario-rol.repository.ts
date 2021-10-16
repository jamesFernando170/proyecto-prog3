import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {UsuarioRol, UsuarioRolRelations} from '../models';

export class UsuarioRolRepository extends DefaultCrudRepository<
  UsuarioRol,
  typeof UsuarioRol.prototype.idUsuarioRol,
  UsuarioRolRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UsuarioRol, dataSource);
  }
}
