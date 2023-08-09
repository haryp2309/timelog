import { PrismaService } from '@/modules/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(
    { color, name, clientId }: Omit<Project, 'id'>,
    email: string,
  ) {
    if (!name || !clientId || !email) {
      throw new BadRequestException();
    }

    const client = await this.prisma.client.findFirst({
      where: {
        userEmail: email,
        id: clientId,
      },
      select: {
        id: true,
      },
    });

    if (!client) {
      throw new BadRequestException();
    }

    const project = await this.prisma.project.create({
      data: {
        name,
        color,
        clientId: client.id,
      },
    });

    return project;
  }

  async getProject(email: string, projectId: string) {
    if (!email || !projectId) {
      throw new BadRequestException('Fields are missing');
    }

    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId,
        client: {
          user: {
            email,
          },
        },
      },
    });

    if (!project) {
      throw new NotFoundException();
    }

    return project;
  }
}
