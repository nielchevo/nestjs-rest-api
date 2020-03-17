import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        database: 'epos_merchant',
        host: '127.0.0.1',
        port: 5432,
        username: 'root',
        password: 'Password',
        entities: [],
        synchronize: true,
        logging: 'all',
    })]
})
export class DatabaseModule {}
