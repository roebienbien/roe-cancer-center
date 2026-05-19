/*
  Warnings:

  - Added the required column `updatedAt` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Made the column `doctorSlotId` on table `Appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Appointment` DROP FOREIGN KEY `Appointment_doctorSlotId_fkey`;

-- DropIndex
DROP INDEX `Appointment_doctorSlotId_fkey` ON `Appointment`;

-- AlterTable
ALTER TABLE `Appointment` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `doctorSlotId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_doctorSlotId_fkey` FOREIGN KEY (`doctorSlotId`) REFERENCES `DoctorSlot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
