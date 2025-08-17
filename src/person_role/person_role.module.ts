import { Module } from '@nestjs/common';
import { PersonRoleService } from './person_role.service';
import { PersonRoleController } from './person_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRole } from './entities/person_role.entity';
import { PersonModule } from 'src/person/person.module';
import { RoleModule } from 'src/role/role.module';
import { Person } from 'src/person/entities/person.entity';
import { Role } from 'src/role/entities/role.entity';

@Module({
  controllers: [PersonRoleController],
  providers: [PersonRoleService],
  imports:[
    TypeOrmModule.forFeature([
      PersonRole,
      Person,
      Role
    ]),

  ]
})
export class PersonRoleModule {}
