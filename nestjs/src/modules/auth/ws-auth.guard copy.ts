import { customAuthHeaders } from '@/modules/auth/constants';
import { CustomJwtService } from '@/modules/auth/customJwt.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { IncomingMessage } from 'http';

@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor(private jwtService: CustomJwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as IncomingMessage;
    const user = request.headers[customAuthHeaders.accessUser];
    const token = request.headers[customAuthHeaders.accessToken];

    if (typeof user !== 'string' || typeof token !== 'string') {
      return false;
    }

    return await this.jwtService.verify(user, token);
  }
}
