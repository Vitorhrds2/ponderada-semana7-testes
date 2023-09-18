import { Injectable } from "@nestjs/common";
import { ClassEntity } from "src/business/entities/class.entity";
import { IClassService } from "src/business/services/class-impl.service";
import { ClassRepository } from "../repositories/class.repository";
import { ClassDto } from "src/business/dtos/class.dto";
import { PrismaService } from "../prisma.service";
import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { CourseDto } from "src/business/dtos/course.dto";



@Injectable()
export class ClassService implements IClassService{

constructor(private readonly repository: ClassRepository, private readonly prisma: PrismaService){}


  public async createClass(classDto: ClassDto): Promise<ClassEntity> {
    return await this.repository.create(classDto);
    }
    public async   findAllClasses(): Promise<ClassEntity[]> {
        return await this.repository.findAll();
    }


          
}