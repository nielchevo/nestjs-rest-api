import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/entities';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

    async GetUserByID(id: number): Promise<UserEntity> {
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

        console.info(`${JSON.stringify(result)}`);
        console.info(result);
        
        return result;
    }

    async createNewUsers(username: string, email: string): Promise<UserEntity>
    {
        try {
            console.log(username);
            console.log(email);
            
            const model = this.userRepository.create({
                id: 1,
                username: 'tests',
                email: 'emailtest'
            });
            console.log(model);
    
            const result = await this.userRepository.save(model);
            console.log(result);
    
            return result;
        } catch (error) {
            console.error(error.message)
        }
    }
}
