import { Prisma } from "@prisma/client";
import { Sql } from "@prisma/client/runtime/library";
import { AnalystDto } from "src/business/dtos/analyst.dto";
import * as uuid from 'uuid'; 


export const analystQueries = {
    findAll: Prisma.sql`
    SELECT * FROM "Analyst"
    WHERE "isActive" = true;
    `,
    create: (analystDto: AnalystDto): Sql => Prisma.sql`
    INSERT INTO "Analyst" (
        "id",
        "name",
        "password",
        "email",
        "role",
        "isActive",
        "updatedAt"
    )
    VALUES (
        ${uuid.v4()},
        ${analystDto.name},
        ${analystDto.password},
        ${analystDto.email},
        ${analystDto.role},
        ${true},
        ${new Date()}
    )
    RETURNING *;
    `,
};
