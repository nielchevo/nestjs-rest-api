import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PostEntity } from ".";


@Entity({name: 'users'})
class UserTable {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    username: string;

    @Column()
    email: string

    @Column()
    refPostId: number;

    // @OneToMany(()=> Posts, posts => posts.user)
    // posts: PostEntity
}

export default UserTable