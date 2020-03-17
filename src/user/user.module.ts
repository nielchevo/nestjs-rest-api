import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, PostEntity } from '../entities';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity])],
  controllers: [UserController],
  providers: [UserService, UsersResolver],
  exports: [UserService]
})
export class UserModule {}
