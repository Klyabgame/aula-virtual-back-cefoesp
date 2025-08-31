import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { errorResponse } from 'src/helper';
import { Person } from 'src/person/entities/person.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private readonly userRepository:Repository<Auth>,

    @InjectRepository(Person)
    private readonly personRepository:Repository<Person>
  ){}


  async createUser(createUserDto: CreateUserDto) {

    try {
      const personExist= await this.personRepository.findOneBy({id:createUserDto.person_id});
      if(!personExist) throw new BadRequestException('La persona debe existir');

      const {password}=createUserDto;
      
      const createUser= this.userRepository.create({
        user:createUserDto.user,
        password:bcrypt.hashSync(password,10),
        person:personExist
      });
      await this.userRepository.save(createUser);

      return createUser
      
    } catch (error) {
      errorResponse.errors(error,'Error Creating User','No se pudo crear al Usuario');
    }

  }

  async loginUser(loginUserDto:LoginUserDto){

    const { user, password} = loginUserDto;

    const loginUser= await this.userRepository.findOne({
      where:{ user },
      select:{user:true, password:true}
    });

    if(!loginUser) throw new UnauthorizedException('usuario no encontrado - email');
    if(! bcrypt.compareSync(password, loginUser.password)) throw new UnauthorizedException('usuario no encontrado - password');

    return loginUser;


  }

  /* findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  } */
}
