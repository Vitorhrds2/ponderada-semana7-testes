import { Module } from '@nestjs/common';
import { InitiativeService } from '../services/initiative.service';
import { InitiativeRepository } from '../repositories/initiative.repository';
import { PrismaService } from '../prisma.service';
import { PartnerService } from '../services/partner.service';
import { PartnerRepository } from '../repositories/partner.repository';
import { ModuleService } from '../services/module.service';
import { ModuleRepository } from '../repositories/module.repository';
import { AnalystRepository } from '../repositories/analyst.repository';
import { AnalystService } from '../services/analyst.service';
import { CourseRepository } from '../repositories/course.repository';
import { CourseService } from '../services/course.service';
import { ClassRepository } from '../repositories/class.repository';
import { ClassService } from '../services/class.service';


@Module({
  providers: [
    InitiativeRepository,
    InitiativeService,
    ModuleService,
    ModuleRepository,
    PartnerService, 
    PartnerRepository,
    AnalystRepository,
    AnalystService,
    CourseRepository,
    CourseService,
    ClassRepository,
    ClassService,
    PrismaService
  ],
})
export class DataModule {}
