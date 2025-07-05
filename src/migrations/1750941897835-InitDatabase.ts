import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1750941897835 implements MigrationInterface {
  name = "InitDatabase1750941897835";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "about" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "heading" character varying NOT NULL, "subheading" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e7b581a8a74d0a2ea3aa53226ee" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "about"`);
  }
}
