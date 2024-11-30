/*
  Warnings:

  - Added the required column `movie_poster` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` ADD COLUMN `movie_poster` VARCHAR(191) NOT NULL;
