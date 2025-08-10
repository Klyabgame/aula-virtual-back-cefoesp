import { Module } from '@nestjs/common';
import { PersonRoleService } from './person_role.service';
import { PersonRoleController } from './person_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRole } from './entities/person_role.entity';

@Module({
  controllers: [PersonRoleController],
  providers: [PersonRoleService],
  imports:[
    TypeOrmModule.forFeature([
      PersonRole
    ])
  ]
})
export class PersonRoleModule {}
