import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ServicesDTO } from './dto/services.dto'
import { ServicesService } from './services.service'

@Controller('services')
export class ServicesController {
	constructor(private readonly servicesService: ServicesService) {}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.servicesService.getById(+id)
	}
	@Get()
	async getAll() {
		return this.servicesService.getAll()
	}

	@Post()
	async create(@Body() dto: ServicesDTO) {
		return this.servicesService.create(dto)
	}
}
