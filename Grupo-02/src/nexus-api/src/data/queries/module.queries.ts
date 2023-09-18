import { Sql } from "@prisma/client/runtime/library";
import { ModuleDto } from "src/business/dtos/module.dto";
import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { Prisma } from "@prisma/client";
import { StatusEnum } from "src/business/enums/status.enum";
import * as uuid from 'uuid';

export const moduleQueries = {
    findAllModulesAndInitiatives: Prisma.sql`
    SELECT
    initiative.initiativeName AS initiative_name,
    module.moduleName AS module_name,
    initiative.status AS initiative_status
    FROM
    Initiative AS initiative
  INNER JOIN
    Module AS module ON initiative.moduleId = module.id;
    `,

    create: (moduleDto: ModuleDto): Sql => Prisma.sql`
        INSERT INTO "Module" ("id", "courseCode", "moduleName", "beginData", "isActive", "createdAt", "updatedAt", "status")
        VALUES (
            ${uuid.v4()},
            ${moduleDto.courseCode},
            ${moduleDto.moduleName},
            ${new Date()},
            ${moduleDto.isActive},
            ${new Date()},
            ${new Date()},
            ${moduleDto.status}
        )
        RETURNING *;
    `,
    findAll: Prisma.sql`
    SELECT * FROM "Module"
    WHERE "isActive" = true 
    `
}

export interface ModuleEntity { 
    readonly id: string;
    readonly courseCode: string;
    readonly moduleName: string;
    readonly beginData: Date;
    readonly isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly status: StatusEnum;
  }

