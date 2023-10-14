import { Prisma } from '@prisma/client'

export class BankOfficeDTO {
	salePointName: string
	address: string
	status: string
	hasRamp: boolean
	latitude: number
	longitude: number
	openHours: Prisma.OpenHoursCreateManyInput[]
	openHoursIndividual: Prisma.OpenHoursIndividualCreateManyInput[]
	tasksId: number[]
}
