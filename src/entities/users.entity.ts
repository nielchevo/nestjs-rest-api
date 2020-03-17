import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Users {
    
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    firstName: string;

    @Column()
    email: string

    @Column()
    refPostId: number;

}