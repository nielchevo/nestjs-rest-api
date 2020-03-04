import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserProviders } from './users.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  providers: [UsersService, ...UserProviders],
  controllers: [UsersController],
  imports: [DatabaseModule],
  exports: [UsersService]
})
export class UsersModule {}
