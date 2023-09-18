-- DropIndex
DROP INDEX "Partner_password_key";

-- AlterTable
ALTER TABLE "Partner" ALTER COLUMN "rateForProject" DROP NOT NULL;
