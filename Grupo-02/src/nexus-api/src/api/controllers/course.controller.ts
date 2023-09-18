import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";
import { ClassDto } from "src/business/dtos/class.dto";
import { CourseDto } from "src/business/dtos/course.dto";
import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { CourseEntity } from "src/business/entities/course.entity";
import { CourseService } from "src/data/services/course.service";

@Controller()
export class CourseController {

constructor(private readonly courseService: CourseService){}


    @Post('/course')
    public async createCourse(@Body() courseDto: CourseDto): Promise<CourseEntity> {
        return await this.courseService.createCourse(courseDto);
    }

    @Get('/courses')
    public async findAllCourses() {
        return await this.courseService.findAllCourses();
    }


    // @Put('/course/:courseId')
    // public async associateAInitiativeWithCourse(@Param('courseId') courseId: string, @Body() initiativeData: InitiativeDto, @Body() classData: ClassDto) {
    //     return await this.courseService.associateInitiativeToCourse(courseId, initiativeData, classData);
    // }
}