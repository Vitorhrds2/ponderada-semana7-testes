import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { ILoginService } from "src/business/services/login-impl.service";

@Injectable()
export class LoginService implements ILoginService {

    constructor(private readonly prisma: PrismaService) {}

    public async login(credentials: { email: string, password: string }): Promise<object> {
        const { email, password } = credentials;

        if (!email || typeof email !== 'string') {
            throw new NotFoundException('Invalid email');
        }

        const isAnalyst = email.endsWith("@sou.inteli.edu.br");

        if (isAnalyst) {
            const userFound = await this.prisma.analyst.findFirst({
                where: {
                    email: email,
                    password: password,
                }
            });

            if (!userFound) {
                throw new NotFoundException('ANALYST not found');
            }

            return {
                userType: "analyst",
                isConnected: true,
            };
        } else {
            const userFound = await this.prisma.partner.findFirst({
                where: {
                    contactEmail: email,
                    password: password
                },
            });

            if (!userFound) {
                throw new NotFoundException('PARTNER not found');
            }

            return {
                userType: "partner",
                isConnected: true,
            };
        }
    }
}
