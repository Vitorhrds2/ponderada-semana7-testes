import { ClassDto } from "../dtos/class.dto";
import { ClassEntity } from "../entities/class.entity"

export interface IClassService{
    createClass(classDto: ClassDto): Promise<ClassEntity>;
    findAllClasses():Promise<ClassEntity[]>
}