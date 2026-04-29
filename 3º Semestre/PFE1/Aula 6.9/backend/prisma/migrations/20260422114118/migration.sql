/*
  Warnings:

  - You are about to drop the column `titulo` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `music_nomes` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `titulo`,
    ADD COLUMN `music_nomes` VARCHAR(191) NOT NULL;
