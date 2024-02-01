import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
} from '@nestjs/websockets';
import { MonitoringService } from './monitoring.service';
import { Parameter } from '../models/monitoring.model';
import { TParameter } from '../models/parameters';

@WebSocketGateway()
export class MonitoringGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private monitoringService: MonitoringService) {}
  @SubscribeMessage('monitoring')
  monitor(client: any, payload: any): string {
    console.log(payload);
    return 'Hello world!';
  }

  handleConnection(client: any, ...args): any {
    console.log('connected', client);
  }

  handleDisconnect(client: any): any {
    console.log('disconnected', client);
  }

  @SubscribeMessage('get')
  async getValue(@MessageBody('key') key: string): Promise<Parameter> {
    return await this.monitoringService.getValueOf(key);
  }

  @SubscribeMessage('set')
  async setValueOf(
    @MessageBody('key') key: string,
    @MessageBody('value') value: TParameter,
  ) {
    return await this.monitoringService.setValueOf(key, value);
  }
}
