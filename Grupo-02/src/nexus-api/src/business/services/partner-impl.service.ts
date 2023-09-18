import { PartnerDto } from "../dtos/partner.dto"
import { PartnerEntity } from "../entities/partner.entity"

export interface IPartnerService {
    getAllPartners(): Promise<PartnerEntity[]>
    createPartner(partnerDto: PartnerDto): Promise<PartnerEntity>
    updatePartner(partnerDto: PartnerDto, id: string): Promise<PartnerEntity>
    deletePartner(id: string): Promise<PartnerEntity>
}
