import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { AtmService } from './atm.service'
import { ATMDto } from './dto/atm.dto'

@Controller('atm')
export class AtmController {
	constructor(private readonly atmService: AtmService) {}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.atmService.getById(+id)
	}
	@Get()
	async getAll() {
		return this.atmService.getAll()
	}

	@Post()
	async create(@Body() dto: ATMDto) {
		return this.atmService.create(dto)
	}
}
