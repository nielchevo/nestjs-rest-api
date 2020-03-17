import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTable } from 'src/entities/users.entity';
import { Posts } from 'src/entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTable, Posts])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
