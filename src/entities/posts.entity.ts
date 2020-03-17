import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Posts {
    
    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    Title: string;

    @Column()
    body: string;
}
