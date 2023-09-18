import { Injectable } from "@nestjs/common";
import { CourseDto } from "src/business/dtos/course.dto";
import { CourseEntity } from "src/business/entities/course.entity";
import { ICourseRepository } from "src/business/repositories/course-impl.repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class CourseRepository implements ICourseRepository{

constructor(private readonly prisma: PrismaService){}

   public async create(courseDto: CourseDto): Promise<CourseEntity> {
    const courseCreated = await this.prisma.course.create({
        data: {
            ...courseDto
        }
    });

    return courseCreated;
    }
    public async  findAll(): Promise<CourseEntity[]> {
        return await this.prisma.course.findMany({
            include:{
                modules: true,
                classes: true,
                initiatives: true,
            }
        });
    }

}