-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('new', 'contacted', 'in_progress', 'completed', 'cancelled');

-- CreateTable
CREATE TABLE "applications" (
    "id" UUID NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "phone" VARCHAR(32) NOT NULL,
    "company" VARCHAR(160) NOT NULL,
    "email" VARCHAR(160),
    "service" VARCHAR(80) NOT NULL,
    "message" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'new',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);
