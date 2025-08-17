import { Person } from "src/person/entities/person.entity";
import { Role } from "src/role/entities/role.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity('TB_PERSON_ROLE')
@Unique(['person','rol'])
export class PersonRole {

    @PrimaryGeneratedColumn('uuid')
    id: string

    /* @PrimaryColumn('uuid',{name:'person_id'})
    personId:string;

    @PrimaryColumn('uuid',{name:'rol_id'})
    rolId:string; */


    //@ManyToOne(() => Person, { eager: true })
    @ManyToOne(() => Person, { nullable:false })
    @JoinColumn({ name: 'person_id' })
    person: Person;

    @ManyToOne(() => Role, { nullable:false })
    @JoinColumn({ name: 'rol_id' })
    rol: Role;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
