/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Appointment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Appointment` DROP FOREIGN KEY `Appointment_doctorId_fkey`;

-- DropIndex
DROP INDEX `Appointment_doctorId_fkey` ON `Appointment`;

-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `createdAt`,
    DROP COLUMN `doctorId`,
    DROP COLUMN `updatedAt`;
