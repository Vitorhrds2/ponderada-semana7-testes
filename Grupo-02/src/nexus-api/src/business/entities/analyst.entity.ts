import { Analyst } from '@prisma/client';

export interface AnalystEntity extends Analyst {
  readonly id: string;
  readonly name: string;
  readonly password: string;
  readonly email: string;
  readonly role: string;
  readonly isActive: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
