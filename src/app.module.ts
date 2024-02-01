import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitoringGateway } from './monitoring/monitoring.gateway';
import { CacheService } from './cache-service/cache.service';
import { CacheServiceModule } from './cache-service/cache-service.module';
import { MonitoringService } from './monitoring/monitoring.service';

@Module({
  imports: [CacheServiceModule],
  controllers: [AppController],
  providers: [AppService, MonitoringGateway, CacheService, MonitoringService],
})
export class AppModule {}
