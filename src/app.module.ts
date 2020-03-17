import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions  } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { UserTable } from './entities/users.entity';
import { Posts } from './entities/posts.entity';

const dbconfig:TypeOrmModuleOptions = {
  type: 'postgres',
  database: 'epos_merchant',
  host: '127.0.0.1',
  port: 5432,
  username: 'root',
  password: 'Password',
  entities: [UserTable, Posts],
  logging: ['error', 'log' ,'query', 'schema'],
  namingStrategy: new SnakeNamingStrategy(),
};

@Module({
  imports: [TypeOrmModule.forRoot(dbconfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
