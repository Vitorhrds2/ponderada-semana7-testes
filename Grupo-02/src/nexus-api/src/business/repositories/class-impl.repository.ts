import { ClassDto } from "../dtos/class.dto"
import { ClassEntity } from "../entities/class.entity"

export interface IClassRepository {
    findAll(): Promise<ClassEntity[]>
}