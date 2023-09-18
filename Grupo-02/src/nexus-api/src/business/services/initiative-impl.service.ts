import { InitiativeDto } from "../dtos/initiative.dto"
import { InitiativeEntity } from "../entities/initiative.entity"

export interface IInitiativeService {
    createInitiatives(initiativeDto: InitiativeDto): Promise<InitiativeEntity>;
    findAllInitiatives(): Promise<InitiativeEntity[]>;
    findAllinitiativesAndModulesAssociated(): Promise<any[]>
}