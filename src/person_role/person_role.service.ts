import { Injectable } from '@nestjs/common';
import { CreatePersonRoleDto } from './dto/create-person_role.dto';
import { UpdatePersonRoleDto } from './dto/update-person_role.dto';

@Injectable()
export class PersonRoleService {
  create(createPersonRoleDto: CreatePersonRoleDto) {
    return 'This action adds a new personRole';
  }

  findAll() {
    return `This action returns all personRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personRole`;
  }

  update(id: number, updatePersonRoleDto: UpdatePersonRoleDto) {
    return `This action updates a #${id} personRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} personRole`;
  }
}
