import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IPartnerRepository } from 'src/business/repositories/partner-impl.repository';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerEntity } from 'src/business/entities/partner.entity';
import { partnerQueries } from '../queries/partner.queries';
@Injectable()
export class PartnerRepository implements IPartnerRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(): Promise<PartnerEntity[]> {
    return await this.prisma.$queryRaw(partnerQueries.findAll);
  }

  public async create(partnerDto: PartnerDto): Promise<PartnerEntity> {
    return await this.prisma.$queryRaw(partnerQueries.create(partnerDto));
  }
  public async update(partnerDto: PartnerDto,id: string): Promise<PartnerEntity> {
    return await this.prisma.$queryRaw(partnerQueries.update(partnerDto, id));
  }
  public async delete(id: string): Promise<PartnerEntity> {
    return await this.prisma.$queryRaw(partnerQueries.delete(id));
  }
}
