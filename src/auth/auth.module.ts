import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Person } from 'src/person/entities/person.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
      TypeOrmModule.forFeature([
        Auth,Person
      ]),

      PassportModule.register({defaultStrategy: 'jwt' }),

      JwtModule.registerAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory:(configService:ConfigService)=>{

          return {
            secret: configService.get('JWT_SECRET'),
            signOptions:{
              expiresIn:'2h'
            }
          }
        }
      })

      /* JwtModule.register({
        secret:process.env.JWT_SECRET,
        signOptions:{
          expiresIn:'2h'
        }
      }) */
    ],
  exports:[TypeOrmModule]
})
export class AuthModule {}
