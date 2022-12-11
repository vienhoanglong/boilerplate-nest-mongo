import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { HealtyCheckModule } from './modules/healty-check/healty-check.module';

@Module({
  imports: [
    HealtyCheckModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true, // <-- no longer necessary
      useUnifiedTopology: true, // <-- no longer necessary
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
