import { Prisma } from '@prisma/client'

export const BankOfficeObject: Prisma.BankOfficeSelect = {
	id: true,
	address: true,
	hasRamp: true,
	latitude: true,
	longitude: true,
	openHours: true,
	openHoursIndividual: true,
	tasks: {
		select: {
			id: true,
			name: true,
			duration: true,
		},
	},
	currentTasks: {
		select: {
			task: {
				select: {
					id: true,
					name: true,
					duration: true,
				},
			},
		},
	},
}
