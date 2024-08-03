-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN');

-- CreateTable
CREATE TABLE "Shoes" (
    "id" SERIAL NOT NULL,
    "name_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "rating" DOUBLE PRECISION,
    "img_URL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "new_arrival" BOOLEAN NOT NULL DEFAULT true,
    "hot_item" BOOLEAN NOT NULL,
    "men" BOOLEAN NOT NULL,
    "women" BOOLEAN NOT NULL,
    "kids" BOOLEAN NOT NULL,
    "shoeId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenShoeSize" (
    "id" SERIAL NOT NULL,
    "eur_39" BOOLEAN NOT NULL,
    "eur_40" BOOLEAN NOT NULL,
    "eur_41" BOOLEAN NOT NULL,
    "eur_42" BOOLEAN NOT NULL,
    "eur_43" BOOLEAN NOT NULL,
    "eur_44" BOOLEAN NOT NULL,
    "eur_45" BOOLEAN NOT NULL,
    "eur_46" BOOLEAN NOT NULL,
    "eur_47" BOOLEAN NOT NULL,
    "eur_48" BOOLEAN NOT NULL,
    "eur_49" BOOLEAN NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "MenShoeSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WomenShoeSize" (
    "id" SERIAL NOT NULL,
    "eur_33" BOOLEAN NOT NULL,
    "eur_34" BOOLEAN NOT NULL,
    "eur_35" BOOLEAN NOT NULL,
    "eur_36" BOOLEAN NOT NULL,
    "eur_37" BOOLEAN NOT NULL,
    "eur_38" BOOLEAN NOT NULL,
    "eur_39" BOOLEAN NOT NULL,
    "eur_40" BOOLEAN NOT NULL,
    "eur_41" BOOLEAN NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "WomenShoeSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KidsShoeSize" (
    "id" SERIAL NOT NULL,
    "eur_30" BOOLEAN NOT NULL,
    "eur_31" BOOLEAN NOT NULL,
    "eur_32" BOOLEAN NOT NULL,
    "eur_33" BOOLEAN NOT NULL,
    "eur_34" BOOLEAN NOT NULL,
    "eur_35" BOOLEAN NOT NULL,
    "eur_36" BOOLEAN NOT NULL,
    "eur_37" BOOLEAN NOT NULL,
    "eur_38" BOOLEAN NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "KidsShoeSize_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_shoeId_key" ON "Category"("shoeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "MenShoeSize_categoryId_key" ON "MenShoeSize"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "WomenShoeSize_categoryId_key" ON "WomenShoeSize"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "KidsShoeSize_categoryId_key" ON "KidsShoeSize"("categoryId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_shoeId_fkey" FOREIGN KEY ("shoeId") REFERENCES "Shoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenShoeSize" ADD CONSTRAINT "MenShoeSize_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WomenShoeSize" ADD CONSTRAINT "WomenShoeSize_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KidsShoeSize" ADD CONSTRAINT "KidsShoeSize_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
