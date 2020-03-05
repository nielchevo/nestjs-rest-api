import { Controller, Post, Body, Header, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService) {};

    @Post('/register')
    @Header('Content-Type', 'application/json')
    public async RegisterNewUser(@Body() data: CreateUsersDto): Promise<any> {
      return this.userService.createNewUser(data);  
    };
}
