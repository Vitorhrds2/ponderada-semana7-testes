import { Controller, Get, Post, Put, Body, Param } from "@nestjs/common";
import { ClassDto } from "src/business/dtos/class.dto";
import { CourseDto } from "src/business/dtos/course.dto";
import { ClassEntity } from "src/business/entities/class.entity";
import { CourseEntity } from "src/business/entities/course.entity";
import { CourseService } from "src/data/services/course.service";
import { ClassService } from "src/data/services/class.service";

@Controller()
export class ClassController {

constructor(private readonly classService: ClassService){}


    @Post('/class')
    public async createClass(@Body() classDto: ClassDto): Promise<ClassEntity> {
        return await this.classService.createClass(classDto);
    }

    @Get('/classes')
    public async findAllClasses() {
        return await this.classService.findAllClasses();
    }


    // @Put('/course/:courseId')
    // public async associateAInitiativeWithCourse(@Param('courseId') courseId: string, @Body() initiativeData: InitiativeDto, @Body() classData: ClassDto) {
    //     return await this.courseService.associateInitiativeToCourse(courseId, initiativeData, classData);
    // }
}