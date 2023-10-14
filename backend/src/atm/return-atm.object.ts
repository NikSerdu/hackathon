import { Prisma } from '@prisma/client'

export const ATMObject: Prisma.ATMSelect = {
	id: true,
	address: true,
	allDay: true,
	latitude: true,
	longitude: true,
	Services: {
		select: {
			blind: true,
			qrRead: true,
			supportsChargeRub: true,
			supportsEur: true,
			supportsRub: true,
			supportsUsd: true,
			wheelchair: true,
			nfcForBankCards: true,
		},
	},
}
