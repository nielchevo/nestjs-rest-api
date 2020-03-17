import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { UserEntity } from 'src/entities';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get(':id')
    async GetUserByID(@Param('id') id: number):Promise<UserEntity> {
        console.info(`param request - ${id}`);
        
        return await this.userService.GetUserByID(id);
    }
}
