-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'WORKER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "packages" TEXT NOT NULL,
    "numberPerHead" TEXT NOT NULL,
    "typeOfEvent" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "dateOfEvent" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
