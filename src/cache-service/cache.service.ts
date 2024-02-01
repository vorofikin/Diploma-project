import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Parameters, TParameter } from '../models/parameters';
import { MonitoringModel, Parameter } from '../models/monitoring.model';
@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async get(key: string): Promise<Parameter> {
    console.log(`get ${key} from cache`);
    const value = (await this.cacheManager.get(key)) as TParameter;
    return {
      title: key as Parameters,
      value,
    };
  }

  async set(key: Parameters, value: number): Promise<Parameter> {
    try {
      await this.cacheManager.set(key.toString(), value);
    } catch (e) {
      console.log(e);
    }
    return {
      title: key as Parameters,
      value,
    };
  }

  async getAll() {
    const parameters = Object.values(Parameters);
    const monitoringModel: MonitoringModel = [];
    try {
      for (let i = 0; i < parameters.length; i++) {
        const value: TParameter = await this.cacheManager.get(parameters[i]);
        monitoringModel.push({ value, title: parameters[i] });
      }
      return monitoringModel;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
