/*
  Warnings:

  - Added the required column `updatedDate` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "image" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "updatedDate" DATETIME NOT NULL
);
INSERT INTO "new_Users" ("email", "id", "image", "name", "paid", "password") SELECT "email", "id", "image", "name", "paid", "password" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
