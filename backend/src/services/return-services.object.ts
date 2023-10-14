import { Prisma } from '@prisma/client'

const select = {
	select: {
		serviceActivity: true,
		serviceCapability: true,
	},
}

export const ServicesObject: Prisma.ServicesSelect = {
	id: true,
	blind: select,
	qrRead: select,
	supportsChargeRub: select,
	supportsEur: select,
	supportsRub: select,
	supportsUsd: select,
	wheelchair: select,
	nfcForBankCards: select,
}
