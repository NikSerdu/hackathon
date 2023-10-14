import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

const createATMsAndServices = async quantity => {
	const atms = []
	for (let i = 0; i < quantity; i++) {
		const atm = await prisma.aTM.create({
			data: {
				address: faker.address.streetAddress(),
				latitude: +faker.address.latitude(),
				longitude: +faker.address.longitude(),
				allDay: faker.datatype.boolean(),
				Services: {
					create: {
						wheelchair: {
							create: {
								serviceCapability: 'SUPPORTED',
								serviceActivity: 'AVAILABLE',
							},
						},
						blind: {
							create: {
								serviceCapability: 'UNKNOWN',
								serviceActivity: 'UNKNOWN',
							},
						},
						nfcForBankCards: {
							create: {
								serviceCapability: 'SUPPORTED',
								serviceActivity: 'UNKNOWN',
							},
						},
						qrRead: {
							create: {
								serviceCapability: 'UNKNOWN',
								serviceActivity: 'AVAILABLE',
							},
						},
						supportsUsd: {
							create: {
								serviceCapability: 'UNSUPPORTED',
								serviceActivity: 'UNKNOWN',
							},
						},
						supportsChargeRub: {
							create: {
								serviceCapability: 'UNKNOWN',
								serviceActivity: 'UNKNOWN',
							},
						},
						supportsEur: {
							create: {
								serviceCapability: 'UNKNOWN',
								serviceActivity: 'UNKNOWN',
							},
						},
						supportsRub: {
							create: {
								serviceCapability: 'UNKNOWN',
								serviceActivity: 'UNKNOWN',
							},
						},
					},
				},
			},
		})
		atms.push(atm)
	}
	console.log(`Created ${atms.length} ATMs`)
}

async function main() {
	console.log('Start seeding...')
	await createATMsAndServices(10)
}

main()
	.catch(e => console.log(e))
	.finally(async () => {
		await prisma.$disconnect()
	})
