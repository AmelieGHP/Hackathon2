

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blackMount
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blackMount
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blackMount` DEFAULT CHARACTER SET utf8 ;
USE `blackMount` ;

-- -----------------------------------------------------
-- Table `blackMount`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blackMount`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `type_of_license` VARCHAR(45) NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blackMount`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blackMount`.`company` (
  `id_company` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `address` VARCHAR(155) NULL,
  PRIMARY KEY (`id_company`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blackMount`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blackMount`.`employee` (
  `id_employee` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `is_admin` VARCHAR(45) NULL DEFAULT 0,
  `id_company` INT NOT NULL,
  PRIMARY KEY (`id_employee`, `id_company`),
  INDEX `fk_employee_company_idx` (`id_company` ASC) VISIBLE,
  CONSTRAINT `fk_employee_company`
    FOREIGN KEY (`id_company`)
    REFERENCES `blackMount`.`company` (`id_company`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blackMount`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blackMount`.`vehicle` (
  `id_vehicle` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `model` VARCHAR(45) NULL,
  `horsepower` INT NULL,
  `nb_of_places` INT NULL,
  `nb_of_km` VARCHAR(45) NULL,
  `is_in_repair` TINYINT NULL DEFAULT 0,
  `id_company` INT NOT NULL,
  PRIMARY KEY (`id_vehicle`, `id_company`),
  INDEX `fk_vehicle_company1_idx` (`id_company` ASC) VISIBLE,
  CONSTRAINT `fk_vehicle_company1`
    FOREIGN KEY (`id_company`)
    REFERENCES `blackMount`.`company` (`id_company`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blackMount`.`loan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blackMount`.`loan` (
  `id_loan` INT NOT NULL AUTO_INCREMENT,
  `borrowing_date` DATE NULL,
  `return_date` DATE NULL,
  `id_vehicle` INT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`id_loan`, `id_vehicle`, `id_user`),
  INDEX `fk_loan_vehicle1_idx` (`id_vehicle` ASC) VISIBLE,
  INDEX `fk_loan_user1_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `fk_loan_vehicle1`
    FOREIGN KEY (`id_vehicle`)
    REFERENCES `blackMount`.`vehicle` (`id_vehicle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_loan_user1`
    FOREIGN KEY (`id_user`)
    REFERENCES `blackMount`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

