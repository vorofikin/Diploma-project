import { Inject, Injectable } from '@nestjs/common';
import { CacheService, IGetAllResponse } from '../cache-service/cache.service';
import { Parameter } from '../models/monitoring.model';
import { Parameters } from '../models/parameters';

abstract class IMonitoringService {
  abstract monitor(): Promise<IGetAllResponse>;

  abstract getValueOf(key: string): Promise<Parameter>;

  abstract setValueOf(key: string, value: number): Promise<Parameter>;
}

@Injectable()
export class MonitoringService implements IMonitoringService {
  constructor(@Inject(CacheService) private cacheService: CacheService) {}

  async monitor(): Promise<IGetAllResponse> {
    return await this.cacheService.getAll();
  }

  async getValueOf(key: string): Promise<Parameter> {
    return await this.cacheService.get(key);
  }

  async setValueOf(key: string, value: number): Promise<Parameter> {
    return await this.cacheService.set(key as Parameters, value);
  }
}
