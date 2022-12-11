import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller('health')
export class HealthCheckController {
  constructor(
    private healthCheckService: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MongooseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  checkHealth() {
    return this.healthCheckService.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () => this.db.pingCheck('mongoose'),
    ]);
  }
}
