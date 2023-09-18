import { ModuleDto } from "../dtos/module.dto";
import { ModuleEntity } from "../entities/module.entity";


export interface IModuleService {
    createModule(moduleDto: ModuleDto): Promise<ModuleEntity>;
    findAllModules(): Promise<ModuleEntity[]>;
    findAllModulesAndInitiativesAssociated(): Promise<any[]>
}