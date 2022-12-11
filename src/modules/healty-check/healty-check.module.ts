import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthCheckController } from './healty-check.controller';
@Module({
  controllers: [HealthCheckController],
  imports: [TerminusModule, HttpModule],
})
export class HealtyCheckModule {}
