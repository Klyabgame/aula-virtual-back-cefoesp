import { Injectable } from '@nestjs/common';
import { PersonService } from 'src/person/person.service';
import { PersonRoleService } from 'src/person_role/person_role.service';
import { RoleService } from 'src/role/role.service';
import { initialDataPerson } from './data/person-data';
import { initialDataRole } from './data/role-data';

@Injectable()
export class SeedService {

  constructor(
    private readonly personRolService:PersonRoleService,
    private readonly personService:PersonService,
    private readonly roleService:RoleService
  ){}


  async runSeed(){
    await this.insertNewPerson();
    
    return 'SEED EXUTED';
  }

  private async insertNewPerson(){
    await this.personRolService.deletePersonsRolAll();
    await this.personService.deletePersonsAll();
    await this.roleService.deleteRolAll();

    const seedPerson=initialDataPerson.persons;
    const seedRole=initialDataRole.roles;

    const insertPromises=[];

    seedPerson.forEach(person=>{

      insertPromises.push(this.personService.create(person));
    })

    seedRole.forEach(role=>{
      insertPromises.push(this.roleService.create(role));
    })

    const personExist=await this.personService.findAll();

    const persondni= personExist.forEach(p=> p.dni)
    console.log( persondni);
    

    await Promise.all(insertPromises);

    return true;


  }
}
