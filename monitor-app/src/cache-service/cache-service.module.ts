import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';
import type { RedisClientOptions } from 'redis';
import * as cacheStore from 'cache-manager-redis-store';
import { ValidationService } from '../validation-service/validation.service';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: cacheStore,
      host: 'cache_service',
      port: 6379,
    }),
  ],
  providers: [CacheService, ValidationService],
  exports: [CacheService],
})
export class CacheServiceModule {}
