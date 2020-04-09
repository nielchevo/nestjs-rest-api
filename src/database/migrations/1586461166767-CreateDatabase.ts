import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1586461166767 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createDatabase()

	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropDatabase();
	}
}
