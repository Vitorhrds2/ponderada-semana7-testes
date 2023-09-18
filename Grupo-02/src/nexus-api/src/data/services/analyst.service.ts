import { AnalystDto } from 'src/business/dtos/analyst.dto';
import { AnalystEntity } from 'src/business/entities/analyst.entity';
import { IAnalystService } from 'src/business/services/analyst-impl.service';
import { AnalystRepository } from '../repositories/analyst.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalystService implements IAnalystService {
  constructor(private readonly repository: AnalystRepository) {}

  public async findAllAnalysts(): Promise<AnalystEntity[]>{
    return await this.repository.findAll();
  }
  public async createAnalyst(analystDto: AnalystDto): Promise<AnalystEntity> {
    return await this.repository.create(analystDto);
  }
}
