import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {InvitacionEvaluar, InvitacionEvaluarRelations, Recordatorio, ResultadoEvaluacion} from '../models';
import {RecordatorioRepository} from './recordatorio.repository';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';

export class InvitacionEvaluarRepository extends DefaultCrudRepository<
  InvitacionEvaluar,
  typeof InvitacionEvaluar.prototype.idInvitacionEvaluar,
  InvitacionEvaluarRelations
> {

  public readonly recordatorios: HasManyRepositoryFactory<Recordatorio, typeof InvitacionEvaluar.prototype.idInvitacionEvaluar>;

  public readonly resultadoEvaluacions: HasManyRepositoryFactory<ResultadoEvaluacion, typeof InvitacionEvaluar.prototype.idInvitacionEvaluar>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('RecordatorioRepository') protected recordatorioRepositoryGetter: Getter<RecordatorioRepository>, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>,
  ) {
    super(InvitacionEvaluar, dataSource);
    this.resultadoEvaluacions = this.createHasManyRepositoryFactoryFor('resultadoEvaluacions', resultadoEvaluacionRepositoryGetter,);
    this.registerInclusionResolver('resultadoEvaluacions', this.resultadoEvaluacions.inclusionResolver);
    this.recordatorios = this.createHasManyRepositoryFactoryFor('recordatorios', recordatorioRepositoryGetter,);
    this.registerInclusionResolver('recordatorios', this.recordatorios.inclusionResolver);
  }
}
