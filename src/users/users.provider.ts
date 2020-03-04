import { Users } from '../entity/users.entity';

export const UserProviders = [
    {
        provide: 'UserProvider',
        useValue: Users
    }
];