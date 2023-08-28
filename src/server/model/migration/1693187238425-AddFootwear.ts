import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFootwear1693187238425 implements MigrationInterface {
    name = 'AddFootwear1693187238425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "footwear" ("id" character varying NOT NULL, "brandName" character varying NOT NULL, CONSTRAINT "PK_6c74cbc06e88a2a86d547f186c3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "footwear"`);
    }

}
