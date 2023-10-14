import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

const tasks = []
const createTasks = async quantity => {
	for (let index = 0; index < quantity; index++) {
		const task = await prisma.task.create({
			data: {
				name: faker.lorem.words(3),
				duration: `${faker.datatype.number({ min: 1, max: 60 })} минут`,
			},
		})
		tasks.push(task.id)
	}
	console.log(`Created bank tasks`)
}

const offices = []
const createBankOffices = async quantity => {
	for (let index = 0; index < quantity; index++) {
		const arrTasksId = []
		for (
			let i = 0;
			i < faker.datatype.number({ min: 1, max: tasks.length });
			i++
		) {
			const id = faker.datatype.number({ min: tasks[0], max: tasks.at(-1) })
			arrTasksId.push(id)
		}

		const bankOffice = await prisma.bankOffice.create({
			data: {
				salePointName: faker.lorem.word(),
				address: faker.address.streetAddress(),
				status: 'Открыт',
				hasRamp: faker.datatype.boolean(),
				latitude: +faker.address.latitude(),
				longitude: +faker.address.longitude(),
				openHours: {
					createMany: {
						data: [
							{ days: 'Пн-Пт', hours: '09:00 - 17:00' },
							{ days: 'Сб', hours: '10:00 - 14:00' },
						],
					},
				},
				openHoursIndividual: {
					createMany: {
						data: [{ days: 'Вс', hours: '12:00 - 16:00' }],
					},
				},
				tasks: {
					connect: arrTasksId.map(id => ({ id: id })),
				},
			},
		})
		offices.push(bankOffice.id)
	}
	console.log(`Created bank offices`)
}

const createCurrentTasks = async quantity => {
	for (let index = 0; index < quantity; index++) {
		const currentTask = await prisma.currentTask.create({
			data: {
				BankOffice: {
					connect: {
						id: offices[faker.datatype.number({ min: 0, max: 9 })],
					},
				},
				task: {
					connect: {
						id: tasks[faker.datatype.number({ min: 0, max: 9 })],
					},
				},
			},
		})
	}

	for (let index = 0; index < 5; index++) {
		const currentTask = await prisma.currentTask.create({
			data: {
				BankOffice: {
					connect: {
						id: offices[faker.datatype.number({ min: 0, max: 9 })],
					},
				},
				task: {
					connect: {
						id: tasks[faker.datatype.number({ min: 0, max: 9 })],
					},
				},
			},
		})
	}

	console.log(`Created current tasks`)
}

async function main() {
	console.log('Start seeding...')
	await createTasks(10)
	await createBankOffices(10)
	await createCurrentTasks(10)
}

main()
	.catch(e => console.log(e))
	.finally(async () => {
		await prisma.$disconnect()
	})
