import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserTable } from 'src/entities/users.entity';
import { Posts } from 'src/entities/posts.entity';

const dbconfig:TypeOrmModuleOptions = {
    type: 'postgres',
    database: 'epos_merchant',
    host: '127.0.0.1',
    port: 5432,
    username: 'root',
    password: 'Password',
    entities: [UserTable, Posts],
    synchronize: true,
    logging: ['error', 'log' ,'query', 'schema'],
    namingStrategy: new SnakeNamingStrategy(),
};

@Module({
    imports: [TypeOrmModule.forRoot(dbconfig)],
})
export class DatabaseModule {}
