import { IsEmail, IsString, IsUrl, Length, Matches, MinLength } from "class-validator";

export class CreatePersonDto {

    @IsString()
    @Length(8,8)
    @Matches(/^\d{8}$/,{message:'El campo Dni solo recibe numeros y solo debe tener 8 caracteres'})
    dni:string

    @IsString()
    @MinLength(5)
    nombres:string

    @IsString()
    @MinLength(5)
    apellido_materno:string

    @IsString()
    @MinLength(5)
    apellido_paterno:string

    @IsString()
    @IsEmail()
    correo_electronico:string

    @IsString()
    @Length(6,10)
    @Matches(/^\d{6,10}$/,{message:'El campo Celular solo recibe numeros y debe tener menos de 10 caracteres'})
    celular:string

    @IsString()
    @IsUrl()
    img:string


}
