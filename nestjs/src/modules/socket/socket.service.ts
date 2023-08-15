import { CustomJwtService } from '@/modules/auth/customJwt.service';
import { SocketEvent } from '@/modules/socket/socket.constants';
import { Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { BroadcastOperator, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

@Injectable()
export class SocketService {
  constructor(private customJwtService: CustomJwtService) {}

  async validateUser(socket: Socket) {
    const { user, token } = socket.handshake.auth as {
      user: unknown;
      token: unknown;
    };

    if (typeof user !== 'string' || typeof token !== 'string') {
      throw new WsException('Auth fields not valid');
    }

    const isValid = await this.customJwtService.verify(user, token);

    if (!isValid) {
      throw new WsException('User is unathorized');
    }
    return user;
  }

  emitUpdateTimerEntries(
    socket: Socket | BroadcastOperator<DefaultEventsMap, any>,
    timerEntryIds: string[] | null,
  ) {
    socket.emit(SocketEvent.UPDATE_TIMERENTRIES, { timerEntryIds });
  }
}
