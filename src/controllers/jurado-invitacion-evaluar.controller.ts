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
  Jurado,
  InvitacionEvaluar,
} from '../models';
import {JuradoRepository} from '../repositories';

export class JuradoInvitacionEvaluarController {
  constructor(
    @repository(JuradoRepository) protected juradoRepository: JuradoRepository,
  ) { }

  @get('/jurados/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Array of Jurado has many InvitacionEvaluar',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(InvitacionEvaluar)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<InvitacionEvaluar>,
  ): Promise<InvitacionEvaluar[]> {
    return this.juradoRepository.invitacionEvaluars(id).find(filter);
  }

  @post('/jurados/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Jurado model instance',
        content: {'application/json': {schema: getModelSchemaRef(InvitacionEvaluar)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Jurado.prototype.idJurado,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InvitacionEvaluar, {
            title: 'NewInvitacionEvaluarInJurado',
            exclude: ['idInvitacionEvaluar'],
            optional: ['idJurado']
          }),
        },
      },
    }) invitacionEvaluar: Omit<InvitacionEvaluar, 'idInvitacionEvaluar'>,
  ): Promise<InvitacionEvaluar> {
    return this.juradoRepository.invitacionEvaluars(id).create(invitacionEvaluar);
  }

  @patch('/jurados/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Jurado.InvitacionEvaluar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InvitacionEvaluar, {partial: true}),
        },
      },
    })
    invitacionEvaluar: Partial<InvitacionEvaluar>,
    @param.query.object('where', getWhereSchemaFor(InvitacionEvaluar)) where?: Where<InvitacionEvaluar>,
  ): Promise<Count> {
    return this.juradoRepository.invitacionEvaluars(id).patch(invitacionEvaluar, where);
  }

  @del('/jurados/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Jurado.InvitacionEvaluar DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(InvitacionEvaluar)) where?: Where<InvitacionEvaluar>,
  ): Promise<Count> {
    return this.juradoRepository.invitacionEvaluars(id).delete(where);
  }
}
