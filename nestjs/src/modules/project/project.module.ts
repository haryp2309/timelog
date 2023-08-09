import { PrismaModule } from '@/modules/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [PrismaModule],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
