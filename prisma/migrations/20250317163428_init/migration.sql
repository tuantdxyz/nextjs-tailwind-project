-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `departmentId` INTEGER NOT NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `shortDescription` VARCHAR(191) NOT NULL,
    `detailedDescription` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `originalPrice` DOUBLE NOT NULL,
    `imageSrc` VARCHAR(191) NOT NULL,
    `sold` INTEGER NOT NULL,
    `notes` VARCHAR(191) NOT NULL,
    `promotionStartTime` DATETIME(3) NULL,
    `promotionEndTime` DATETIME(3) NULL,
    `soldDuringPromotion` INTEGER NOT NULL,
    `totalSale` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiscountCode` (
    `code` VARCHAR(191) NOT NULL,
    `discount` INTEGER NOT NULL,
    `used` INTEGER NOT NULL,
    `maxcount` INTEGER NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Ex:
CREATE DATABASE dg_db1 CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO discountCode (code, discount, used, maxcount) VALUES
('SAVE10', 10, 5, 10),
('SAVE20', 15, 3, 10),
('SAVE30', 20, 0, 10);