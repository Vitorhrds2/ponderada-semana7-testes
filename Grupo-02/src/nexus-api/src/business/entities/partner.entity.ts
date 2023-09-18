import { Partner } from "@prisma/client";

export interface PartnerEntity extends Partner {
   readonly id: string;
   readonly partnerName: string;
   readonly sector: string;
   readonly contactEmail: string;
   readonly contactPhone: string;
   readonly rateForProject: number;
   readonly branch: string;
   readonly representativeJob: string;
   readonly isActive: boolean;
   readonly createdAt: Date;
   readonly updatedAt: Date;
}