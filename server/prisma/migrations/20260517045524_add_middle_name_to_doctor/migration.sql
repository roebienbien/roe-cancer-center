/*
  Warnings:

  - You are about to drop the column `endAt` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `Appointment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slotId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slotId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `endAt`,
    DROP COLUMN `startAt`,
    ADD COLUMN `slotId` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` ENUM('CHEMOTHERAPHY', 'CONSULTATION', 'FOLLOW_UP', 'LAB_TEST', 'RADIATION', 'GENERAL_CHECKUP') NOT NULL DEFAULT 'CONSULTATION';

-- AlterTable
ALTER TABLE `Doctor` ADD COLUMN `middleName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `AvailabilitySlot` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `startAt` DATETIME(3) NOT NULL,
    `endAt` DATETIME(3) NOT NULL,
    `isBooked` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Appointment_slotId_key` ON `Appointment`(`slotId`);

-- AddForeignKey
ALTER TABLE `AvailabilitySlot` ADD CONSTRAINT `AvailabilitySlot_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_slotId_fkey` FOREIGN KEY (`slotId`) REFERENCES `AvailabilitySlot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
