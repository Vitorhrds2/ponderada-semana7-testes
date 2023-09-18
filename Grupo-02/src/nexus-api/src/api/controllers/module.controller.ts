import { Injectable, Controller, Get, Post, Put, Body } from '@nestjs/common';
import { ModuleDto } from 'src/business/dtos/module.dto';
import { InitiativeService } from 'src/data/services/initiative.service';
import { ModuleService } from 'src/data/services/module.service';
import { ModuleEntity } from "src/business/entities/module.entity";


@Injectable()
@Controller()
export class ModuleController {
  constructor(
    private readonly initiativesServices: InitiativeService,
    private readonly moduleService: ModuleService,
  ) {}

  @Get('/alocation')
  public async findAllModules(): Promise<ModuleEntity[]> {
    return await this.moduleService.findAllModules();
}
  

  @Post('/module')
  public async createModule(@Body() moduleDto: ModuleDto) {
    return await this.moduleService.createModule(moduleDto);
  }

  @Put()
  public async updateModuleInformations() {
    return;
  }

  @Get('/initiativesAndModules')
  public async findAllModulesAndinitiativesAssociated() {
    return await this.initiativesServices.findAllinitiativesAndModulesAssociated();
  }
}
