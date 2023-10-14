import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CurrentTaskService } from './current-task.service'
import { CurrentTaskDTO } from './dto/current-task.dto'

@Controller('current-task')
export class CurrentTaskController {
	constructor(private readonly currentTaskService: CurrentTaskService) {}

	@Get(':id')
	async getByOfficeId(@Param('id') id: string) {
		return this.currentTaskService.getByOfficeId(+id)
	}

	@Post()
	async create(@Body() dto: CurrentTaskDTO) {
		return this.currentTaskService.addForOffice(dto)
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.currentTaskService.deleteForOffice(+id)
	}
}
