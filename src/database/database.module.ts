import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const dbconfig:TypeOrmModuleOptions = {
    type: 'postgres',
    database: 'epos_merchant',
    host: '127.0.0.1',
    port: 5432,
    username: 'root',
    password: 'Password',
    entities: ["./src/**/*.entity.{.ts, .js}"],
    synchronize: true,
    logging: ['error', 'log' ,'query', 'schema'],
    namingStrategy: new SnakeNamingStrategy(),
};

@Module({
    imports: [TypeOrmModule.forRoot(dbconfig)],
})
export class DatabaseModule {}
