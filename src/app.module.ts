import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { KnexModule } from './modules/common/knex/knex.module';


@Module({
  imports: [
    KnexModule.forRoot({
      client: 'mysql',
      connection: {
        host: '122.51.138.67',
        user: 'blog',
        password: '123456',
        database: 'blog'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
