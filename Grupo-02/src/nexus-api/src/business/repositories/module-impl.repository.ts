import { ModuleDto } from "../dtos/module.dto";
import { ModuleEntity } from "../entities/module.entity";


export interface IModuleRepository {
  create(moduleDto: ModuleDto): Promise<ModuleEntity[]>
  findAll(): Promise<ModuleEntity[]>
}
