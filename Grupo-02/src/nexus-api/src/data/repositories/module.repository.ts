import { Injectable } from '@nestjs/common';
import { ModuleDto } from "src/business/dtos/module.dto";
import { ModuleEntity } from "src/business/entities/module.entity";
import { IModuleRepository } from "src/business/repositories/module-impl.repository";
import { PrismaService } from "../prisma.service";
import { moduleQueries } from "../queries/module.queries";
@Injectable()
export class ModuleRepository implements IModuleRepository{

    constructor(private readonly prisma: PrismaService){}

    public async create(moduleDto: ModuleDto): Promise<ModuleEntity[]> {
        return await this.prisma.$queryRaw(moduleQueries.create(moduleDto));
    }
   
    public async findAll(): Promise<ModuleEntity[]>{
        return await this.prisma.$queryRaw(moduleQueries.findAll);
      }
}

