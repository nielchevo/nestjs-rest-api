import { Injectable, Inject } from '@nestjs/common';
import { Users } from 'src/entity/users.entity';
import { CreateUsersDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@Inject('UserProvider') private readonly userRepository: typeof Users) {}
    
    async createNewUser(usersDto: CreateUsersDto): Promise<any> {
        try{
            console.log(`create new Users: ${JSON.stringify(usersDto)}`);

            const result = await this.userRepository.create(usersDto);
            if (!result) throw new Error(`Failed to create new Users: ${result}`);
            return result;
        } catch (error) {
            console.log(`Catch Error: ${error}`);
            return error.message;
        }
    }
}
