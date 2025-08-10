import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonRoleService } from './person_role.service';
import { CreatePersonRoleDto } from './dto/create-person_role.dto';
import { UpdatePersonRoleDto } from './dto/update-person_role.dto';

@Controller('person-role')
export class PersonRoleController {
  constructor(private readonly personRoleService: PersonRoleService) {}

  @Post()
  create(@Body() createPersonRoleDto: CreatePersonRoleDto) {
    return this.personRoleService.create(createPersonRoleDto);
  }

  @Get()
  findAll() {
    return this.personRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonRoleDto: UpdatePersonRoleDto) {
    return this.personRoleService.update(+id, updatePersonRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personRoleService.remove(+id);
  }
}
