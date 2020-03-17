import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PostEntity } from ".";


@Entity({name: 'users'})
class UserTable {
    
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    firstName: string;

    @Column()
    email: string

    @Column()
    refPostId: number;

    // @OneToMany(()=> Posts, posts => posts.user)
    posts: PostEntity
}

export default UserTable