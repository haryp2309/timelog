import { ProjectService } from '@/modules/project/project.service';
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
import { Project } from '@prisma/client';

@ApiBasicAuth('access-user')
@ApiBasicAuth('access-token')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @ApiBody({
    schema: {
      properties: {
        color: {
          type: 'string',
          example: '#F123CF',
        },
        name: {
          type: 'string',
          example: 'My Project',
        },
        clientId: {
          type: 'string',
          example: '1120ad56-345a-491f-a26f-c065ab01a11f',
        },
      },
    },
  })
  @Post('/new')
  createProject(
    @AuthUser() email: string,
    @Body() body: Partial<Omit<Project, 'id'>>,
  ) {
    const { clientId, color, name } = body;
    if (!clientId || !color || !name) {
      throw new BadRequestException();
    }
    return this.projectService.createProject({ clientId, color, name }, email);
  }

  @Get('/get/:projectId')
  getProject(@AuthUser() email: string, @Param('projectId') projectId: string) {
    return this.projectService.getProject(email, projectId);
  }
}
