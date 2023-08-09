import { AuthController } from '@/modules/auth/auth.controller';
import { AuthGuard } from '@/modules/auth/auth.guard';
import { AuthService } from '@/modules/auth/auth.service';
import { jwtConstants } from '@/modules/auth/constants';
import { CustomJwtService } from '@/modules/auth/customJwt.service';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, CustomJwtService],
  exports: [AuthService, AuthGuard, CustomJwtService],
})
export class AuthModule {}
