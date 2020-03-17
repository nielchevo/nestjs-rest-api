import { Controller, Get, Param, Req } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get(':id')
    async GetUserByID(@Param('id') id: number):Promise<Users> {
        console.info(`param request - ${id}`);
        
        return await this.userService.GetUserByID(id);
    }
}
