import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Parameters, TParameter } from '../models/parameters';
import { IMonitoring, Parameter } from '../models/monitoring.model';
import { ValidationService } from '../validation-service/validation.service';
import { IValidationResult } from '../models/validation.model';

export interface IGetAllResponse {
  parameters?: IMonitoring[];
  error?: string;
}

abstract class ICacheService {
  abstract get(key: string): Promise<Parameter>;

  abstract set(key: Parameters, value: number): Promise<Parameter>;

  abstract getAll(): Promise<IGetAllResponse>;
}

@Injectable()
export class CacheService implements ICacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(ValidationService) private validationService: ValidationService,
  ) {}

  async get(key: string): Promise<Parameter> {
    const value: number = (await this.cacheManager.get(key)) as TParameter;
    return {
      title: key as Parameters,
      value,
    };
  }

  async set(key: Parameters, value: number): Promise<Parameter> {
    try {
      await this.cacheManager.set(key.toString(), value, { ttl: 15 });
    } catch (e) {
      console.log(e);
    }
    return {
      title: key as Parameters,
      value,
    };
  }

  async getAll(): Promise<IGetAllResponse> {
    const parameters: Parameters[] = Object.values(Parameters);
    const monitoringModel: IMonitoring[] = [];
    try {
      for (const parameter of parameters) {
        const param: Parameter = {
          title: parameter as Parameters,
          value: Number((await this.cacheManager.get(parameter)).toFixed(3)),
        };
        const validationResult: IValidationResult =
          this.validationService.validateParameter(param);
        monitoringModel.push({
          ...param,
          ...validationResult,
        });
      }
      return { parameters: monitoringModel };
    } catch (e) {
      return { error: `GetAll Error: ${e}` };
    }
  }
}
