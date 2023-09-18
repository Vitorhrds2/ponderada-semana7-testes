import { Injectable } from "@nestjs/common";
import { CourseEntity } from "src/business/entities/course.entity";
import { ICourseService } from "src/business/services/course-impl.service";
import { CourseRepository } from "../repositories/course.repository";
import { CourseDto } from "src/business/dtos/course.dto";
import { PrismaService } from "../prisma.service";
import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { ClassDto } from "src/business/dtos/class.dto";



@Injectable()
export class CourseService implements ICourseService{

constructor(private readonly repository: CourseRepository, private readonly prisma: PrismaService){}


  public async createCourse(courseDto: CourseDto): Promise<CourseEntity> {
    return await this.repository.create(courseDto);
    }
    public async   findAllCourses(): Promise<CourseEntity[]> {
        return await this.repository.findAll();
    }

    public async associateInitiativeToCourse(courseId: string, initiativeData: InitiativeDto, classData: ClassDto): Promise<CourseEntity> {
        const course = await this.prisma.course.findUnique({
          where: {
            id: courseId,
          },
        });
      
        if (!course) {
          throw new Error(`Curso com o ID ${courseId} não encontrado.`);
        }
      
        const initiativeCreated = await this.prisma.initiative.create({
          data: {
            ...initiativeData,
            courseId: course.id,
          },
        });
      
        const classCreated = await this.prisma.class.create({
          data: {
            ...classData,
            courseId: course.id,
          },
        });
      
        const updatedCourse = await this.prisma.course.update({
          where: {
            id: courseId,
          },
          data: {
            initiatives: {
              connect: {
                id: initiativeCreated.id,
              },
            },
            classes: {
              connect: {
                id: classCreated.id,
              },
            },
          },
          include: {
            modules: true,
            classes: true,
            initiatives: true,
          },
        });
      
        return updatedCourse;
      }
          
}