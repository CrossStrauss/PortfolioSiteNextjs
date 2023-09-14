-- CreateTable
CREATE TABLE "test" (
    "id" SERIAL NOT NULL,
    "data" TEXT,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectData" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "projectData_pkey" PRIMARY KEY ("id")
);
