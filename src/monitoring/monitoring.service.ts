import { Inject, Injectable } from '@nestjs/common';
import { CacheService } from '../cache-service/cache.service';
import { Parameter } from '../models/monitoring.model';
import { Parameters, TParameter } from '../models/parameters';
abstract class IMonitoringService {}
@Injectable()
export class MonitoringService implements IMonitoringService {
  constructor(@Inject(CacheService) private cacheService: CacheService) {}
  // constructor() {}

  async monitor() {
    await this.cacheService.getAll();
  }

  async getValueOf(key: string): Promise<Parameter> {
    return await this.cacheService.get(key);
  }

  async setValueOf(key: string, value: number) {
    return await this.cacheService.set(key as Parameters, value);
  }
}
