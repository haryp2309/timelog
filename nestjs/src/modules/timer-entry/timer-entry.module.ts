import { PrismaModule } from '@/modules/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TimerEntryController } from './timer-entry.controller';
import { TimerEntryService } from './timer-entry.service';

@Module({
  imports: [PrismaModule],
  controllers: [TimerEntryController],
  providers: [TimerEntryService],
})
export class TimerEntryModule {}
