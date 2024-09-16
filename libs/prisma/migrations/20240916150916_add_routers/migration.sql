-- CreateTable
CREATE TABLE "Router" (
    "id" SERIAL NOT NULL,
    "mac" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Router_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Router_mac_key" ON "Router"("mac");
