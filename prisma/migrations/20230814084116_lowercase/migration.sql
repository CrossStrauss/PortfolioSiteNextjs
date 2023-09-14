/*
  Warnings:

  - You are about to drop the `UserData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projectData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserData";

-- DropTable
DROP TABLE "projectData";

-- CreateTable
CREATE TABLE "userdata" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "userdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectdata" (
    "id" SERIAL NOT NULL,
    "url" TEXT DEFAULT '',
    "description" TEXT,

    CONSTRAINT "projectdata_pkey" PRIMARY KEY ("id")
);
