import { Injectable } from '@nestjs/common';
import { initiativeQueries } from '../queries/initiative.queries';
import { PrismaService } from '../prisma.service';
import { IInitiativeService } from 'src/business/services/initiative-impl.service';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
import { InitiativeEntity } from 'src/business/entities/initiative.entity';
import { InitiativeRepository } from '../repositories/initiative.repository';

@Injectable()
export class InitiativeService implements IInitiativeService {
  constructor(private readonly prisma: PrismaService, private readonly repository: InitiativeRepository) {}

  public async findAllinitiativesAndModulesAssociated(): Promise<any[]> {
    try {
      return await this.prisma.$queryRaw(
        initiativeQueries.findAllInitiativesAndModules,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async createInitiatives(
    initiativeDto: InitiativeDto,
  ): Promise<InitiativeEntity> {
    return await this.repository.create(initiativeDto); 
  }
  public async findAllInitiatives(): Promise<InitiativeEntity[]> {
    return await this.repository.findAll();
  }
}
