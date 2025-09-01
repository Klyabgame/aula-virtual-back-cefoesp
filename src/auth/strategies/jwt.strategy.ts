import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Auth } from "../entities/auth.entity";
import { JwtPayload } from "../interface/jtw-payload.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwsStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(Auth)
        private readonly userRepository: Repository<Auth>,

        configService: ConfigService
    ) {

        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayload): Promise<Auth> {

        const { user } = payload;

        const usertoken = await this.userRepository.findOneBy({user});

        if(!usertoken) throw new UnauthorizedException('Token not valid');

        if(!usertoken.isActive) throw new UnauthorizedException('User is inactive, talk with an admin');

        return usertoken;

    }
}