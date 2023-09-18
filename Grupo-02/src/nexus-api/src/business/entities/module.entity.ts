import { StatusEnum } from "../enums/status.enum";

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
