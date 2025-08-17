import { IsUUID } from "class-validator";

export class CreatePersonRoleDto {

    @IsUUID()
    person_id:string;

    @IsUUID()
    rol_id:string;
}
