CREATE TABLE IF NOT EXISTS "admin_user" (
    "id" int(12) NOT NULL AUTO_INCREMENT,
    "account" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "hash" varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;