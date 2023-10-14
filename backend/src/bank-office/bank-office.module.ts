import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BankOfficeController } from './bank-office.controller'
import { BankOfficeService } from './bank-office.service'

@Module({
	controllers: [BankOfficeController],
	providers: [BankOfficeService, PrismaService],
})
export class BankOfficeModule {}
