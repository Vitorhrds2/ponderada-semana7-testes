import { PartnerDto } from "../dtos/partner.dto";

export interface ILoginService{
    login(credentials: { email: string, password: string }): Promise<object> 
}