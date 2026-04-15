/*
  Warnings:

  - Made the column `eventoId` on table `imagem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `imagem` DROP FOREIGN KEY `Imagem_eventoId_fkey`;

-- DropIndex
DROP INDEX `Imagem_eventoId_fkey` ON `imagem`;

-- AlterTable
ALTER TABLE `imagem` MODIFY `eventoId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Imagem` ADD CONSTRAINT `Imagem_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Evento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
