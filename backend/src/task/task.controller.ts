import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TaskDTO, TaskDTOUpdate } from './dto/task.dto'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get(':id')
	async getByOfficeId(@Param('id') id: string) {
		return this.taskService.getByOfficeId(+id)
	}
	@Get()
	async getAll() {
		return this.taskService.getAll()
	}

	@Post()
	async create(@Body() dto: TaskDTO) {
		return this.taskService.create(dto)
	}
	@Put()
	async addTaskForOffice(@Body() dto: TaskDTOUpdate) {
		return this.taskService.addTaskForOffice(dto)
	}
}
