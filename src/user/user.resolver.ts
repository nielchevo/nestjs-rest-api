import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities';

@Resolver('User')
export class UsersResolver {
	constructor (private readonly userService: UserService) {}
	
	@Query()
	async GetUserByID(@Args('id') id: number): Promise<UserEntity> {
		return await this.userService.GetUserByID(id);
	}

	@Mutation(() => UserEntity)
	async createNewUser(
		@Args('username') username: string, 
		@Args('email') email: string
	): Promise<UserEntity> {
		return await this.userService.createNewUsers(username, email);
	}
}
