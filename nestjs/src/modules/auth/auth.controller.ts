import { AuthService } from '@/modules/auth/auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    schema: {
      properties: {
        email: {
          type: 'string',
          example: 'bo@testmail.com',
        },
        password: {
          type: 'string',
          example: 'bestPassword123',
        },
      },
    },
  })
  @Post('login')
  signIn(@Body() { email, password }: { email?: string; password?: string }) {
    return this.authService.signIn(email, password);
  }

  @ApiBody({
    schema: {
      properties: {
        email: {
          type: 'string',
          example: 'bo@testmail.com',
        },
        password: {
          type: 'string',
          example: 'bestPassword123',
        },
        name: {
          type: 'string',
          example: 'Boo Koo',
        },
      },
    },
  })
  @Post('signup')
  signUp(
    @Body()
    {
      email,
      password,
      name,
    }: {
      email?: string;
      password?: string;
      name?: string;
    },
  ) {
    return this.authService.signUp(name, email, password);
  }
}
