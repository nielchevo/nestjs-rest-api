import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Orders1586461181086 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.createTable(
			new Table({
				name: 'order',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						isNullable: false,
						isGenerated: true,
						generationStrategy: 'uuid',
					},
					{
						name: 'user_id',
						type: 'int',
						isNullable: true,
					},
					{
						name: 'order_detail_id',
						type: 'int',
						isNullable: true,
					},
					{
						name: 'order_date',
						type: 'date',
						isNullable: true,
					},
					{
						name: 'status',
						type: 'varchar',
						isNullable: true,
					},
				],
			}),
		);

		await queryRunner.createTable(
			new Table({
				name: 'order_detail',
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
						name: 'product_id',
						type: 'int',
						isNullable: true,
					},
					{
						name: 'quantity',
						type: 'int',
						isNullable: false,
						default: 0,
					},
					{
						name: 'amount',
						type: 'int',
						isNullable: false,
						default: 0,
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.dropTable('order', true, true, true);
		await queryRunner.dropTable('order_detail', false, true, true);
	}
}
