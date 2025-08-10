import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TB_PERSON')
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({type:'char' , length:8 , unique:true , nullable:false})
    dni:string

    @Column({type:'varchar', length:30 , nullable:false})
    nombres:string

    @Column({type:'varchar', length:30 , nullable:false})
    apellido_materno:string

    @Column({type:'varchar', length:30 , nullable:false})
    apellido_paterno:string

    @Column({type:'varchar', length:30, unique:true , nullable:true})
    correo_electronico:string

    @Column({type:'varchar', length:10 , nullable: true})
    celular:string

    @Column({type:'varchar', length:255 , nullable:true})
    img:string

}
