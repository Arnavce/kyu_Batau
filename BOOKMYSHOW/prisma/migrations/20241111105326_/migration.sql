/*
  Warnings:

  - You are about to drop the `ticketprice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ticketprice` DROP FOREIGN KEY `TicketPrice_show_id_fkey`;

-- DropTable
DROP TABLE `ticketprice`;
