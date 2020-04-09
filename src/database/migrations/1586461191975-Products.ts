import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Products1586461191975 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table({
				name: 'products',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isNullable: false,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'price',
						type: 'int',
						isNullable: false,
						default: 0,
					},
					{
						name: 'stock',
						type: 'int',
						isNullable: false,
						default: 0,
					},
					{
						name: 'description',
						type: 'text',
						isNullable: true,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('products', true, true, true);
	}
}
