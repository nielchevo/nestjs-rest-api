import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities';

@Resolver('User')
export class UsersResolver {
	constructor (private readonly userService: UserService) {}
	
	@Query()
	async GetUserByID(@Args('id') id: number): Promise<UserEntity> {
		return await this.userService.GetUserByID(id);
	}
}
