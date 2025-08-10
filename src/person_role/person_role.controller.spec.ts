import { Test, TestingModule } from '@nestjs/testing';
import { PersonRoleController } from './person_role.controller';
import { PersonRoleService } from './person_role.service';

describe('PersonRoleController', () => {
  let controller: PersonRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonRoleController],
      providers: [PersonRoleService],
    }).compile();

    controller = module.get<PersonRoleController>(PersonRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
