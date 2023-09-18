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



// export interface InitiativeEntity {
//   readonly id: string;
//   readonly name: string;
//   readonly description: string;
//   readonly status: StatusEnum;
//   readonly idPartner: string;
//   readonly idModule: string;
//   readonly contact: string;
//   readonly skills: Skills[];
// }

// export enum StatusEnum {
//   Approved = "approved",
//   UnderAnalysis = "underAnalysis",
//   Denied = "denied",
//   underDevelopment= "underDevelopment"
// }

// export interface Skills {
//   description: string;
//   rate: number;
// }
