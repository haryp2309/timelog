import { PrismaService } from '@/modules/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async newClient(name?: string, email?: string) {
    if (!name || !email) {
      throw new BadRequestException();
    }

    const client = await this.prisma.client.create({
      data: {
        name,
        userEmail: email,
      },
    });

    return client;
  }

  async getClient(clientId?: string, email?: string) {
    if (!clientId || !email) {
      throw new BadRequestException();
    }

    const client = await this.prisma.client.findUnique({
      where: {
        id: clientId,
        user: {
          email,
        },
      },
    });

    if (!client) {
      throw new NotFoundException();
    }

    return client;
  }
}
