import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BankOfficeDTO } from './dto/bank-office.dto'
import { BankOfficeObject } from './return-bank_office.object'

@Injectable()
export class BankOfficeService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.bankOffice.findMany({
			select: BankOfficeObject,
		})
	}

	async getById(id: number) {
		return this.prisma.bankOffice.findUnique({
			where: {
				id,
			},
			select: BankOfficeObject,
		})
	}

	async create(data: BankOfficeDTO) {
		const createdBankOffice = await this.prisma.bankOffice.create({
			data: {
				salePointName: data.salePointName,
				address: data.address,
				status: data.status,
				hasRamp: data.hasRamp,
				latitude: data.latitude,
				longitude: data.longitude,
				openHours: {
					createMany: {
						data: data.openHours,
					},
				},
				openHoursIndividual: {
					createMany: {
						data: data.openHoursIndividual,
					},
				},
				tasks: {
					connect: data.tasksId.map(id => ({ id: id })),
				},
			},
		})

		return createdBankOffice
	}

	async getLeastLoadedOffice(taskIds: number) {
		const offices = await this.prisma.bankOffice.findMany({
			where: {
				tasks: {
					some: {
						id: {
							in: taskIds,
						},
					},
				},
			},
			select: {
				id: true,
				salePointName: true,
				address: true,
				currentTasks: {
					select: {
						task: true,
					},
				},
			},
		})

		let leastLoadedOffice = null
		let leastLoad = Number.MAX_VALUE

		for (const office of offices) {
			const currentTasks = office.currentTasks

			const totalLoad = currentTasks.reduce((load, currentTask) => {
				const durationString = currentTask.task[0].duration
				const durationMatch = durationString.match(/(\d+)\s*минут/)

				if (durationMatch) {
					const durationInMinutes = parseInt(durationMatch[1], 10)
					return load + durationInMinutes
				} else {
					return load
				}
			}, 0)

			if (totalLoad < leastLoad) {
				leastLoad = totalLoad
				leastLoadedOffice = office
			}
		}

		return leastLoadedOffice
	}
}
