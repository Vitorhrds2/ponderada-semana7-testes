import { Injectable, Controller, Post, Body } from "@nestjs/common";
import { PartnerDto } from "src/business/dtos/partner.dto";
import { LoginService } from "src/data/services/login.service";

@Injectable()
@Controller()
export class LoginController {

constructor(private readonly  loginService: LoginService){}

    @Post('/login')
    public async Login(@Body() credentials: { email: string, password: string }): Promise<object> {
        const credentialsToLogin = credentials;
        return await this.loginService.login(credentialsToLogin);
    }
}