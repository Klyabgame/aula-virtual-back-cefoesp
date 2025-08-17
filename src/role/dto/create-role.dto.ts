import { IsString, MaxLength, MinLength } from "class-validator"

export class CreateRoleDto {

    @IsString()
    @MaxLength(12)
    rol:string

    @IsString()
    @MinLength(12)
    description:string
}
