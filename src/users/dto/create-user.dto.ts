import { IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateUsersDto {

    @IsString()
    readonly first_name: string;

    @IsString()
    readonly last_name: string;

    @IsNumber()
    readonly phone: number;

    @IsEmail()
    readonly email: string;
}
