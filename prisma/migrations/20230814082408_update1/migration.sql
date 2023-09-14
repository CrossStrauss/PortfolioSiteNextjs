/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "projectData" ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "url" SET DEFAULT '';

-- DropTable
DROP TABLE "test";
