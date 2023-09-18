import { Controller, Injectable, Post, Get, Body } from "@nestjs/common";
import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { InitiativeEntity } from "src/business/entities/initiative.entity";
import { InitiativeService } from "src/data/services/initiative.service";

@Injectable()
@Controller()
export class InitiativeController {
    constructor(private readonly initiativeService: InitiativeService){}

    @Get('/initiatives')
    public async findAllInitiatives(): Promise<InitiativeEntity[]> {
        return await this.initiativeService.findAllInitiatives();
    }

    @Post('/initiative')
    public async createInitiative(@Body() initiativeDto: InitiativeDto): Promise<InitiativeEntity> {
        return await this.initiativeService.createInitiatives(initiativeDto);
    }

}