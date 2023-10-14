import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CurrentTaskDTO } from './dto/current-task.dto'

@Injectable()
export class CurrentTaskService {
	constructor(private prisma: PrismaService) {}

	async getByOfficeId(officeId: number) {
		return this.prisma.currentTask.findMany({
			where: {
				bankOfficeId: officeId,
			},
			include: {
				task: true,
			},
		})
	}

	async addForOffice(dto: CurrentTaskDTO) {
		return this.prisma.currentTask.create({
			data: {
				BankOffice: {
					connect: {
						id: dto.officeId,
					},
				},
				task: {
					connect: {
						id: dto.taskId,
					},
				},
			},
		})
	}

	async deleteForOffice(id: number) {
		return this.prisma.currentTask.delete({
			where: {
				id,
			},
		})
	}
}
