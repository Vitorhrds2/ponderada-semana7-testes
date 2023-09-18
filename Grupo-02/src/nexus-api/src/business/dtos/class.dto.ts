import { Class } from "@prisma/client";

export interface ClassDto{
    customerName: string;
    startYear: Date;
    courseId: string;
}
