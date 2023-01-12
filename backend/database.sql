

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
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
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
  `email` VARCHAR(255) NULL,
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
  `horsepower` FLOAT NULL,
  `nb_of_places` INT NULL,
  `nb_of_km` INT NULL,
  `is_in_repair` TINYINT NULL DEFAULT 0,
  `id_company` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
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

TRUNCATE user;
TRUNCATE employee;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO user(firstname, lastname, email, password, phone, type_of_license) VALUES
("Nicolas", "Ryngite", "nicolas.ryngite@gmail.com", "12345", "0678658978", "7"),
("Amelie", "Poulin", "amelie.poulin@gmail.com", "50980", "0756457876", "3"),
("Naomi", "Molette", "naomi.molettegmail.com", "67409", "0796789876", "6"),
("Nathalie", "Bounty", "nathalie.bounty@gmail.com", "07934", "07998704435", "4"),
("Lucas", "Pote", "lucas.pote@gmail.com", "09087","0677856537", "5");

INSERT INTO company(name, phone, address) VALUES
("Black Mount", "0244276809", "4 rue Baron 44000 Nantes");


INSERT INTO employee(firstname, lastname, email, password, phone, is_admin, id_company) VALUES
("Anne-Catherine", "Delacourtelle", "anne-catherine.delacourtelle@black-mount.com", "47656", "0788987656", 1, 1),
("Jean-Marie", "Defeydeau", "jean-marie.defeydeau@black-mount.com", "54767", "0989876794", 0, 1),
("Pierre-Yves", "Clin", "pierre-yves@black-mount.com", "76409", "0677689397", 0, 1),
("Francois-Xavier", "Boileau", "francois-xavier@black-mount.com", "43093", "0798953456", 0, 1),
("Marie-Antoinette", "Delaguillotine", "marie-antoinette.delaguillotine@black-mount.com", "12093", "0771209675", 0, 1);

INSERT INTO vehicle(type, model, horsepower, nb_of_places, nb_of_km, is_in_repair, id_company, image) VALUES
("Horse", "Tornado", 1, 2, 245, 0, 1,"/assets/vehicles/black-mount-vehicle-image-horse-tornado.jpg"),
("Zebra", "Tictac", 6, 1, 1376, 0, 1,"/assets/vehicles/black-mount-vehicle-image-zebra-tictac.jpg"),
("Unicorn", "Joly", 7, 2, 10789, 0, 1, "/assets/vehicles/black-mount-vehicle-image-unicorn-joly.jpg"),
("Pony", "Pepito", 3, 1, 45, 0, 1, "/assets/vehicles/black-mount-vehicle-image-pony-pepito.jpg"),
("Donkey", "Donkey", 1.25, 1, 1, 0, 1, "/assets/vehicles/black-mount-vehicle-image-donkey-donkey.jpg"),
("Horse", "Pegasus", 1, 2, 132, 0, 1, "/assets/vehicles/black-mount-vehicle-image-horse-pegase.jpg"),
("Shetland", "Caramel", 0.5, 1, 340, 0, 1,"/assets/vehicles/black-mount-vehicle-image-shetland-caramel.jpg"),
("Rocking horse", "Tonnerre", 0.25, 1, 0, 0, 1,"/assets/vehicles/black-mount-vehicle-image-rockinghorse-tonnerre.jpg"),
("Horse", "Lucky", 1, 2, 562, 0, 1,"/assets/vehicles/black-mount-vehicle-image-horse-lucky.jpg"),
("Pony", "Froufrou", 3, 1, 1089, 0, 1,"/assets/vehicles/black-mount-vehicle-image-pony-froufrou.jpg"),
("Horse", "Etincelle", 1, 2, 1032, 0, 1, "/assets/vehicles/black-mount-vehicle-image-horse-etincelle.jpg"),
("Horse", "Altesse", 1, 2, 1562, 0, 1,"/assets/vehicles/black-mount-vehicle-image-horse-altesse.jpg"),
("Horse", "Calipso", 1, 2, 2305, 0, 1,"/assets/vehicles/black-mount-vehicle-image-horse-calipso.jpg"),
("Horse", "Cleopatre", 1, 2, 1562, 0, 1,"/assets/vehicles/black-mount-vehicle-image-horse-cleopatre.jpg"),
("Unicorn", "Mia", 7, 2, 15789, 0, 1, "/assets/vehicles/black-mount-vehicle-image-unicorn-mia.jpg"),
("Donkey", "Dardar", 1.25, 1, 15, 0, 1, "/assets/vehicles/black-mount-vehicle-image-donkey-dardar.jpg"),
("Pony", "Mistik", 3, 1, 75, 0, 1, "/assets/vehicles/black-mount-vehicle-image-pony-mistik.jpg"),
("Shetland", "Zumba", 0.5, 1, 540, 0, 1,"/assets/vehicles/black-mount-vehicle-image-shetland-zumba.jpg"),
("Rocking horse", "Babytrote", 0.25, 1, 0, 0, 1,"/assets/vehicles/black-mount-vehicle-image-rockinghorse-babytrote.jpg"),
("Pony", "Rock", 3, 1, 189, 0, 1,"/assets/vehicles/black-mount-vehicle-image-pony-rock.jpg");

INSERT INTO loan (borrowing_date, return_date, id_vehicle, id_user) VALUES
("2023-01-24", "2023-01-29", 1, 1),
("2023-02-05", "2023-02-17", 2, 5),
("2023-02-10", "2023-02-14", 1, 4),
("2023-03-05", "2023-03-22", 1, 1),
("2023-01-19", "2023-01-21", 2, 2)
;