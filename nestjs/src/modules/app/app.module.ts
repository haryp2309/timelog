import { AppController } from '@/modules/app/app.controller';
import { AuthModule } from '@/modules/auth/auth.module';
import { ClientModule } from '@/modules/client/client.module';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { ProjectModule } from '@/modules/project/project.module';
import { SocketModule } from '@/modules/socket/socket.module';
import { TimerEntryModule } from '@/modules/timer-entry/timer-entry.module';
import { UserModule } from '@/modules/user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ClientModule,
    ProjectModule,
    TimerEntryModule,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
