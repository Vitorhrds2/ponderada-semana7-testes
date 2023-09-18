import { Partner } from "@prisma/client";


export interface PartnerDto extends Partner {
    partnerName: string;
    sector: string;
    contactEmail: string;
    contactPhone: string;
    rateForProject: number;
    password: string;
    branch: string;
    representativeJob: string;
}