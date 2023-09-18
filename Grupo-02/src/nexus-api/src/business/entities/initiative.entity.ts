
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
