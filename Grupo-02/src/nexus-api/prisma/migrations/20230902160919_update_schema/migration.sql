/*
  Warnings:

  - Added the required column `initiativeName` to the `Initiative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scope` to the `Initiative` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Initiative" ADD COLUMN     "initiativeName" TEXT NOT NULL,
ADD COLUMN     "scope" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "responsibleName" TEXT;
