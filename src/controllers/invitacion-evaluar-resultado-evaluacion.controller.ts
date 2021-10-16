import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  InvitacionEvaluar,
  ResultadoEvaluacion,
} from '../models';
import {InvitacionEvaluarRepository} from '../repositories';

export class InvitacionEvaluarResultadoEvaluacionController {
  constructor(
    @repository(InvitacionEvaluarRepository) protected invitacionEvaluarRepository: InvitacionEvaluarRepository,
  ) { }

  @get('/invitacion-evaluars/{id}/resultado-evaluacions', {
    responses: {
      '200': {
        description: 'Array of InvitacionEvaluar has many ResultadoEvaluacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ResultadoEvaluacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<ResultadoEvaluacion>,
  ): Promise<ResultadoEvaluacion[]> {
    return this.invitacionEvaluarRepository.resultadoEvaluacions(id).find(filter);
  }

  @post('/invitacion-evaluars/{id}/resultado-evaluacions', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar model instance',
        content: {'application/json': {schema: getModelSchemaRef(ResultadoEvaluacion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof InvitacionEvaluar.prototype.idInvitacionEvaluar,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoEvaluacion, {
            title: 'NewResultadoEvaluacionInInvitacionEvaluar',
            exclude: ['idResultadoEvaluacion'],
            optional: ['idInvitacionEvaluar']
          }),
        },
      },
    }) resultadoEvaluacion: Omit<ResultadoEvaluacion, 'idResultadoEvaluacion'>,
  ): Promise<ResultadoEvaluacion> {
    return this.invitacionEvaluarRepository.resultadoEvaluacions(id).create(resultadoEvaluacion);
  }

  @patch('/invitacion-evaluars/{id}/resultado-evaluacions', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar.ResultadoEvaluacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultadoEvaluacion, {partial: true}),
        },
      },
    })
    resultadoEvaluacion: Partial<ResultadoEvaluacion>,
    @param.query.object('where', getWhereSchemaFor(ResultadoEvaluacion)) where?: Where<ResultadoEvaluacion>,
  ): Promise<Count> {
    return this.invitacionEvaluarRepository.resultadoEvaluacions(id).patch(resultadoEvaluacion, where);
  }

  @del('/invitacion-evaluars/{id}/resultado-evaluacions', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar.ResultadoEvaluacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(ResultadoEvaluacion)) where?: Where<ResultadoEvaluacion>,
  ): Promise<Count> {
    return this.invitacionEvaluarRepository.resultadoEvaluacions(id).delete(where);
  }
}
