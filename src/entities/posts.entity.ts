import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "posts"})
class Posts {
    
    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    Title: string;

    @Column()
    body: string;

    // @ManyToOne(()=>Users, user => user.posts)
    // @JoinTable()
    // user: Users
}

export default Posts