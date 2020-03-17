import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { json } from 'express';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) {}

    async GetUserByID(id: number): Promise<Users> {
        console.info(`invoke getuserbyId ${JSON.stringify(id)}`);
        const result = await this.userRepository.findOne({ where: {id: id}});
        console.log(`${JSON.stringify(result)}`);
        return result;
    }
}
