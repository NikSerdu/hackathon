import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TaskDTO, TaskDTOUpdate } from './dto/task.dto'

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.task.findMany({
			select: {
				id: true,
				name: true,
				duration: true,
			},
		})
	}

	async getByOfficeId(officeId: number) {
		return this.prisma.task.findMany({
			where: {
				bankOffice: {
					some: {
						id: officeId,
					},
				},
			},
		})
	}

	async create(dto: TaskDTO) {
		return this.prisma.task.create({
			data: {
				name: dto.name,
				duration: dto.duration,
			},
		})
	}

	async addTaskForOffice(dto: TaskDTOUpdate) {
		return this.prisma.task.update({
			where: {
				id: dto.taskId,
			},
			data: {
				bankOffice: {
					connect: {
						id: dto.officeId,
					},
				},
			},
		})
	}
}
