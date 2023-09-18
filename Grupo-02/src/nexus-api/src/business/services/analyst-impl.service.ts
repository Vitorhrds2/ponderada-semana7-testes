import { AnalystDto } from "../dtos/analyst.dto"
import { AnalystEntity } from "../entities/analyst.entity"

export interface IAnalystService { 
    findAllAnalysts(): Promise<AnalystEntity[]>
    createAnalyst(analystDto: AnalystDto): Promise<AnalystEntity>
} 