import { StatusEnum } from "../enums/status.enum";

export interface ModuleDto{
    readonly courseCode: string;
    readonly moduleName: string;
    readonly beginData: Date;
    readonly isActive: boolean;
    readonly status: StatusEnum;
}