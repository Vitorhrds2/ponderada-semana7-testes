import { InitiativeDto } from "../dtos/initiative.dto";
import { InitiativeEntity } from "../entities/initiative.entity";

export interface IInitiativeRepository {
  create(initiativeDto: InitiativeDto): Promise<InitiativeEntity>
  findAll(): Promise<InitiativeEntity[]>
}
