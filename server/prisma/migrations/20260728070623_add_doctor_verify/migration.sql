-- AlterTable
ALTER TABLE `Doctor` ADD COLUMN `rejectionReason` VARCHAR(191) NULL,
    ADD COLUMN `verifiedAt` DATETIME(3) NULL,
    ADD COLUMN `verifiedById` VARCHAR(191) NULL;
