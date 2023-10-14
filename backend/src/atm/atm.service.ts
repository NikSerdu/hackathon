import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ServicesService } from 'src/services/services.service'
import { ATMDto } from './dto/atm.dto'
import { ATMObject } from './return-atm.object'

@Injectable()
export class AtmService {
	constructor(
		private prisma: PrismaService,
		private services: ServicesService,
	) {}

	async getAll() {
		return this.prisma.aTM.findMany({
			select: ATMObject,
		})
	}

	async getById(id: number) {
		return this.prisma.aTM.findUnique({
			where: {
				id,
			},
			select: ATMObject,
		})
	}

	async create(dto: ATMDto) {
		const newService = await this.services.create(dto.Services)
		return this.prisma.aTM.create({
			data: {
				address: dto.address,
				allDay: dto.allDay,
				latitude: dto.latitude,
				longitude: dto.longitude,
				Services: {
					connect: {
						id: newService.id,
					},
				},
			},
			select: ATMObject,
		})
	}
}
