import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonRoleDto } from './create-person_role.dto';

export class UpdatePersonRoleDto extends PartialType(CreatePersonRoleDto) {}
