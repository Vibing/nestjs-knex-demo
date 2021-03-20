import { Injectable, Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { KNEX_CONNECTION } from './modules/common/knex/constants';

@Injectable()
export class AppService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) { }

  async getHello(): Promise<any> {
    return await this.knex('article').select()
  }
}
