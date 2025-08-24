import { BadRequestException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { errorResponse } from 'src/helper';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) { }


  async create(createPersonDto: CreatePersonDto) {
    try {
      const createPerson = this.personRepository.create(createPersonDto);
      return await this.personRepository.save(createPerson);
    } catch (error) {
      errorResponse.errors(error,'Error Creating Person','No se pudo crear a la Persona');
    }
  }

  findAll() {
    try {
      return this.personRepository.find();
    } catch (error) {
      errorResponse.errors(error,'Error Find Person','No se pudo encontrar datos de Personas')
    }
  }


  async findOne(id: string) {
    try {
      if (!id) throw new BadRequestException('ingrese el id correctamente');
      const findPerson = await this.personRepository.findOneBy({id:id});
      if(!findPerson) throw new BadRequestException('Id No Encontrado');
      return findPerson;
    } catch (error) {
      errorResponse.errors(error,'Error Find Person','No se pudo encontrar datos de la Persona')
    }
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    try {
      await this.findOne(id);
      return this.personRepository.update(id,updatePersonDto);
    } catch (error) {
      errorResponse.errors(error,'Error Update Person','No se pudo Actualizar los datos de la Persona');
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      const deletePerson= this.personRepository.delete(id);
      return {message:'Persona eliminada correctamente',deletePerson};
      
    } catch (error) {
      errorResponse.errors(error,'Error delete Person','No se pudo eliminar los datos de la Persona');
    }
  }

  async deletePersonsAll() {
    try {
      const deletePerson= this.personRepository.deleteAll();
      
      return {message:'Personas eliminadas correctamente',deletePerson};
      
    } catch (error) {
      errorResponse.errors(error,'Error delete Person','No se pudo eliminar los datos de la Persona');
    }
  }


}
