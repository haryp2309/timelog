import { customAuthHeaders } from '@/modules/auth/constants';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers[customAuthHeaders.accessUser];
  },
);
