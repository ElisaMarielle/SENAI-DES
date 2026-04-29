-- CreateTable
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `album` VARCHAR(191) NOT NULL,
    `img_album` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `lancamento` VARCHAR(191) NOT NULL,
    `preco` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
