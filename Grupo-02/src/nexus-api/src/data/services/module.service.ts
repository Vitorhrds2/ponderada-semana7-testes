import { Injectable } from '@nestjs/common';
import { moduleQueries } from '../queries/module.queries';
import { ModuleDto } from 'src/business/dtos/module.dto';
import { ModuleEntity } from 'src/business/entities/module.entity';
import { IModuleService } from 'src/business/services/module-impl.service';
import { PrismaService } from '../prisma.service';
import { ModuleRepository } from '../repositories/module.repository';


@Injectable()
export class ModuleService implements IModuleService {
    constructor(private readonly prisma: PrismaService, private readonly repository: ModuleRepository) {}

    public async findAllModulesAndInitiativesAssociated(): Promise<any[]> {
        try {
          return await this.prisma.$queryRaw(
            moduleQueries.findAllModulesAndInitiatives,
          );
        } catch (error) {
          console.log(error);
          throw error;
        }
      }

   public async createModule(moduleDto: ModuleDto): Promise<ModuleEntity> {
    return await this.prisma.$queryRaw(moduleQueries.create(moduleDto));
    };
    public async findAllModules(): Promise<ModuleEntity[]> {
        return await this.repository.findAll();
      }

}

