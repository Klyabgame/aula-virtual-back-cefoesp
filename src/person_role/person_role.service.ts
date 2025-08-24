import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonRoleDto } from './dto/create-person_role.dto';
import { UpdatePersonRoleDto } from './dto/update-person_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRole } from './entities/person_role.entity';
import { Repository } from 'typeorm';
import { Person } from 'src/person/entities/person.entity';
import { Role } from 'src/role/entities/role.entity';
import { errorResponse } from 'src/helper';

@Injectable()
export class PersonRoleService {

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(PersonRole)
    private readonly personRoleRepository: Repository<PersonRole>
  ) { }

  async create(createPersonRoleDto: CreatePersonRoleDto) {

    try {
      const personExist = await this.personRepository.findOneBy({ id: createPersonRoleDto.person_id });
      const rolExist = await this.roleRepository.findOneBy({ id: createPersonRoleDto.rol_id });
      if (!personExist && !rolExist) throw new BadRequestException('Verifica que la persona y el rol existan');

      const createPersonRole = this.personRoleRepository.create({
        person:personExist,
        rol:rolExist
      });
      if(!createPersonRole) throw new BadRequestException('Error al asignar el rol de la persona');
      return await this.personRoleRepository.save(createPersonRole);

    } catch (error) {
      errorResponse.errors(error, 'Error Creating PersonRole', 'No se pudo crear a la Persona-Rol');
    }
  }

  async findAll() {
    try {

      const personRoles = await this.personRoleRepository.find({
        relations:['person','rol']
      });

      const grouped = new Map();

      for(const pr of personRoles){
        const personId=pr.person.id;

        if(!grouped.has(personId)){
          grouped.set(personId,{
            person:pr.person,
            rol:[],
          })
        };

        grouped.get(personId).rol.push(pr.rol);
      }

      return Array.from(grouped.values());
      
    } catch (error) {
      errorResponse.errors(error, 'Error Find All PersonRole', 'No se pudo encontrar a las personas con sus roles');
    }
  }

  async findOne(id: any) {

    try {
      
      const idTable= await this.personRoleRepository.find({
        where:[
          {
            id:id
          },
          {
            person : { id : id }
          },
          {
            rol : { id : id }
          }
        ],
        relations:['person', 'rol']
      });

      if (idTable.length === 0) throw new NotFoundException('No se encontró ninguna coincidencia con ese ID');
      

      return idTable;

    } catch (error) {
      errorResponse.errors(error, 'Error Find PersonRole', 'No se pudo encontrar a la persona y su rol');
    }
  }

  async update(id: string, updatePersonRoleDto: UpdatePersonRoleDto) {
    try {
      await this.findOne(id);
      const personExist = await this.personRepository.findOneBy({ id: updatePersonRoleDto.person_id });
      const rolExist = await this.roleRepository.findOneBy({ id: updatePersonRoleDto.rol_id });
      if (!personExist && !rolExist) throw new BadRequestException('Verifica que la persona y el rol existan');

      const updatePersonRole= this.personRoleRepository.update(id,{person:personExist, rol:rolExist});
      if (!updatePersonRole) throw new BadRequestException('No se pudo actualizar verifica el id ingresado');
      return updatePersonRole;

      
    } catch (error) {
      errorResponse.errors(error, 'Error update PersonRole', 'No se pudo actualizar a la persona y su rol');
    }
  }

  async remove(id: any) {
    try {

      await this.findOne(id);
      const deletePersonRole= await this.personRoleRepository.delete(id);
      if(!deletePersonRole) throw new BadRequestException('ocurrio un error al eliminar person-rol');
      return deletePersonRole;
      
    } catch (error) {
      errorResponse.errors(error, 'Error delete PersonRole', 'No se pudo eliminar a la persona y su rol');
    }
  }

  async deletePersonsRolAll() {
    try {

      const deletePersonRole= await this.personRoleRepository.deleteAll();
      if(!deletePersonRole) throw new BadRequestException('ocurrio un error al eliminar person-rol');
      return deletePersonRole;
      
    } catch (error) {
      errorResponse.errors(error, 'Error delete PersonRoleAll', 'No se pudo eliminar a la personas y su rol');
    }
  }
}
