import { IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateUsersDto {

    @IsString()
    readonly first_name: string;

    @IsString()
    readonly last_name: string;

    @IsString()
    readonly phone: string;

    @IsEmail()
    readonly email: string;
}
