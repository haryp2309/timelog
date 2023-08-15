import { SocketService } from '@/modules/socket/socket.service';
import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection<Socket> {
  @WebSocketServer()
  server: Server;

  constructor(private socketService: SocketService) {}

  async handleConnection(socket: Socket, ...args: any[]) {
    const user = await this.socketService.validateUser(socket);

    console.log(`user (${user}) connected`);
    socket.join(user);

    this.socketService.emitUpdateTimerEntries(socket, null);
    const userRoomSocket = this.server.to(user);

    socket.on('emit:startTimer', () => {
      console.log('👳', 'startTimer');
      userRoomSocket.emit('startTimer');
    });
    socket.on('emit:stopTimer', () => {
      userRoomSocket.emit('stopTimer');
    });
    socket.on('emit:resetTimer', () => {
      userRoomSocket.emit('resetTimer');
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    console.log('😔', { data });
    return data;
  }
}
