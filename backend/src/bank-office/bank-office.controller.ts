import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { BankOfficeService } from './bank-office.service'

@Controller('bank-office')
export class BankOfficeController {
	constructor(private readonly bankOfficeService: BankOfficeService) {}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.bankOfficeService.getById(+id)
	}
	@Get()
	async getAll() {
		return this.bankOfficeService.getAll()
	}

	@Post()
	async create(@Body() dto) {
		return this.bankOfficeService.create(dto)
	}

	@Get('/find/:taskId')
	async getMin(@Param('taskId') taskId: string) {
		return this.bankOfficeService.getLeastLoadedOffice(+taskId)
	}
}
