import { Injectable } from '@nestjs/common';
import { IPartnerService } from 'src/business/services/partner-impl.service';
import { PartnerEntity } from 'src/business/entities/partner.entity';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerRepository } from '../repositories/partner.repository';

@Injectable()
export class PartnerService implements IPartnerService {
  constructor(private readonly repository: PartnerRepository) {}

  public async getAllPartners(): Promise<PartnerEntity[]> {
    return await this.repository.findAll();
  }
  public async createPartner(partnerDto: PartnerDto): Promise<PartnerEntity> {
    return await this.repository.create(partnerDto);
  }
  public async updatePartner(
    partnerDto: PartnerDto,
    id: string,
  ): Promise<PartnerEntity> {
    return await this.repository.update(partnerDto, id);
  }
  public async deletePartner(id: string): Promise<PartnerEntity> {
    return await this.repository.delete(id);
  }
}
