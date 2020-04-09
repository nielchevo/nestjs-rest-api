import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1586461173982 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
						isNullable: false,
					},
					{
						name: 'username',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'e_mail',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'phone_number',
						type: 'varchar',
						isNullable: true,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('users', true, true, true);
	}
}
