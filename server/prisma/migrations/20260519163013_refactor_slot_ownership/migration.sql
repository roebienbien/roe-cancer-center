/*
  Warnings:

  - You are about to drop the column `slotId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `Slot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Appointment` DROP FOREIGN KEY `Appointment_slotId_fkey`;

-- DropForeignKey
ALTER TABLE `Slot` DROP FOREIGN KEY `Slot_doctorId_fkey`;

-- DropIndex
DROP INDEX `Appointment_slotId_fkey` ON `Appointment`;

-- DropIndex
DROP INDEX `Slot_doctorId_fkey` ON `Slot`;

-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `slotId`,
    ADD COLUMN `doctorSlotId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Slot` DROP COLUMN `doctorId`;

-- CreateTable
CREATE TABLE `DoctorSlot` (
    `id` VARCHAR(191) NOT NULL,
    `doctorId` VARCHAR(191) NOT NULL,
    `slotId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DoctorSlot_doctorId_slotId_key`(`doctorId`, `slotId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_doctorSlotId_fkey` FOREIGN KEY (`doctorSlotId`) REFERENCES `DoctorSlot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSlot` ADD CONSTRAINT `DoctorSlot_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorSlot` ADD CONSTRAINT `DoctorSlot_slotId_fkey` FOREIGN KEY (`slotId`) REFERENCES `Slot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
