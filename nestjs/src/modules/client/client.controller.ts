import { ClientService } from '@/modules/client/client.service';
import { AuthUser } from '@/paramDecorators/authUser';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBasicAuth, ApiBody } from '@nestjs/swagger';

@ApiBasicAuth('access-user')
@ApiBasicAuth('access-token')
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @ApiBody({
    schema: {
      properties: {
        name: {
          type: 'string',
          example: 'My Project',
        },
      },
    },
  })
  @Post('/new')
  newClient(@Body() { name }: { name: string }, @AuthUser() email: string) {
    return this.clientService.newClient(name, email);
  }

  @Get('/get/:clientId')
  getClient(@Param('clientId') clientId: string, @AuthUser() email: string) {
    return this.clientService.getClient(clientId, email);
  }
}
