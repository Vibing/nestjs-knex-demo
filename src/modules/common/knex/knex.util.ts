import { knex } from 'knex'
import { KnexOptions } from './interfaces'

export const createKnexConnection = (options: KnexOptions): any => knex(options)