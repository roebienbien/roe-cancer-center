/*
  Warnings:

  - You are about to drop the column `deletedBy` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `deletedBy`,
    ADD COLUMN `deletedById` VARCHAR(191) NULL;
