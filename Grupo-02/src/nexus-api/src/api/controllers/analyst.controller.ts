import { Controller, Get, Post, Body } from "@nestjs/common";
import { AnalystDto } from "src/business/dtos/analyst.dto";
import { AnalystEntity } from "src/business/entities/analyst.entity";
import { AnalystService } from "src/data/services/analyst.service";

@Controller()
export class AnalystController {
    constructor(private readonly analystService: AnalystService){}


    @Get('/analysts')
    public async findAllAnalysts(): Promise<AnalystEntity[]>{
        return await this.analystService.findAllAnalysts();
    }

    @Post('/analyst')
    public async createAnalysts(@Body() analystDto: AnalystDto): Promise<AnalystEntity> {
        return await this.analystService.createAnalyst(analystDto);
    }
}