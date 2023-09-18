/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `Partner` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "password" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Partner_password_key" ON "Partner"("password");
