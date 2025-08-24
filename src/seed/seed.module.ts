import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PersonModule } from 'src/person/person.module';
import { RoleModule } from 'src/role/role.module';
import { PersonRoleModule } from 'src/person_role/person_role.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
    PersonModule,
    RoleModule,
    PersonRoleModule
  ]
})
export class SeedModule {}
