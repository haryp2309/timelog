import { customAuthHeaders } from '@/modules/auth/constants';
import { CustomJwtService } from '@/modules/auth/customJwt.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { IncomingMessage } from 'http';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: CustomJwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as IncomingMessage;
    const user = request.headers[customAuthHeaders.accessUser];
    const token = request.headers[customAuthHeaders.accessToken];

    if (
      !user ||
      typeof user !== 'string' ||
      !token ||
      typeof token !== 'string'
    ) {
      throw new UnauthorizedException('Missing user and/or token');
    }

    return await this.jwtService.verify(user, token);
  }
}
