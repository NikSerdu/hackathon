import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CurrentTaskController } from './current-task.controller'
import { CurrentTaskService } from './current-task.service'

@Module({
	controllers: [CurrentTaskController],
	providers: [CurrentTaskService, PrismaService],
})
export class CurrentTaskModule {}
