import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTable } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { Posts } from 'src/entities/posts.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserTable) private readonly userRepository: Repository<UserTable>) {}

    async GetUserByID(id: number): Promise<UserTable> {
        console.info(`invoke getuserbyId ${JSON.stringify(id)}`);
        // const result = await this.userRepository.findOne({ where: {id: id}});
        // const x = await this.userRepository.findOne({
        //     where: { userId: id },
        //     relations: ['posts'],
        // })
        const result = await this.userRepository
            .createQueryBuilder('x')
            .leftJoinAndMapOne("x.posts", "posts", "y", "x.ref_post_id=y.post_id")
            .getOne()

        console.log(`${JSON.stringify(result)}`);
        
        return null;
    }
}
