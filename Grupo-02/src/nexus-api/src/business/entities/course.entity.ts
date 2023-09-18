export interface CourseEntity {
    readonly id: string;
    readonly courseType: string;
    readonly director: string;
    readonly isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}