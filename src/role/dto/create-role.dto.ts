import { IsString, MinLength } from "class-validator"

export class CreateRoleDto {

    @IsString()
    @MinLength(12)
    rol:string

    @IsString()
    @MinLength(12)
    description:string
}
