import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Request } from 'express';
@Controller('users')
export class UsersController {
    @Get()
    public async getAllUsers() {
        return "get all user"
    }

    @Post()
    public async createNewUser(@Body() userData: Request) {
        console.log(JSON.stringify(userData));
        return "Post create new user";
    }

    @Get(':id')
    public async getUserByID(@Param() pUserID: number):Promise <any> {
        try {
            console.log('params user id: ', pUserID);
            return `this get user id by params ${pUserID}`;
        return
        } catch (error) {
            return error.message;
        }
    }
}
