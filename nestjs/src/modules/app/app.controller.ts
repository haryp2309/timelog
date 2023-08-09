import { AuthGuard } from '@/modules/auth/auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Controller()
export class AppController {
  @Get()
  getHello(): { Hello: 'World' } {
    return { Hello: 'World' };
  }
}
