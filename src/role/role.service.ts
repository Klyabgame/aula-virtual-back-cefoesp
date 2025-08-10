import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { errorResponse } from 'src/helper';

@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ) { }


  async create(createRoleDto: CreateRoleDto) {
    try {
      const createRole = this.roleRepository.create(createRoleDto);
      return await this.roleRepository.save(createRole);
    } catch (error) {
      errorResponse.errors(error,'Error Creating Role','No se pudo crear el Rol');
    }
  }

  findAll() {
    try {
      return this.roleRepository.find();
    } catch (error) {
      errorResponse.errors(error,'Error Find Role','No se pudo encontrar datos de los roles')
    }
  }


  async findOne(id: string) {
    try {
      if (!id) throw new BadRequestException('ingrese el id correctamente');
      const findRole = await this.roleRepository.findOneBy({id:id});
      if(!findRole) throw new BadRequestException('Id No Encontrado');
      return findRole;
    } catch (error) {
      errorResponse.errors(error,'Error Find Role','No se pudo encontrar datos del rol')
    }
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    try {
      await this.findOne(id);
      return this.roleRepository.update(id,updateRoleDto);
    } catch (error) {
      errorResponse.errors(error,'Error Update Role','No se pudo Actualizar los datos del Rol');
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      const deleteRole= this.roleRepository.delete(id);
      return {message:'Rol eliminado correctamente',deleteRole};
      
    } catch (error) {
      errorResponse.errors(error,'Error delete Role','No se pudo eliminar los datos del Rol');
    }
  }
}
