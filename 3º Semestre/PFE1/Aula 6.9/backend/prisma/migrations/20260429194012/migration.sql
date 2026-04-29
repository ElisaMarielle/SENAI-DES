/*
  Warnings:

  - You are about to drop the column `album` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `album`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
