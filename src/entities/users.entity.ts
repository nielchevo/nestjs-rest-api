import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Posts } from "./posts.entity";

@Entity({name: 'users'})
export class UserTable {
    
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    firstName: string;

    @Column()
    email: string

    @Column()
    refPostId: number;

    // @OneToMany(()=> Posts, posts => posts.user)
    posts: Posts
}