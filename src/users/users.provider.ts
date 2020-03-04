import { Injectable } from '@nestjs/common';
import { Users } from '../entity/users.entity';

export const UserProviders = [
    {
        provider: 'UserProvider',
        useValue: Users
    }
];

// @Injectable()
// export static class Users {

// }
