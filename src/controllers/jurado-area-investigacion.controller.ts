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
JuradoAreaInvestigacion,
AreaInvestigacion,
} from '../models';
import {JuradoRepository} from '../repositories';

export class JuradoAreaInvestigacionController {
  constructor(
    @repository(JuradoRepository) protected juradoRepository: JuradoRepository,
  ) { }

  @get('/jurados/{id}/area-investigacions', {
    responses: {
      '200': {
        description: 'Array of Jurado has many AreaInvestigacion through JuradoAreaInvestigacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AreaInvestigacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<AreaInvestigacion>,
  ): Promise<AreaInvestigacion[]> {
    return this.juradoRepository.areaInvestigacions(id).find(filter);
  }

  @post('/jurados/{id}/area-investigacions', {
    responses: {
      '200': {
        description: 'create a AreaInvestigacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(AreaInvestigacion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Jurado.prototype.idJurado,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {
            title: 'NewAreaInvestigacionInJurado',
            exclude: ['idAreaInvestigacion'],
          }),
        },
      },
    }) areaInvestigacion: Omit<AreaInvestigacion, 'idAreaInvestigacion'>,
  ): Promise<AreaInvestigacion> {
    return this.juradoRepository.areaInvestigacions(id).create(areaInvestigacion);
  }

  @patch('/jurados/{id}/area-investigacions', {
    responses: {
      '200': {
        description: 'Jurado.AreaInvestigacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaInvestigacion, {partial: true}),
        },
      },
    })
    areaInvestigacion: Partial<AreaInvestigacion>,
    @param.query.object('where', getWhereSchemaFor(AreaInvestigacion)) where?: Where<AreaInvestigacion>,
  ): Promise<Count> {
    return this.juradoRepository.areaInvestigacions(id).patch(areaInvestigacion, where);
  }

  @del('/jurados/{id}/area-investigacions', {
    responses: {
      '200': {
        description: 'Jurado.AreaInvestigacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(AreaInvestigacion)) where?: Where<AreaInvestigacion>,
  ): Promise<Count> {
    return this.juradoRepository.areaInvestigacions(id).delete(where);
  }
}
