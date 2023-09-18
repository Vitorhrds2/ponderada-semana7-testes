export interface LoginDto {
  readonly userType: UserType;
  readonly isConnected: true;
}

export enum UserType {
  partner = "partner",
  analyst = "analyst",
}
