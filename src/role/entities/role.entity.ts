import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TB_ROLE')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({type:'varchar', length:35, unique:true, nullable:false})
    rol:string

    @Column({type:'varchar', length:50,nullable:false})
    description:string

}
