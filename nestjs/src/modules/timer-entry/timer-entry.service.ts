import { PrismaService } from '@/modules/prisma/prisma.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { TimerEntry } from '@prisma/client';

@Injectable()
export class TimerEntryService {
  constructor(private prisma: PrismaService) {}

  async createTimerEntry(
    timerEntryFields: Omit<TimerEntry, 'id'>,
    email: string,
  ) {
    const { description, projectId, endTime, startTime } = timerEntryFields;

    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId,
        client: {
          userEmail: email,
        },
      },
      select: { id: true },
    });

    if (project === null) {
      throw new UnauthorizedException();
    }

    const timerEntry = await this.prisma.timerEntry.create({
      data: {
        startTime,
        endTime,
        description,
        projectId,
      },
    });

    return timerEntry;
  }

  async getTimerEntry(timerEntryId: string, email: string) {
    const timerEntry = await this.prisma.timerEntry.findUnique({
      where: {
        id: timerEntryId,
        project: {
          client: {
            userEmail: email,
          },
        },
      },
    });

    if (!timerEntry) {
      throw new NotFoundException();
    }

    return timerEntry;
  }
}
