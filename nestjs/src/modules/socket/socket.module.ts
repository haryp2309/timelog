import { AuthModule } from '@/modules/auth/auth.module';
import { SocketGateway } from '@/modules/socket/socket.gateway';
import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';

@Module({
  imports: [AuthModule],
  providers: [SocketService, SocketGateway],
  exports: [SocketGateway],
})
export class SocketModule {}
