/*
  Warnings:

  - You are about to drop the column `email` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Patient` table. All the data in the column will be lost.
  - Made the column `name` on table `Medication` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `barangay` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Made the column `sex` on table `Patient` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Doctor` DROP COLUMN `email`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    DROP COLUMN `middleName`,
    DROP COLUMN `phone`;

-- AlterTable
ALTER TABLE `Medication` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `address`,
    DROP COLUMN `birthDate`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    DROP COLUMN `middleName`,
    DROP COLUMN `phone`,
    ADD COLUMN `barangay` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `postalCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `province` VARCHAR(191) NOT NULL,
    ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL,
    MODIFY `sex` ENUM('MALE', 'FEMALE') NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `middleName` VARCHAR(191) NULL,
    ADD COLUMN `mobileNumber` VARCHAR(191) NULL;
