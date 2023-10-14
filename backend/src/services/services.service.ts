import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ServicesDTO } from './dto/services.dto'
import { ServicesObject } from './return-services.object'

@Injectable()
export class ServicesService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.services.findMany({
			select: ServicesObject,
		})
	}

	async getById(id: number) {
		return this.prisma.services.findUnique({
			where: {
				id,
			},
			select: {
				...ServicesObject,
			},
		})
	}

	async create(dto: ServicesDTO) {
		return this.prisma.services.create({
			data: {
				blind: {
					create: {
						serviceActivity: dto.blind.serviceActivity,
						serviceCapability: dto.blind.serviceCapability,
					},
				},
				nfcForBankCards: {
					create: {
						serviceActivity: dto.nfcForBankCards.serviceActivity,
						serviceCapability: dto.nfcForBankCards.serviceCapability,
					},
				},
				qrRead: {
					create: {
						serviceActivity: dto.qrRead.serviceActivity,
						serviceCapability: dto.qrRead.serviceCapability,
					},
				},
				supportsChargeRub: {
					create: {
						serviceActivity: dto.supportsChargeRub.serviceActivity,
						serviceCapability: dto.supportsChargeRub.serviceCapability,
					},
				},
				supportsEur: {
					create: {
						serviceActivity: dto.supportsEur.serviceActivity,
						serviceCapability: dto.supportsEur.serviceCapability,
					},
				},
				supportsRub: {
					create: {
						serviceActivity: dto.supportsRub.serviceActivity,
						serviceCapability: dto.supportsRub.serviceCapability,
					},
				},
				supportsUsd: {
					create: {
						serviceActivity: dto.supportsUsd.serviceActivity,
						serviceCapability: dto.supportsUsd.serviceCapability,
					},
				},
				wheelchair: {
					create: {
						serviceActivity: dto.wheelchair.serviceActivity,
						serviceCapability: dto.wheelchair.serviceCapability,
					},
				},
			},
		})
	}
}
