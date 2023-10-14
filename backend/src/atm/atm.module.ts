import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ServicesService } from 'src/services/services.service'
import { AtmController } from './atm.controller'
import { AtmService } from './atm.service'

@Module({
	controllers: [AtmController],
	providers: [AtmService, PrismaService, ServicesService],
})
export class AtmModule {}
