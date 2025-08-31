import { Person } from "src/person/entities/person.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('TB_AUTH')
export class Auth {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({ type: 'varchar', length: 10, unique: true, nullable: false })
    user: string;

    @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
    password: string;

    @OneToOne(() => Person, { nullable: false })
    @JoinColumn({ name: 'person_id' })
    person: Person

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;
}
