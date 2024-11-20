/*
  Warnings:

  - You are about to drop the `bookings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movie_cast` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movie_crew` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movie_reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seat_references` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `theaters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ticket_prices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tickets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `bookings` DROP FOREIGN KEY `bookings_show_id_fkey`;

-- DropForeignKey
ALTER TABLE `bookings` DROP FOREIGN KEY `bookings_transaction_id_fkey`;

-- DropForeignKey
ALTER TABLE `bookings` DROP FOREIGN KEY `bookings_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `movie_cast` DROP FOREIGN KEY `movie_cast_movie_id_fkey`;

-- DropForeignKey
ALTER TABLE `movie_crew` DROP FOREIGN KEY `movie_crew_movie_id_fkey`;

-- DropForeignKey
ALTER TABLE `movie_reviews` DROP FOREIGN KEY `movie_reviews_movie_id_fkey`;

-- DropForeignKey
ALTER TABLE `movie_reviews` DROP FOREIGN KEY `movie_reviews_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `payments_boking_id_fkey`;

-- DropForeignKey
ALTER TABLE `screen` DROP FOREIGN KEY `screen_theater_id_fkey`;

-- DropForeignKey
ALTER TABLE `seat_references` DROP FOREIGN KEY `seat_references_theater_id_fkey`;

-- DropForeignKey
ALTER TABLE `seats` DROP FOREIGN KEY `seats_show_id_fkey`;

-- DropForeignKey
ALTER TABLE `shows` DROP FOREIGN KEY `shows_movie_id_fkey`;

-- DropForeignKey
ALTER TABLE `shows` DROP FOREIGN KEY `shows_screen_id_fkey`;

-- DropForeignKey
ALTER TABLE `ticket_prices` DROP FOREIGN KEY `ticket_prices_show_id_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_boking_id_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_show_id_fkey`;

-- DropTable
DROP TABLE `bookings`;

-- DropTable
DROP TABLE `movie_cast`;

-- DropTable
DROP TABLE `movie_crew`;

-- DropTable
DROP TABLE `movie_reviews`;

-- DropTable
DROP TABLE `movies`;

-- DropTable
DROP TABLE `payments`;

-- DropTable
DROP TABLE `seat_references`;

-- DropTable
DROP TABLE `seats`;

-- DropTable
DROP TABLE `shows`;

-- DropTable
DROP TABLE `theaters`;

-- DropTable
DROP TABLE `ticket_prices`;

-- DropTable
DROP TABLE `tickets`;

-- DropTable
DROP TABLE `transactions`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER', 'NON_BINARY') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theater` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `total_screens` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `release_date` DATETIME(3) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `imdb_rating` DOUBLE NOT NULL,
    `trailer_link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Show` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movie_id` INTEGER NOT NULL,
    `screen_id` INTEGER NOT NULL,
    `show_time` DATETIME(3) NOT NULL,
    `price` DOUBLE NOT NULL,
    `available_seats` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TicketPrice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `show_id` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `show_id` INTEGER NOT NULL,
    `booking_id` INTEGER NOT NULL,
    `seat_number` VARCHAR(191) NOT NULL,
    `ticket_price` DOUBLE NOT NULL,
    `issue_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `show_id` INTEGER NOT NULL,
    `seat_number` VARCHAR(191) NOT NULL,
    `is_booked` BOOLEAN NOT NULL,
    `seat_row` INTEGER NOT NULL,
    `seat_column` INTEGER NOT NULL,
    `preference_id` INTEGER NOT NULL,
    `preference_score` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeatReference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `theater_id` INTEGER NOT NULL,
    `seat_type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `show_id` INTEGER NOT NULL,
    `booking_date` DATETIME(3) NOT NULL,
    `total_amount` DOUBLE NOT NULL,
    `status` ENUM('BOOKED', 'FAILED', 'COMPLETED') NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` VARCHAR(191) NOT NULL,
    `transaction_date` DATETIME(3) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `status` ENUM('BOOKED', 'FAILED', 'COMPLETED') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `booking_id` INTEGER NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_amount` DOUBLE NOT NULL,
    `payment_method` ENUM('CREDIT_CARD', 'DEBIT_CARD', 'NET_BANKING', 'UPI_WALLET') NOT NULL,
    `payment_status` ENUM('BOOKED', 'FAILED', 'COMPLETED') NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieCast` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movie_id` INTEGER NOT NULL,
    `actor_name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieCrew` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movie_id` INTEGER NOT NULL,
    `crew_member_name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movie_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `review_text` VARCHAR(191) NOT NULL,
    `rating` ENUM('WORSE', 'BAD', 'OK', 'GOOD', 'AMAZING', 'FANTASTIC', 'GOAT') NOT NULL,
    `review_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Screen` ADD CONSTRAINT `Screen_theater_id_fkey` FOREIGN KEY (`theater_id`) REFERENCES `Theater`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Show` ADD CONSTRAINT `Show_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Show` ADD CONSTRAINT `Show_screen_id_fkey` FOREIGN KEY (`screen_id`) REFERENCES `Screen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TicketPrice` ADD CONSTRAINT `TicketPrice_show_id_fkey` FOREIGN KEY (`show_id`) REFERENCES `Show`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_show_id_fkey` FOREIGN KEY (`show_id`) REFERENCES `Show`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seat` ADD CONSTRAINT `Seat_show_id_fkey` FOREIGN KEY (`show_id`) REFERENCES `Show`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeatReference` ADD CONSTRAINT `SeatReference_theater_id_fkey` FOREIGN KEY (`theater_id`) REFERENCES `Theater`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_show_id_fkey` FOREIGN KEY (`show_id`) REFERENCES `Show`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCast` ADD CONSTRAINT `MovieCast_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCrew` ADD CONSTRAINT `MovieCrew_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieReview` ADD CONSTRAINT `MovieReview_movie_id_fkey` FOREIGN KEY (`movie_id`) REFERENCES `Movie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieReview` ADD CONSTRAINT `MovieReview_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
