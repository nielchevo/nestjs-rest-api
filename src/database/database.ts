
import { Sequelize } from 'sequelize-typescript';
import { Users } from '../entity/users.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root', 
                password: 'Password',
                database: 'merchant_pos' 
            });
            sequelize.addModels([Users]);
            await sequelize.sync();

            return sequelize;
    }
}]

