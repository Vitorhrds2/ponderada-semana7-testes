import { Module } from '@nestjs/common';
import { PrismaService } from 'src/data/prisma.service';
import { PartnerService } from 'src/data/services/partner.service';
import { PartnerRepository } from 'src/data/repositories/partner.repository';
import { PartnerController } from '../controllers/partner.controller';
import { LoginController } from '../controllers/login.controller';
import { LoginService } from 'src/data/services/login.service';
import { ModuleController } from '../controllers/module.controller';
import { AnalystController } from '../controllers/analyst.controller';
import { InitiativeRepository } from 'src/data/repositories/initiative.repository';
import { InitiativeService } from 'src/data/services/initiative.service';
import { ModuleService } from 'src/data/services/module.service';
import { ModuleRepository } from 'src/data/repositories/module.repository';
import { AnalystService } from 'src/data/services/analyst.service';
import { AnalystRepository } from 'src/data/repositories/analyst.repository';
import { InitiativeController } from '../controllers/initiative.controller';
import { CourseController } from '../controllers/course.controller';
import { CourseRepository } from 'src/data/repositories/course.repository';
import { CourseService } from 'src/data/services/course.service';
import { ClassController } from '../controllers/class.controller';
import { ClassRepository } from 'src/data/repositories/class.repository';
import { ClassService } from 'src/data/services/class.service';

@Module({
  controllers: [
    PartnerController,
    LoginController,
    ModuleController,
    AnalystController,
    InitiativeController, 
    CourseController,
    ClassController
  ],
  providers: [
    InitiativeRepository,
    InitiativeService,
    ModuleService,
    ModuleRepository,
    PartnerService,
    PartnerRepository,
    PrismaService,
    LoginService,
    AnalystService,
    AnalystRepository,
    CourseRepository,
    CourseService,
    ClassRepository,
    ClassService
  ],
})
export class ApiModule {}
