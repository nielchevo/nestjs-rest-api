import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService) {};

    @Post('/register')
    public async RegisterNewUser(@Body() createUsersDto: CreateUsersDto): Promise<any> {
        console.log(`Body value controller ${JSON.stringify(createUsersDto)}`);
      return this.userService.createNewUser(createUsersDto);  
    };
}
