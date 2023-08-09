import { TimerEntryService } from '@/modules/timer-entry/timer-entry.service';
import { AuthUser } from '@/paramDecorators/authUser';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBasicAuth, ApiBody } from '@nestjs/swagger';
import { DateTime } from 'luxon';

@ApiBasicAuth('access-user')
@ApiBasicAuth('access-token')
@Controller('timerentry')
export class TimerEntryController {
  constructor(private timerEntryService: TimerEntryService) {}

  @ApiBody({
    schema: {
      properties: {
        description: {
          type: 'string',
          example: 'Did some stuff',
        },
        endTime: {
          type: 'string',
          example: '',
        },
        projectId: {
          type: 'string',
          example: '1ca2d824-3e68-4a0d-80f1-cab5084f593f',
        },
        startTime: {
          type: 'string',
          example: '2017-05-15T08:30:00',
        },
      },
    },
  })
  @Post('/new')
  createTimerEntry(
    @Body('description') description?: string,
    @Body('endTime') serializedEndTime?: string,
    @Body('projectId') projectId?: string,
    @Body('startTime') serializedStartTime?: string,
    @AuthUser() email?: string,
  ) {
    if (!projectId || !serializedStartTime || !email) {
      throw new BadRequestException();
    }

    const startTime = DateTime.fromISO(serializedStartTime);
    const endTime = serializedEndTime
      ? DateTime.fromISO(serializedEndTime)
      : undefined;

    if (!startTime.isValid || (endTime && !endTime.isValid)) {
      throw new BadRequestException('Unable to deserialize dates');
    }

    return this.timerEntryService.createTimerEntry(
      {
        description: description || null,
        projectId,
        endTime: endTime?.toJSDate() || null,
        startTime: startTime.toJSDate(),
      },
      email,
    );
  }

  @Get('/get/:timerEntryId')
  getTimerEntry(
    @Param('timerEntryId') timerEntryId?: string,
    @AuthUser() email?: string,
  ) {
    if (!timerEntryId || !email) {
      throw new BadRequestException();
    }
    return this.timerEntryService.getTimerEntry(timerEntryId, email);
  }
}
