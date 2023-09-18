/*
  Warnings:

  - Added the required column `email` to the `Analyst` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analyst" ADD COLUMN     "email" TEXT NOT NULL;
