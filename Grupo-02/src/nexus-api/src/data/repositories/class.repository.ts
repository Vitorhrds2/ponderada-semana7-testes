import { Injectable } from "@nestjs/common";
import { ClassDto } from "src/business/dtos/class.dto";
import { ClassEntity } from "src/business/entities/class.entity";
import { IClassRepository } from "src/business/repositories/class-impl.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ClassRepository implements IClassRepository{

constructor(private readonly prisma: PrismaService){}

   public async create(classDto: ClassDto): Promise<ClassEntity> {
    const classCreated = await this.prisma.class.create({
        data: {
            ...classDto
        }
    });

    return classCreated;
    }
    public async  findAll(): Promise<ClassEntity[]> {
        return await this.prisma.class.findMany({
            include:{
                course: true,
            }
        });
    }

}