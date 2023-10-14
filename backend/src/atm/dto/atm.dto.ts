import { Prisma } from '@prisma/client'
import { IsBoolean, IsNumber, IsString } from 'class-validator'
import { ServicesDTO } from 'src/services/dto/services.dto'
export class ATMDto implements Prisma.ATMCreateInput {
	@IsString()
	address: string
	@IsNumber()
	latitude: number
	@IsNumber()
	longitude: number
	@IsBoolean()
	allDay: boolean
	services: ServicesDTO
}

export class ATMDtoUpdate implements Prisma.ATMUpdateInput {
	@IsString()
	address: string
	@IsNumber()
	latitude: number
	@IsNumber()
	longitude: number
	@IsBoolean()
	allDay: boolean
	@IsNumber()
	servicesId: number
}
