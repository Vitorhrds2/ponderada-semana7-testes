import { Prisma } from '@prisma/client';
import { Sql } from '@prisma/client/runtime/library';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
import * as uuid from 'uuid';

export const initiativeQueries = {
  findAllInitiativesAndModules: Prisma.sql`
    SELECT
    module.moduleName AS module_name,
    initiative.initiativeName AS initiative_name,
    module.status AS module_status
  FROM
    Module AS module
  INNER JOIN
    Initiative AS initiative ON module.id = initiative.module_id;
    `,

  create: (iniativeDto: InitiativeDto): Sql => Prisma.sql`
    INSERT INTO "Initiative" (
      "id",
      "initiativeName",
      "scope",
      "partnerId",
      "moduleId",
      "courseId",
      "isActive",
      "updatedAt"
  )
  VALUES (
      ${uuid.v4()},
      ${iniativeDto.initiativeName},
      ${iniativeDto.scope},
      ${iniativeDto.partnerId},
      ${iniativeDto.moduleId},
      ${iniativeDto.courseId},
      ${true},
      ${new Date()}
  )
  RETURNING *; `,

  findAll: Prisma.sql`
  SELECT * FROM "Initiative"
  WHERE "isActive" = true 
  `
};


export interface InitiativeEntity { 
  readonly id: string;
  readonly initiativeName: string;
  readonly scope: string;
  readonly partnerId: string;
  readonly moduleId: string;
  readonly courseId: string;
  readonly isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
