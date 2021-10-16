import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProponenteTrabajo, ProponenteTrabajoRelations, Departamento, DepartamentoProponenteTrabajo} from '../models';
import {DepartamentoProponenteTrabajoRepository} from './departamento-proponente-trabajo.repository';
import {DepartamentoRepository} from './departamento.repository';

export class ProponenteTrabajoRepository extends DefaultCrudRepository<
  ProponenteTrabajo,
  typeof ProponenteTrabajo.prototype.idCedula,
  ProponenteTrabajoRelations
> {

  public readonly departamentos: HasManyThroughRepositoryFactory<Departamento, typeof Departamento.prototype.id,
          DepartamentoProponenteTrabajo,
          typeof ProponenteTrabajo.prototype.idCedula
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoProponenteTrabajoRepository') protected departamentoProponenteTrabajoRepositoryGetter: Getter<DepartamentoProponenteTrabajoRepository>, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>,
  ) {
    super(ProponenteTrabajo, dataSource);
    this.departamentos = this.createHasManyThroughRepositoryFactoryFor('departamentos', departamentoRepositoryGetter, departamentoProponenteTrabajoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
  }
}
