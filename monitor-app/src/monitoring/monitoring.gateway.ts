import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  WsResponse,
  WebSocketServer,
} from '@nestjs/websockets';
import { MonitoringService } from './monitoring.service';
import { Parameter } from '../models/monitoring.model';
import { TParameter } from '../models/parameters';
import { Parameters } from '../models/parameters';
import { Server } from 'socket.io';
import { IGetAllResponse } from '../cache-service/cache.service';
import { MonitoringEvents } from './monitoring.events';

@WebSocketGateway()
export class MonitoringGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private monitoringService: MonitoringService) {}

  @SubscribeMessage(MonitoringEvents.Monitoring)
  monitor(_client: any, payload: [Parameters, number]): string {
    console.log(payload);
    return 'Hello world!';
  }

  handleConnection(client: any, ...args): any {
    console.log('connected', client);
  }

  handleDisconnect(client: any): any {
    console.log('disconnected', client);
  }

  @SubscribeMessage(MonitoringEvents.Get)
  async getValue(@MessageBody('key') key: string): Promise<Parameter> {
    return await this.monitoringService.getValueOf(key);
  }

  @SubscribeMessage(MonitoringEvents.GetAll)
  async getAllValue(): Promise<WsResponse> {
    return {
      event: MonitoringEvents.GetAll,
      data: await this.monitoringService.monitor(),
    };
  }

  @SubscribeMessage(MonitoringEvents.SetAll)
  async setAll(_client: any, parameters: Parameter[]): Promise<void> {
    for (const parameter of parameters) {
      await this.monitoringService.setValueOf(parameter.title, parameter.value);
    }
    const payload: IGetAllResponse = await this.monitoringService.monitor();
    this.server.emit(MonitoringEvents.Monitoring, payload);
  }

  @SubscribeMessage(MonitoringEvents.Set)
  async setValueOf(
    @MessageBody('key') key: string,
    @MessageBody('value') value: TParameter,
  ): Promise<Parameter> {
    return await this.monitoringService.setValueOf(key, value);
  }
}
