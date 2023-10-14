export class ServicesDTO {
	blind: ServiceDTO
	nfcForBankCards: ServiceDTO
	qrRead: ServiceDTO
	supportsChargeRub: ServiceDTO
	supportsEur: ServiceDTO
	supportsRub: ServiceDTO
	supportsUsd: ServiceDTO
	wheelchair: ServiceDTO
}

class ServiceDTO {
	serviceActivity: 'AVAILABLE' | 'UNAVAILABLE' | 'UNKNOWN'
	serviceCapability: 'SUPPORTED' | 'UNSUPPORTED' | 'UNKNOWN'
}
