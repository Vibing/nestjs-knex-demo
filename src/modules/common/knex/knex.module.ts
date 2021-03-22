import { DynamicModule, Global, Module } from '@nestjs/common';
import { KnexOptions } from './interfaces'
import { KNEX_CONNECTION } from './constants'
import { createKnexConnection } from './knex.util'

@Global()
@Module({})
export class KnexModule {
  public static forRoot(options: KnexOptions): DynamicModule {

    const ConnectionProvider = {
      provide: KNEX_CONNECTION,
      useValue: createKnexConnection(options)
    }
    return {
      module: KnexModule,
      providers: [
        ConnectionProvider
      ],
      exports: [
        ConnectionProvider
      ]
    }
  }
}
