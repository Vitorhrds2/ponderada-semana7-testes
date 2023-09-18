import { AnalystDto } from 'src/business/dtos/analyst.dto';
import { AnalystEntity } from 'src/business/entities/analyst.entity';
import { IAnalystRepository } from 'src/business/repositories/analyst-impl.repository';
import { PrismaService } from '../prisma.service';
import { analystQueries } from '../queries/analyst.queries';
import { Injectable } from '@nestjs/common';


@Injectable()
export class AnalystRepository implements IAnalystRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(): Promise<AnalystEntity[]> {
    return await this.prisma.$queryRaw(analystQueries.findAll);
  }
  public async create(dto: AnalystDto): Promise<AnalystEntity> {
    return await this.prisma.$queryRaw(analystQueries.create(dto));
  }
}
