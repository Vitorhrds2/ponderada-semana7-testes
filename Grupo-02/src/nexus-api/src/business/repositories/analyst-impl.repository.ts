import { AnalystDto } from "../dtos/analyst.dto"
import { AnalystEntity } from "../entities/analyst.entity"

export interface IAnalystRepository {
    findAll(): Promise<AnalystEntity[]>
    create(dto: AnalystDto): Promise<AnalystEntity>;
}